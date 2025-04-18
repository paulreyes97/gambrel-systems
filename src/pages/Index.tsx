
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#eeeeee]">
      <Navbar />
      <main className="flex-grow bg-[#eeeeee]">
        <Hero />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
