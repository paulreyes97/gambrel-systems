
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SecondaryHero from "@/components/SecondaryHero";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

const Index = () => {
  // Force background color with Javascript as well
  useEffect(() => {
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      if (el instanceof HTMLElement) {
        el.style.backgroundColor = "#dddddd";
      }
    });
  }, []);

  return (
    <div 
      className="min-h-screen flex flex-col bg-[#dddddd]" 
      style={{ backgroundColor: "#dddddd" }}
    >
      <Navbar />
      <main 
        className="flex-grow bg-[#dddddd]" 
        style={{ backgroundColor: "#dddddd" }}
      >
        <Hero />
        <Features />
        <SecondaryHero />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
