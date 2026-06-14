// src/data/categories.ts
// NOTE: Stats are placeholder values.
// Confirm all figures with client before launch.

export interface CategoryStat {
  value: string;
  label: string;
}

export interface CategorySection {
  heading: string;
  content: string;
  stat?: {
    value: string;
    label: string;
  };
}

export interface CategoryPage {
  slug: string;
  title: string;
  metaDescription: string;
  hero: {
    image: string;
    alt: string;
  };
  intro: string;
  statement: string;
  sections: CategorySection[];
  cta: {
    label: string;
    href: string;
  };
}

export const CATEGORY_PAGES: CategoryPage[] = [
  {
    slug: "whey",
    title: "Whey 100 Protein",
    metaDescription:
      "25g pure whey protein per serve. No fillers, no shortcuts. Built for people who already show up.",
    hero: {
      image: "/images/trending/trending-chocolate.jpg",
      alt: "Probell Whey 100 Protein",
    },
    intro:
      "Whey protein is the foundation of every serious stack. Probell Whey 100 is built to one standard — if it does not serve the athlete, it does not go in.",
    statement: "No fillers. No shortcuts. No apology.",
    sections: [
      {
        heading: "What Is Whey Protein",
        content: `Whey is a complete protein derived from milk during the cheese-making process. It contains all nine essential amino acids your body cannot produce on its own. Fast-digesting and highly bioavailable, it gets to your muscles quickly — exactly when they need it most. Probell Whey 100 uses whey isolate as its primary source. No fillers, no proprietary blends, no mystery ingredients. What is on the label is what is in the tub.`,
        stat: { value: "25G", label: "Pure protein per serve" },
      },
      {
        heading: "Who Is It For",
        content: `Whey 100 is built for people who already show up. Athletes, gym members, and serious trainers who want a clean, effective protein without the noise. If your members train hard and care about what goes into their body, this is the product they have been waiting for someone to stock.`,
        stat: { value: "100%", label: "Whey isolate" },
      },
      {
        heading: "When To Use It",
        content: `Whey protein is most effective within 30 to 60 minutes after training. It can also be used first thing in the morning or between meals to hit daily protein targets. Consistency matters more than timing. Hit your numbers every day.`,
        stat: { value: "0G", label: "Fillers. Ever." },
      },
    ],
    cta: {
      label: "View Products",
      href: "/supplements",
    },
  },
  {
    slug: "creatine",
    title: "Creatine",
    metaDescription:
      "Pure creatine monohydrate. More reps, faster recovery, no ceiling. The most researched supplement in sport.",
    hero: {
      image: "/images/trending/trending-creatine.jpg",
      alt: "Probell Creatine",
    },
    intro:
      "Creatine is the most researched supplement in sport. The evidence is not debated. More reps, heavier lifts, faster recovery between sets. Now in the only container worth lifting.",
    statement:
      "The most researched supplement in sport. Now in the only container worth lifting.",
    sections: [
      {
        heading: "What Is Creatine",
        content: `Creatine is a naturally occurring compound found in muscle cells. It helps your muscles produce energy during high intensity exercise. Probell Creatine is pure creatine monohydrate — the most studied form, the most effective form. Nothing added, nothing hidden.`,
        stat: { value: "5G", label: "Pure creatine monohydrate per serve" },
      },
      {
        heading: "Who Is It For",
        content: `Creatine benefits anyone who trains with intensity — weightlifters, sprinters, combat athletes, CrossFit, team sports. It is one of the few supplements with decades of peer-reviewed research behind it. This is not a trend product. It is a staple that belongs in every serious gym's retail offering.`,
        stat: { value: "100%", label: "Unflavored, mixes clean" },
      },
      {
        heading: "When To Use It",
        content: `Creatine works through consistent daily use. Take 5g per day, every day — timing matters less than consistency. What matters is hitting the daily dose without gaps. Muscle creatine stores take time to saturate and time to deplete.`,
        stat: { value: "0", label: "Proprietary blends" },
      },
    ],
    cta: {
      label: "View Products",
      href: "/supplements",
    },
  },
  {
    slug: "pre-workout",
    title: "Pre-Workout",
    metaDescription:
      "Explosive energy without the crash. Dialled-in focus from the first rep to the last.",
    hero: {
      image: "/images/trending/trending-strawberry.jpg",
      alt: "Probell Pre-Workout",
    },
    intro:
      "Pre-workout built to the same standard as everything else Probell makes. Explosive energy, dialled-in focus, no crash. Coming soon.",
    statement: "Explosive energy. Dialled-in focus. No crash.",
    sections: [
      {
        heading: "What Is Pre-Workout",
        content: `Pre-workout is a supplement formulation designed to enhance energy, focus, and performance during training. The best formulas combine evidence-backed ingredients at effective doses — not proprietary blends that hide how little of each ingredient is actually present. Probell Pre-Workout is built on a transparent formula. Every ingredient listed. Every dose justified.`,
        stat: { value: "200MG", label: "Caffeine per serve" },
      },
      {
        heading: "Who Is It For",
        content: `Pre-workout is for athletes who train with intention. Early morning sessions before work. Evening sessions after a full day. The ones who show up regardless and need their energy to match their commitment. It is not for the person who needs caffeine to get off the couch.`,
        stat: { value: "0", label: "Artificial crashes" },
      },
      {
        heading: "When To Use It",
        content: `Take 20 to 30 minutes before training to allow the formula to absorb and activate. Avoid taking within four to six hours of sleep. Use on training days only. Pre-workout is a performance tool, not a daily stimulant. Cycle off periodically to maintain sensitivity.`,
        stat: { value: "100%", label: "Transparent formula" },
      },
    ],
    cta: {
      label: "View Products",
      href: "/supplements",
    },
  },
  {
    slug: "mass-gainer",
    title: "Mass Gainer",
    metaDescription:
      "Serious calories for serious training. High protein, high calorie formula built for athletes who need to grow.",
    hero: {
      image: "/images/trending/trending-chocolate.jpg",
      alt: "Probell Mass Gainer",
    },
    intro:
      "Mass gainer for athletes who need to eat more than they can stomach. High protein, high calorie, built to the same uncompromising standard as everything else Probell makes.",
    statement: "Serious calories for serious training. No compromise.",
    sections: [
      {
        heading: "What Is Mass Gainer",
        content: `Mass gainer is a high calorie, high protein supplement designed for athletes who struggle to consume enough food to support muscle growth. Probell Mass Gainer delivers serious calories from quality sources. No cheap filler carbohydrates inflating the numbers. Every calorie earns its place.`,
        stat: { value: "50G", label: "Protein per serve" },
      },
      {
        heading: "Who Is It For",
        content: `Mass gainer is for athletes in a building phase who need a caloric surplus to support muscle growth. Hard gainers who struggle to eat enough. Athletes coming off a cut who need to rebuild. Strength and power athletes with high daily caloric demands.`,
        stat: { value: "750", label: "Calories per serve" },
      },
      {
        heading: "When To Use It",
        content: `Mass gainer is most effective as a post-workout shake or as an additional meal between whole food meals. Use it to hit caloric targets on days when appetite or time makes whole food difficult. Real food, real training, real results. The gainer fills the gaps.`,
        stat: { value: "0G", label: "Filler carbohydrates" },
      },
    ],
    cta: {
      label: "View Products",
      href: "/supplements",
    },
  },
];
