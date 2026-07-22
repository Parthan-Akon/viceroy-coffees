// Ordered light -> dark. `intensity` (1-8) drives both the spectrum bar
// color interpolation and horizontal position in RoastProfiles.jsx --
// the layout encodes the roast progression instead of just listing it.
export const roasts = [
  { id: "light", name: "Light Roast", intensity: 1, note: "Highest acidity, most origin character" },
  { id: "medium", name: "Medium Roast", intensity: 2, note: "Balanced acidity and body" },
  { id: "medium-dark", name: "Medium Dark", intensity: 3, note: "Rounder body, subtle sweetness" },
  { id: "city", name: "City Roast", intensity: 4, note: "Classic American cafe profile" },
  { id: "vienna", name: "Vienna Roast", intensity: 5, note: "Light oil sheen, caramel notes" },
  { id: "dark", name: "Dark Roast", intensity: 6, note: "Bold, low acidity, heavier body" },
  { id: "french", name: "French Roast", intensity: 7, note: "Smoky, oily, minimal origin flavor" },
  { id: "italian", name: "Italian Roast", intensity: 8, note: "Deepest roast, built for espresso" },
];
