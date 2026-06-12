export interface Stat {
  number: string;
  label: string;
  accent: boolean;
}

export const STATS: Stat[] = [
  { number: "25g", label: "Pure protein per serve", accent: true },
  { number: "100%", label: "Whey isolate. No blends. No compromise.", accent: false },
  { number: "0g", label: "Fillers. Ever.", accent: false },
  { number: "3", label: "Products. All stocked and ready to move.", accent: false },
];
