export const SITE = {
  name: "ATHLETIX Gym",
  brand: "Athletix",
  tagline: "Bez izgovora. Samo rezultati.",
  location: "Banovići, Bosna i Hercegovina",
  phone: "+387 61 954 069",
  whatsapp: "https://wa.me/38761954069",
  email: "atheltixgym.info@gmail.com",
  instagram: "https://www.instagram.com/athletix_gym/",
  hours: {
    weekday: "Pon–Pet: 06:00 – 22:00",
    saturday: "Sub: 08:00 – 20:00",
    sunday: "Ned: 10:00 – 16:00",
    full: "Pon–Pet: 06:00–22:00 • Sub: 08:00–20:00 • Ned: 10:00–16:00",
  },
  copyright: `© ${new Date().getFullYear()} ATHLETIX Gym. Sva prava zadržana.`,
} as const;

export const PRICING = {
  dayPass: { label: "Dnevna", price: "5 KM" },
  monthly: { label: "Mjesečna", price: "45 KM" },
  annual: { label: "Godišnja", price: "399 KM" },
} as const;

export const NAV = {
  links: [
    { href: "/", label: "Početna" },
    { href: "/about", label: "O nama" },
    { href: "/classes", label: "Treninzi" },
    { href: "/pricing", label: "Cenovnik" },
    { href: "/contact", label: "Kontakt" },
  ],
  cta: "Zakaži besplatno",
} as const;

export const SEO = {
  title: "ATHLETIX Gym Banovići — Teretana za svakoga",
  description:
    "ATHLETIX Gym u Banovićima — teretana bez izgovora. Stručno vođenje, moderna oprema, zajednica koja te podržava. Probaj besplatno 1 dan.",
} as const;
