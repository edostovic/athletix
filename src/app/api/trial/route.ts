import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { Resend } from "resend";
import { buildTrialConfirmationHtml } from "@/emails/trial-confirmation";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, preferred_date, preferred_time, notes } = body;

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
    if (!phone || typeof phone !== "string" || phone.trim().length === 0) {
      errors.push("Phone number is required.");
    }
    if (!preferred_date || typeof preferred_date !== "string") {
      errors.push("Preferred date is required.");
    } else {
      const parsed = new Date(preferred_date);
      if (isNaN(parsed.getTime())) {
        errors.push("Preferred date must be a valid date.");
      }
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
      .from("trial_bookings")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim(),
        preferred_date,
        preferred_time: preferred_time?.trim() || null,
        notes: notes?.trim() || null,
        status: "pending",
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to save your booking." },
        { status: 500 }
      );
    }

    // --- Send confirmation email to the user (best-effort) ---
    if (resend) {
      try {
        const dateFormatted = new Date(preferred_date).toLocaleDateString(
          "en-US",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }
        );

        await resend.emails.send({
          from: "Athletix <noreply@athletix.com>",
          to: [email],
          subject: "Your Free Trial Booking at Athletix",
          html: buildTrialConfirmationHtml({
            name,
            email,
            phone,
            preferredDate: dateFormatted,
            preferredTime: preferred_time,
          }),
        });
      } catch (emailError) {
        console.error("Confirmation email failed:", emailError);
      }
    }

    return NextResponse.json(
      { success: true, id: data.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Trial booking API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
