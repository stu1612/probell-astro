import type { ImageMetadata } from "astro";
import supplements from "@assets/audience/supplements.jpg";
import retailer from "@assets/audience/retailer.jpg";
import distributor from "@assets/audience/distributor.jpg";
import sales from "@assets/audience/sales.jpg";

export interface AudienceCard {
  number: string;
  headline: string;
  descriptor: string;
  href: string;
  image: ImageMetadata;
  tint?: "gold" | "grey" | "red";
}

export const AUDIENCE_CARDS: AudienceCard[] = [
  {
    number: "01",
    headline: "See More",
    descriptor: "Premium protein, built for people who train hard.",
    href: "/supplements",
    image: supplements,
    tint: "gold",
  },
  {
    number: "02",
    headline: "Retailers",
    descriptor: "Stock Probell. Gyms, stores, and studios welcome.",
    href: "/retail",
    image: retailer,
    tint: "gold",
  },
  {
    number: "03",
    headline: "Distributors",
    descriptor: "Wholesale and national distribution opportunities.",
    href: "/distributor",
    image: distributor,
    tint: "gold",
  },
  {
    number: "04",
    headline: "Sales Partners",
    descriptor: "Independent reps. Real commission. Real product.",
    href: "/sales",
    image: sales,
    tint: "gold",
  },
];
