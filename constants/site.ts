import { env } from "@/lib/env";

export const siteConfig = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  url: env.NEXT_PUBLIC_SITE_URL,

  description: "Uniwersalny template Next.js .",
  links: {
    github: "https://github.com/sabaudianin",
  },
} as const;

export const navLinks = [
  // TODO:nav
  { href: "/", label: "Home" },
] as const;
