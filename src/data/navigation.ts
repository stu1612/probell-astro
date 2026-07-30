export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Supplements", href: "/supplements" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/#contact" },
];

export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Supplements", href: "/supplements" },
  { label: "Learn", href: "/learn" },
  { label: "Contact", href: "/#contact" },
  { label: "Legal", href: "/legal" },
];

export const FOOTER_SITE_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Supplements", href: "/supplements" },
  { label: "Learn", href: "/learn" },
];

export const FOOTER_PRODUCT_LINKS: NavLink[] = [
  { label: "Whey 100", href: "/supplements" },
  { label: "Creatine", href: "/supplements" },
  { label: "Pre-Workout", href: "/supplements" },
];

export const FOOTER_LEARN_LINKS: NavLink[] = [
  { label: "Whey Protein", href: "/learn" },
  { label: "Creatine", href: "/learn" },
  { label: "Pre-Workout", href: "/learn" },
  { label: "Mass Gainer", href: "/learn" },
];

export const FOOTER_PARTNER_LINKS: NavLink[] = [
  { label: "Sales", href: "/sales" },
  { label: "Retail", href: "/retail" },
  { label: "Distributor", href: "/distributor" },
];
