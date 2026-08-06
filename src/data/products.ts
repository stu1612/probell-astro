export interface ProductStat {
  number: string;
  label: string;
}

export interface Product {
  id: string;
  label: string;
  labelAccent: "red" | "gold";
  category: string;
  name: string;
  body: string;
  image: string;
  imageAlt: string;
  imageMuted?: boolean;
  flip?: boolean;
  overlay?: boolean;
  stats: ProductStat[];
}

export const PRODUCTS: Product[] = [
  {
    id: "01",
    label: "01 — Strength",
    labelAccent: "red",
    category: "Foundation",
    name: "Whey 100\nProtein",
    body: "The foundation of every serious stack. 25g of pure protein per serve. No fillers, no shortcuts. Built for people who train like their results depend on it — because they do.",
    image: "/images/lifestyle/three-flavours.jpg",
    imageAlt: "Probell Whey 100 Protein — three flavours",
    stats: [
      { number: "25g", label: "Pure protein" },
      { number: "100%", label: "Whey isolate" },
    ],
  },
  {
    id: "02",
    label: "02 — Power",
    labelAccent: "gold",
    category: "Power",
    name: "Creatine",
    body: "More reps. Heavier lifts. Faster recovery between sets. Pure creatine monohydrate — nothing added, nothing hidden. The most researched supplement in sport. Now in the only container worth lifting.",
    image: "/images/products/creatine_bg.jpg",
    imageAlt: "Probell Creatine in gym setting",
    flip: true,
    stats: [
      { number: "5g", label: "Per serve" },
      { number: "100%", label: "Monohydrate" },
    ],
  },
  {
    id: "03",
    label: "03 — Intensity",
    labelAccent: "red",
    category: "Ignite",
    name: "Pre-Workout",
    body: "Explosive energy without the crash. Dialled-in focus from the first rep to the last. Coming soon — built to the same standard as everything else Probell makes.",
    image: "/images/products/pwo_bg.jpg",
    imageAlt: "Probell athlete",
    overlay: true,
    stats: [
      { number: "300mg", label: "Caffeine" },
      { number: "6g", label: "Citrulline" },
    ],
  },
];
