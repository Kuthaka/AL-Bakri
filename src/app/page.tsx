import { Hero } from "@/components/home/Hero";
import { TheQuestion } from "@/components/home/TheQuestion";
import { TheSource } from "@/components/home/TheSource";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TheJourney } from "@/components/home/TheJourney";
import { Quality } from "@/components/home/Quality";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TheQuestion />
      <TheSource />
      <ProductShowcase />
      <div className="hidden md:block">
        <TheJourney />
      </div>
      <Quality />
      <FinalCTA />
    </>
  );
}
