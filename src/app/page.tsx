"use client";

import { useState } from "react";
import { Preloader } from "@/components/layout/Preloader";
import { Hero } from "@/components/home/Hero";
import { TheQuestion } from "@/components/home/TheQuestion";
import { TheSource } from "@/components/home/TheSource";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { TheJourney } from "@/components/home/TheJourney";
import { Quality } from "@/components/home/Quality";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <Preloader onComplete={() => setIsLoaded(true)} />
      <Hero isLoaded={isLoaded} />
      <TheQuestion />
      <TheSource />
      <ProductShowcase />
      <TheJourney />
      <Quality />
      <FinalCTA />
    </>
  );
}
