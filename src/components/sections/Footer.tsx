import Link from "next/link";

const footerLinks = [
  {
    title: "Quick Links",
    items: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/classes", label: "Classes" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Support",
    items: [
      { href: "/contact", label: "Contact Us" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Community",
    items: [
      { href: "#", label: "Instagram" },
      { href: "#", label: "Facebook" },
      { href: "#", label: "YouTube" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-white">
              Athletix
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Real coaching. Real community. Zero intimidation.
            </p>
            <div className="space-y-1 text-sm text-neutral-500">
              <p>123 Fitness Street</p>
              <p>City, State 10001</p>
              <p className="pt-1">Mon–Fri: 6am – 10pm</p>
              <p>Sat–Sun: 8am – 8pm</p>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-300">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-xs text-neutral-600">
          <p>&copy; {currentYear} Athletix Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
