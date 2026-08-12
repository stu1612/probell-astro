export interface AudienceCard {
  number: string;
  headline: string;
  descriptor: string;
  href: string;
  image: string;
  tint?: "gold" | "grey" | "red";
}

export const AUDIENCE_CARDS: AudienceCard[] = [
  {
    number: "01",
    headline: "See More",
    descriptor: "Premium protein, built for people who train hard.",
    href: "/supplements",
    image: "/images/audience/supplements.jpg",
    tint: "gold",
  },
  {
    number: "02",
    headline: "Retailers",
    descriptor: "Stock Probell. Gyms, stores, and studios welcome.",
    href: "/retail",
    image: "/images/audience/retailer.jpg",
    tint: "gold",
  },
  {
    number: "03",
    headline: "Distributors",
    descriptor: "Wholesale and national distribution opportunities.",
    href: "/distributor",
    image: "/images/audience/distributor.jpg",
    tint: "gold",
  },
  {
    number: "04",
    headline: "Sales Partners",
    descriptor: "Independent reps. Real commission. Real product.",
    href: "/sales",
    image: "/images/audience/sales.jpg",
    tint: "gold",
  },
];
