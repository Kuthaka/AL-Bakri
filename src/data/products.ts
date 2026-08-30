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
}

export const products: Product[] = [
  {
    id: "1",
    slug: "premium-mango",
    name: "Premium Mango",
    category: "Fruits",
    shortDescription: "Naturally vibrant. Carefully selected.",
    description: "Sourced from the finest tropical orchards, our premium mangoes are hand-picked at peak ripeness to ensure a perfect balance of sweetness and vibrant color. Ideal for high-end retail and culinary applications.",
    image: "/fruits/Large_Red_Apples_PNG_Clipart.png",
    origin: "Tropical Regions",
    season: "Summer",
  },
  {
    id: "2",
    slug: "valencia-orange",
    name: "Valencia Orange",
    category: "Fruits",
    shortDescription: "Juicy, sweet, and perfectly round.",
    description: "Known for their exceptional juice content and vibrant color, our Valencia oranges are sourced from trusted groves. Perfect for juicing or eating fresh.",
    image: "/fruits/152571-photos-black-grapes-download-hd.png",
    origin: "Mediterranean",
    season: "Year-round",
  },
  {
    id: "3",
    slug: "organic-tomato",
    name: "Organic Tomato",
    category: "Vegetables",
    shortDescription: "Vine-ripened for rich flavor.",
    description: "Grown in nutrient-rich soil without synthetic pesticides, our organic tomatoes boast a deep red hue and a robust, earthy flavor profile. A staple for any professional kitchen.",
    image: "/fruits/pngtree-delicious-black-grapes-png-image_20004046.png",
    origin: "Local Farms",
    season: "Summer to Early Autumn",
  },
  {
    id: "4",
    slug: "hass-avocado",
    name: "Hass Avocado",
    category: "Specialty",
    shortDescription: "Creamy texture, rich taste.",
    description: "Our Hass avocados are celebrated for their creamy, buttery texture and nutty flavor. Carefully handled to prevent bruising, they arrive ready for culinary perfection.",
    image: "/fruits/Large_Red_Apples_PNG_Clipart.png",
    origin: "South America",
    season: "Year-round",
  },
  {
    id: "5",
    slug: "pomegranate",
    name: "Pomegranate",
    category: "Fruits",
    shortDescription: "Ruby-red arils bursting with flavor.",
    description: "Sourced for their deep red color and sweet-tart flavor, our pomegranates are a premium addition to any produce selection, offering both visual appeal and health benefits.",
    image: "/fruits/152571-photos-black-grapes-download-hd.png",
    origin: "Middle East",
    season: "Autumn to Winter",
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}
