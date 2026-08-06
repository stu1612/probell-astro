// src/data/supplements.ts
// Four confirmed products for launch: Whey, Creatine, PWO, Mass Gainer.
// No advertised flavours per client confirmation (29 July 2026).
// Images are placeholders — client to supply final product photography.
// Client to confirm final ingredients and nutritional data before launch.

export interface ProductStat {
  value: string;
  label: string;
}

export interface ProductUsage {
  when: string;
  amount: string;
  mixWith: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  image: string;
  slugImage: string;
  backgroundImage: string;
  description: string;
  stats: ProductStat[];
  ingredients: string;
  usage: ProductUsage;
}

// Shared placeholder background for /supplements/[slug] pages until
// per-product photography is confirmed. Swap individually as assets
// arrive — do not remove the field, just update the path per product.
export const DEFAULT_PRODUCT_BACKGROUND =
  "/images/products/backgrounds/default-product-bg.jpg";

export const SUPPLEMENTS: Product[] = [
  {
    slug: "whey",
    name: "Whey 100 Protein",
    category: "whey",
    image: "/images/products/whey_new.png",
    slugImage: "/images/lifestyle/athlete-walking.jpg",
    backgroundImage: DEFAULT_PRODUCT_BACKGROUND,
    description: `The foundation of every serious stack. Built for athletes who train hard and expect their nutrition to match their effort. 25g of pure whey isolate per serve — no fillers, no proprietary blends, no compromise. Every ingredient on the label earns its place. Mixes clean, digests clean, and gets out of the way so you can get back to work.`,
    stats: [
      { value: "25G", label: "Protein per serve" },
      { value: "100%", label: "Whey isolate" },
      { value: "0G", label: "Fillers" },
      { value: "130", label: "Calories per serve" },
    ],
    ingredients:
      "Whey Protein Isolate, Natural Flavour, Sunflower Lecithin, Stevia Leaf Extract. Contains milk. Manufactured in a facility that also processes soy, egg, and tree nuts.",
    usage: {
      when: "Within 30 to 60 minutes after training, or first thing in the morning to break an overnight fast.",
      amount: "1 scoop (30g) per serve.",
      mixWith:
        "Mix with 250–300ml of cold water or milk. Shake well for 20 to 30 seconds.",
    },
  },
  {
    slug: "creatine",
    name: "Creatine",
    category: "creatine",
    image: "/images/products/whey_new.png",
    slugImage: "/images/products/creatine_bg.jpg",
    backgroundImage: DEFAULT_PRODUCT_BACKGROUND,
    description: `Pure creatine monohydrate. The most researched supplement in sport — now in the only container worth lifting. 5g per serve of pharmaceutical-grade creatine monohydrate. No proprietary blends, no mystery ingredients, no fillers. What is on the label is what is in the tub. Mixes clean, dissolves fully, no chalky residue.`,
    stats: [
      { value: "5G", label: "Creatine monohydrate per serve" },
      { value: "100%", label: "Pharmaceutical grade" },
      { value: "0", label: "Proprietary blends" },
      { value: "20", label: "Calories per serve" },
    ],
    ingredients:
      "Creatine Monohydrate, Natural Flavour, Citric Acid, Stevia Leaf Extract. Gluten free. Non GMO. Manufactured in a GMP certified facility.",
    usage: {
      when: "Daily — timing matters less than consistency. Most athletes take it post-workout or with their first meal.",
      amount: "1 scoop (5g) per serve. Take every day, including rest days.",
      mixWith:
        "Mix with 250–300ml of cold water. Stir or shake until fully dissolved. Can also be added to your post-workout protein shake.",
    },
  },
  {
    slug: "pwo",
    name: "Pre-Workout",
    category: "pwo",
    image: "/images/products/whey_new.png",
    slugImage: "/images/products/pwo_bg.jpg",
    backgroundImage: DEFAULT_PRODUCT_BACKGROUND,
    description: `Built to get you under the bar and moving. A clean, dosed pre-workout formula — no proprietary blends hiding underdosed ingredients, no crash, no jitters that pull focus off the lift. Every dose is exactly what's printed on the label, at a level that actually does something. For athletes who want output, not a sugar rush.`,
    stats: [
      { value: "300MG", label: "Caffeine per serve" },
      { value: "6G", label: "Citrulline malate per serve" },
      { value: "0", label: "Proprietary blends" },
      { value: "10", label: "Calories per serve" },
    ],
    ingredients:
      "Citrulline Malate, Beta-Alanine, Caffeine Anhydrous, L-Tyrosine, Natural Flavour, Citric Acid, Stevia Leaf Extract. Gluten free. Non GMO. Manufactured in a GMP certified facility.",
    usage: {
      when: "20 to 30 minutes before training. Not recommended within 6 hours of sleep due to caffeine content.",
      amount:
        "1 scoop (10g) per serve. Assess tolerance with a half scoop before taking a full dose.",
      mixWith:
        "Mix with 250–300ml of cold water. Stir or shake until fully dissolved.",
    },
  },
  {
    slug: "gainer",
    name: "Mass Gainer",
    category: "gainer",
    image: "/images/products/whey_new.png",
    slugImage: "/images/products/gainer_bg.jpg",
    backgroundImage: DEFAULT_PRODUCT_BACKGROUND,
    description: `Built for the athlete who can't eat enough to grow. A dense blend of whey protein, complex carbohydrates, and healthy fats designed to put on size without cutting corners. No sugar-loaded filler carbs, no bloating, no compromise on protein quality. Formulated for hard training days when your body needs more than a standard shake can deliver. Mixes clean, digests clean, built for the grind.`,
    stats: [
      { value: "50G", label: "Protein per serve" },
      { value: "250G", label: "Carbohydrates per serve" },
      { value: "1250", label: "Calories per serve" },
      { value: "0", label: "Proprietary blends" },
    ],
    ingredients:
      "Whey Protein Concentrate, Maltodextrin, Oat Flour, MCT Powder, Sunflower Lecithin, Digestive Enzyme Blend. Gluten free. Non GMO. Manufactured in a GMP certified facility.",
    usage: {
      when: "Between meals or post-workout on high-volume training days. Not a meal replacement — a caloric top-up for hard gainers.",
      amount:
        "2 scoops (150g) per serve. Start with 1 scoop if new to mass gainers, build up over 1–2 weeks.",
      mixWith:
        "Mix with 400–500ml of cold milk or water. Shake well — high density mixes better in a shaker bottle than stirred.",
    },
  },
];
