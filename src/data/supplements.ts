// src/data/supplements.ts
// Three products for initial build.
// Client to confirm full range, ingredients,
// and nutritional data before launch.

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
  flavour: string;
  category: string;
  image: string;
  description: string;
  stats: ProductStat[];
  ingredients: string;
  usage: ProductUsage;
}

export const SUPPLEMENTS: Product[] = [
  {
    slug: "whey-strawberry",
    name: "Whey 100 Protein",
    flavour: "Strawberry",
    category: "whey",
    image: "/images/products/probell_strawberry.png",
    description: `Whey 100 Protein is the foundation of every serious stack. Built for athletes who train hard and expect their nutrition to match their effort. 25g of pure whey isolate per serve — no fillers, no proprietary blends, no compromise. Every ingredient on the label earns its place. The Strawberry flavour delivers a clean, natural taste without artificial sweeteners or excessive flavouring. Mix it, drink it, get back to work.`,
    stats: [
      { value: "25G", label: "Protein per serve" },
      { value: "100%", label: "Whey isolate" },
      { value: "0G", label: "Fillers" },
      { value: "130", label: "Calories per serve" },
    ],
    ingredients:
      "Whey Protein Isolate, Natural Strawberry Flavour, Sunflower Lecithin, Stevia Leaf Extract. Contains milk. Manufactured in a facility that also processes soy, egg, and tree nuts.",
    usage: {
      when: "Within 30 to 60 minutes after training, or first thing in the morning to break an overnight fast.",
      amount: "1 scoop (30g) per serve.",
      mixWith:
        "Mix with 250–300ml of cold water or milk. Shake well for 20 to 30 seconds.",
    },
  },
  {
    slug: "whey-chocolate-peanut-butter",
    name: "Whey 100 Protein",
    flavour: "Chocolate Peanut Butter",
    category: "whey",
    image: "/images/products/probell_strawberry.png",
    description: `The same uncompromising Whey 100 formula — now in Chocolate Peanut Butter. Rich, satisfying, and built to the same standard as everything else Probell makes. 25g of pure whey isolate per serve. No fillers, no shortcuts, no apology. For the athlete who wants performance nutrition that actually tastes like it was made with care. Chocolate Peanut Butter is the flavour that keeps your members coming back.`,
    stats: [
      { value: "25G", label: "Protein per serve" },
      { value: "100%", label: "Whey isolate" },
      { value: "0G", label: "Fillers" },
      { value: "135", label: "Calories per serve" },
    ],
    ingredients:
      "Whey Protein Isolate, Natural Chocolate Flavour, Natural Peanut Butter Flavour, Cocoa Powder, Sunflower Lecithin, Stevia Leaf Extract. Contains milk and peanuts. Manufactured in a facility that also processes soy, egg, and tree nuts.",
    usage: {
      when: "Within 30 to 60 minutes after training, or between meals to hit daily protein targets.",
      amount: "1 scoop (30g) per serve.",
      mixWith:
        "Mix with 250–300ml of cold water or milk. Shake well for 20 to 30 seconds. Works exceptionally well with cold milk.",
    },
  },
  {
    slug: "creatine-caribbean-fruits",
    name: "Creatine",
    flavour: "Caribbean Fruits",
    category: "creatine",
    image: "/images/products/probell_strawberry.png",
    description: `Pure creatine monohydrate. The most researched supplement in sport — now in the only container worth lifting. 5g per serve of pharmaceutical-grade creatine monohydrate. No proprietary blends, no mystery ingredients, no fillers. What is on the label is what is in the tub. Caribbean Fruits delivers a light, refreshing flavour that mixes clean in water. For athletes who want the performance benefits of creatine without the chalky, unflavoured experience.`,
    stats: [
      { value: "5G", label: "Creatine monohydrate per serve" },
      { value: "100%", label: "Pharmaceutical grade" },
      { value: "0", label: "Proprietary blends" },
      { value: "20", label: "Calories per serve" },
    ],
    ingredients:
      "Creatine Monohydrate, Natural Caribbean Fruit Flavour, Citric Acid, Stevia Leaf Extract. Gluten free. Non GMO. Manufactured in a GMP certified facility.",
    usage: {
      when: "Daily — timing matters less than consistency. Most athletes take it post-workout or with their first meal.",
      amount: "1 scoop (5g) per serve. Take every day, including rest days.",
      mixWith:
        "Mix with 250–300ml of cold water. Stir or shake until fully dissolved. Can also be added to your post-workout protein shake.",
    },
  },
];
