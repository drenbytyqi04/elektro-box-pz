export interface Brand {
  name: string;
  category: string;
}

export const brands: Brand[] = [
  { name: "ABB", category: "Electrical" },
  { name: "Schneider Electric", category: "Electrical" },
  { name: "Legrand", category: "Electrical" },
  { name: "Hikvision", category: "Security" },
  { name: "Ajax", category: "Security" },
  { name: "Control4", category: "Automation" },
  { name: "Lutron", category: "Lighting" },
  { name: "Philips Hue", category: "Lighting" },
];
