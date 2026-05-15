import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — ATHLETIX Gym",
    default: "ATHLETIX Gym Banovići — Teretana za svakoga",
  },
  description:
    "ATHLETIX Gym u Banovićima — teretana bez izgovora. Stručno vođenje, moderna oprema, zajednica koja te podržava. Probaj besplatno 1 dan.",
  openGraph: {
    title: "ATHLETIX Gym Banovići",
    description: "Moderna teretana u Banovićima. Bez izgovora. Samo rezultati.",
    url: "https://athletix.vercel.app",
    siteName: "ATHLETIX Gym",
    locale: "bs_BA",
    type: "website",
    images: [{ url: "/athletix_logo.jpg", width: 200, height: 200 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bs"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthClub",
              name: "ATHLETIX Gym",
              description: "Moderna teretana u Banovićima sa vrhunskim trenerima i opremom.",
              url: "https://athletix.vercel.app",
              telephone: "+38761954069",
              email: "atheltixgym.info@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Alije Izetbegovića 134",
                addressLocality: "Banovići",
                postalCode: "75290",
                addressCountry: "BA",
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "06:00", closes: "22:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "06:00", closes: "22:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "06:00", closes: "22:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "06:00", closes: "22:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "06:00", closes: "22:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "16:00" },
              ],
              sameAs: [
                "https://www.instagram.com/athletix_gym/",
              ],
            }),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
