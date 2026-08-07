export interface Stat {
  number: string;
  label: string;
  accent: boolean;
}

export const STATS: Stat[] = [
  { number: "0", label: "Proprietary blends. Ever.", accent: true },
  {
    number: "4",
    label: "Formulations. All made in the USA. One Standard.",
    accent: false,
  },
  { number: "100%", label: "Label accuracy. No shortcuts.", accent: false },
  {
    number: "GMP",
    label: "Manufacturing. All products are made in a GMP-certified facility.",
    accent: false,
  },
];
