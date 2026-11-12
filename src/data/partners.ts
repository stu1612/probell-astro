// Content for the partner pages (/sales, /retail, /distributor), rendered
// by the shared parts in src/components/Partner/.

export interface PartnerReason {
  title: string;
  body: string;
}

export interface PartnerStep {
  step: string;
  label: string;
  body: string;
}

export const SALES_FACTS: string[] = [
  "Independent",
  "Commission-based",
  "US only",
];

export const SALES_REASONS: PartnerReason[] = [
  {
    title: "US-Made",
    body: "A no-compromise formula, made in the USA.",
  },
  {
    title: "The Product Starts the Conversation",
    body: "A kettlebell-shaped container nobody walks past.",
  },
  {
    title: "Ground Floor",
    body: "Early partners shape the network.",
  },
  {
    title: "Built for People Who Show Up",
    body: "If you already live this, you already know who it's for.",
  },
];

export const SALES_STEPS: PartnerStep[] = [
  {
    step: "01",
    label: "Apply",
    body: "A short form, a few minutes.",
  },
  {
    step: "02",
    label: "We Review",
    body: "Every application read personally, including any region or event opportunities you've flagged.",
  },
  {
    step: "03",
    label: "Conversation",
    body: "Commission structure and territory discussed 1:1.",
  },
  {
    step: "04",
    label: "Onboarding",
    body: "Materials and kit — details to follow.",
  },
];

export const RETAIL_FACTS: string[] = [
  "Wholesale pricing on request",
  "Direct ordering",
  "US only",
];

export const RETAIL_REASONS: PartnerReason[] = [
  {
    title: "Distinct on the Shelf",
    body: "The kettlebell-shaped container stands out on a shelf or gym floor, and gets members and customers talking.",
  },
  {
    title: "US-Made",
    body: "A no-compromise formula, made in the USA.",
  },
  {
    title: "A Direct Line",
    body: "A personal ordering relationship. No call center, no runaround.",
  },
];

export const RETAIL_STEPS: PartnerStep[] = [
  {
    step: "01",
    label: "Submit Your Request",
    body: "A short form, a couple minutes.",
  },
  {
    step: "02",
    label: "We Review",
    body: "Every request read personally.",
  },
  {
    step: "03",
    label: "Pricing Shared Directly",
    body: "Wholesale pricing and next steps sent to you.",
  },
  {
    step: "04",
    label: "Order",
    body: "Straightforward reordering once you're set up.",
  },
];
