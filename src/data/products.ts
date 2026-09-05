export type ProductCategory = "Fruits" | "Vegetables" | "Seasonal" | "Specialty";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  image: string;
  origin: string;
  season: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-mango",
    name: "Premium Mango",
    category: "Fruits",
    shortDescription: "Naturally sweet, rich aroma, and vibrant golden flesh.",
    description: "Sourced from the finest sun-drenched orchards, our premium mangoes are hand-picked at peak ripeness to ensure an unforgettable tropical sweetness and luscious texture.",
    image: "/products/mango.png",
    origin: "Tropical Orchards",
    season: "Summer",
    bgColor: "#FFF3DC",
    borderColor: "#FDE68A",
    accentColor: "#D97706",
  },
  {
    id: "2",
    slug: "sweet-grapes",
    name: "Sweet Grapes",
    category: "Fruits",
    shortDescription: "Crisp, seedless, and bursting with refreshing sweetness.",
    description: "Carefully cultivated for rich color, delicate thin skin, and an exquisite sweet-tart balance. Ideal for fresh snacking, artisanal cheese boards, and gourmet culinary displays.",
    image: "/products/grape.png",
    origin: "Mediterranean Vineyards",
    season: "Late Summer to Autumn",
    bgColor: "#F3E8FF",
    borderColor: "#DDD6FE",
    accentColor: "#7C3AED",
  },
  {
    id: "3",
    slug: "hass-avocado",
    name: "Hass Avocado",
    category: "Specialty",
    shortDescription: "Buttery, velvety texture with a delicate nutty finish.",
    description: "Celebrated worldwide for their rich healthy fats, flawless texture, and dark pebbled skin. Each avocado is harvested at optimal maturity to guarantee perfect ripeness.",
    image: "/products/avacado.png",
    origin: "Highland Groves",
    season: "Year-round",
    bgColor: "#EAF7EC",
    borderColor: "#BBF7D0",
    accentColor: "#15803D",
  },
  {
    id: "4",
    slug: "golden-pineapple",
    name: "Golden Pineapple",
    category: "Fruits",
    shortDescription: "Extra sweet, intensely fragrant, and golden tropical flavor.",
    description: "Harvested with care in nutrient-dense volcanic soil, delivering maximum juice content, elevated natural sweetness, and exceptional vitality in every slice.",
    image: "/products/pineapple.png",
    origin: "Tropical Coast",
    season: "Year-round",
    bgColor: "#FEF9C3",
    borderColor: "#FEF08A",
    accentColor: "#CA8A04",
  },
  {
    id: "5",
    slug: "crisp-apple",
    name: "Crisp Apple",
    category: "Fruits",
    shortDescription: "Crunchy, refreshing, and naturally balanced flavor.",
    description: "Freshly picked from mountain orchards, these apples offer a satisfying snap, vibrant ruby color, and pure orchard freshness.",
    image: "/products/apple.png",
    origin: "Alpine Valleys",
    season: "Autumn",
    bgColor: "#FEE2E2",
    borderColor: "#FECACA",
    accentColor: "#DC2626",
  },
  {
    id: "6",
    slug: "golden-papaya",
    name: "Golden Papaya",
    category: "Fruits",
    shortDescription: "Sweet, luscious, and sun-ripened tropical delight.",
    description: "Hand-picked for exceptional fragrance and natural sweetness, our golden papayas provide vibrant color and rich tropical flavor.",
    image: "/products/papaya.png",
    origin: "Tropical Orchards",
    season: "Year-round",
    bgColor: "#FFEDD5",
    borderColor: "#FED7AA",
    accentColor: "#EA580C",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
