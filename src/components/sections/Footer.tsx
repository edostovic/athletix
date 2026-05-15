import Link from "next/link";

const footerLinks = [
  {
    title: "Linkovi",
    items: [
      { href: "/", label: "Početna" },
      { href: "/about", label: "O nama" },
      { href: "/classes", label: "Treninzi" },
      { href: "/pricing", label: "Cenovnik" },
      { href: "/contact", label: "Kontakt" },
    ],
  },
  {
    title: "Pomoć",
    items: [
      { href: "/contact", label: "Kontaktiraj nas" },
    ],
  },
  {
    title: "Zajednica",
    items: [
      { href: "https://www.instagram.com/athletix_gym/", label: "Instagram" },
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
              ATHLETIX Gym
            </Link>
            <p className="text-sm leading-relaxed text-neutral-400">
              Bez izgovora. Samo rezultati.
            </p>
            <div className="space-y-1 text-sm text-neutral-500">
              <p>Banovići, Bosna i Hercegovina</p>
              <p>+387 61 954 069</p>
              <p>atheltixgym.info@gmail.com</p>
              <p className="pt-1">Pon–Pet: 06:00 – 22:00</p>
              <p>Sub: 08:00 – 20:00</p>
              <p>Ned: 10:00 – 16:00</p>
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
          <p>&copy; {currentYear} ATHLETIX Gym. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
}
