
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SecondaryHero from "@/components/SecondaryHero";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#dddddd]">
      <Navbar />
      <main className="flex-grow bg-[#dddddd]">
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
