export const products = [
  {
    id: "arabica-100",
    name: "100% Arabica",
    ratio: { arabica: 100, robusta: 0 },
    note: "Bright, aromatic, gently acidic for buyers who want nuance in the cup.",
    featured: false,
  },
  {
    id: "blend-80-20",
    name: "80/20 Blend",
    ratio: { arabica: 80, robusta: 20 },
    note: "Our most-supplied blend: Arabica's aroma, balanced by Robusta's body and crema.",
    featured: true,
    badge: "Most Popular",
  },
  {
    id: "blend-70-30",
    name: "70/30 Blend",
    ratio: { arabica: 70, robusta: 30 },
    note: "Fuller-bodied and consistent under high-volume espresso service.",
    featured: false,
  },
  {
    id: "robusta-100",
    name: "100% Robusta",
    ratio: { arabica: 0, robusta: 100 },
    note: "Bold, high-crema, built for strength, a filter and instant-blend favourite.",
    featured: false,
  },
];
