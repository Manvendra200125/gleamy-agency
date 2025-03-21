"use client";

import { useEffect, useState } from "react";
import PageLoader from "@/components/page-loader";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import WatchVideoButton from "@/components/watch-video-button";
import VerticalText from "@/components/vertical-text";
import DesignCircle from "@/components/designcircle"; // ✅ Correct import

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Navbar />
          <div className="relative">
            <DesignCircle /> {/* ✅ Now correctly displayed */}
            <VerticalText />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <PortfolioSection />
            <WatchVideoButton />
          </div>
        </>
      )}
    </main>
  );
}
