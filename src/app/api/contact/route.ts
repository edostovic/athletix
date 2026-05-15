import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";
import { buildContactNotificationHtml } from "@/emails/contact-notification";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, interest, message } = body;

    // --- Validation ---
    const errors: string[] = [];
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.push("Name is required.");
    }
    if (
      !email ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      errors.push("A valid email address is required.");
    }
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      errors.push("Message is required.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // --- Insert into Supabase ---
    const supabase = createAdminClient();

    const { data, error } = await supabase
      .from("contact_submissions")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        interest: interest?.trim() || null,
        message: message.trim(),
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to save your message." },
        { status: 500 }
      );
    }

    // --- Send notification email (best-effort) ---
    if (resend && process.env.CONTACT_EMAIL) {
      try {
        await resend.emails.send({
          from: "Athletix <noreply@athletix.com>",
          to: [process.env.CONTACT_EMAIL],
          subject: `New Contact from ${name}`,
          html: buildContactNotificationHtml({
            name,
            email,
            phone,
            interest,
            message,
          }),
        });
      } catch (emailError) {
        // Don't fail the request if email fails
        console.error("Email notification failed:", emailError);
      }
    }

    return NextResponse.json(
      { success: true, id: data.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
