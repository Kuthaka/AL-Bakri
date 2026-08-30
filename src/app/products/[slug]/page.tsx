import { getProductBySlug, products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  return {
    title: `${product.name} | Premium Supplier`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <article className="min-h-screen bg-ivory text-dark-green pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <Link 
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase mb-12 hover:text-leaf transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">
          
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <span className="text-leaf font-semibold text-xs tracking-widest uppercase mb-2 block border-b border-dark-green/10 pb-4">
              {product.category}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              {product.name}
            </h1>
            <p className="text-xl md:text-2xl text-dark-green/70 font-medium text-balance mt-4">
              {product.shortDescription}
            </p>
            <p className="text-dark-green/80 leading-relaxed mt-4">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-dark-green/10 pt-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-dark-green/50 mb-2">Origin</h4>
                <p className="font-medium">{product.origin}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-dark-green/50 mb-2">Season</h4>
                <p className="font-medium">{product.season}</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden relative shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
