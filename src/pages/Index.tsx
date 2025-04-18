
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#cddddd]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
