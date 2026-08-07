// src/data/catalog.ts
// Single source of truth for the 4 launch products — homepage
// ProductStrips, supplements listing, and /supplements/[slug] detail
// pages all read from here. Replaces the former src/data/products.ts
// (PRODUCTS) and src/data/supplements.ts (SUPPLEMENTS), merged and
// removed once every consumer migrated over.
//
// Fields dropped vs the two originals, and why:
// - label / labelAccent (PRODUCTS)   — unused; ProductStrip hardcodes the eyebrow color
// - backgroundImage (SUPPLEMENTS)    — unused; ProductHero reads slugImage instead
// - href (PRODUCTS)                  — derivable as `/supplements/${slug}`
// - category duplication             — PRODUCTS' branded pillar name ("Foundation" etc.)
//                                       kept over SUPPLEMENTS' plain slug-echo ("whey" etc.)
//
// RESOLVED: `description` (long-form, detail-page Overview) proved too
// heavy for the homepage strip's 46ch column once wired in. Added a
// hand-written `excerpt` — short key-message version of `description`,
// not a mechanical first-sentence slice — for strip/card-length placements.
//
// No advertised flavours per client confirmation (29 July 2026).
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
  id: string;
  slug: string;
  name: string;
  /** Branded pillar name — shown as the eyebrow label (e.g. "01 / Foundation"). */
  category: string;
  /** Visibility safeguard — "removed" hides the product from the site. Not a marketing/launch state. */
  status: "available" | "removed";
  /** One-sentence athlete-fit line. No pricing. */
  bestFor: string;
  /** Canonical long-form copy — detail-page Overview. */
  description: string;
  /** Short, hand-written key-message version of description — homepage strip, listing rows, cards. */
  excerpt: string;
  /** 4 canonical stats, most important first — strip/card views may take stats.slice(0, 2). */
  stats: ProductStat[];
  ingredients: string;
  usage: ProductUsage;
  /** Shared full-bleed gym photography — homepage strip + supplements listing. */
  image: string;
  imageAlt: string;
  imageMuted?: boolean;
  /** Strip layout alternation (homepage ProductStrips / supplements listing rows). */
  flip?: boolean;
  /** Full-bleed background variant, no side-by-side image column. */
  overlay?: boolean;
  /** Detail-page (/supplements/[slug]) hero background — still a shared placeholder, unrelated to this task. */
  slugImage: string;
}

export const DEFAULT_PRODUCT_BACKGROUND =
  "/images/products/backgrounds/default-product-bg.jpg";

export const PRODUCTS: Product[] = [
  {
    id: "01",
    slug: "whey",
    name: "Whey 100 Protein",
    category: "Foundation",
    status: "available",
    bestFor:
      "Athletes who want a clean protein base under everything else in their stack.",
    description:
      "The foundation of every serious stack. Built for athletes who train hard and expect their nutrition to match their effort. 25g of pure whey isolate per serve — no fillers, no proprietary blends, no compromise. Every ingredient on the label earns its place. Mixes clean, digests clean, and gets out of the way so you can get back to work.",
    excerpt:
      "The foundation of every serious stack. 25g of pure protein per serve. No fillers, no shortcuts — built for people who train like their results depend on it.",
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
    image: "/images/products/whey.jpg",
    imageAlt: "Probell Whey 100 Protein in gym setting",
    slugImage: "/images/bold-statement/focus.jpg",
  },
  {
    id: "02",
    slug: "creatine",
    name: "Creatine",
    category: "Power",
    status: "available",
    bestFor:
      "Lifters chasing more reps, heavier sets, and faster recovery between them.",
    description:
      "Pure creatine monohydrate. The most researched supplement in sport — now in the only container worth lifting. 5g per serve of pharmaceutical-grade creatine monohydrate. No proprietary blends, no mystery ingredients, no fillers. What is on the label is what is in the tub. Mixes clean, dissolves fully, no chalky residue.",
    excerpt:
      "More reps. Heavier lifts. Faster recovery between sets. Pure creatine monohydrate — nothing added, nothing hidden. The most researched supplement in sport.",
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
    image: "/images/products/creatine_bg.jpg",
    imageAlt: "Probell Creatine in gym setting",
    flip: true,
    slugImage: "/images/bold-statement/focus.jpg",
  },
  {
    id: "03",
    slug: "pwo",
    name: "Pre-Workout",
    category: "Ignite",
    status: "available",
    bestFor:
      "Athletes who want explosive focus from the first rep without the crash.",
    description:
      "Built to get you under the bar and moving. A clean, dosed pre-workout formula — no proprietary blends hiding underdosed ingredients, no crash, no jitters that pull focus off the lift. Every dose is exactly what's printed on the label, at a level that actually does something. For athletes who want output, not a sugar rush.",
    excerpt:
      "Explosive energy without the crash. Dialled-in focus from the first rep to the last — dosed exactly as printed, nothing hidden underneath.",
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
    image: "/images/products/pwo_bg.jpg",
    imageAlt: "Probell Pre-Workout in gym setting",
    overlay: true,
    slugImage: "/images/bold-statement/focus.jpg",
  },
  {
    id: "04",
    slug: "gainer",
    name: "Mass Gainer",
    category: "Surplus",
    status: "available",
    bestFor:
      "Hard-training athletes who can't out-eat their training volume.",
    description:
      "Built for the athlete who can't eat enough to grow. A dense blend of whey protein, complex carbohydrates, and healthy fats designed to put on size without cutting corners. No sugar-loaded filler carbs, no bloating, no compromise on protein quality. Formulated for hard training days when your body needs more than a standard shake can deliver. Mixes clean, digests clean, built for the grind.",
    excerpt:
      "Dense calories built for athletes who can't eat enough to grow. No sugar-loaded filler, no bloating — no compromise on protein quality.",
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
    image: "/images/products/gainer.jpg",
    imageAlt: "Probell Mass Gainer athlete",
    flip: true,
    slugImage: "/images/bold-statement/focus.jpg",
  },
];
