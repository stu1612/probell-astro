export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Supplements", href: "/supplements" },
  { label: "About", href: "/#brand-story" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_SITE_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Supplements", href: "/supplements" },
  { label: "About", href: "/#brand-story" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_PRODUCT_LINKS: NavLink[] = [
  { label: "Whey 100", href: "/supplements" },
  { label: "Creatine", href: "/supplements" },
  { label: "Pre-Workout", href: "/supplements" },
  { label: "Mass Gainer", href: "/supplements" },
];

export const FOOTER_LEARN_LINKS: NavLink[] = [
  { label: "Whey Protein", href: "/whey" },
  { label: "Creatine", href: "/creatine" },
  { label: "Pre-Workout", href: "/pre-workout" },
  { label: "Mass Gainer", href: "/mass-gainer" },
];
