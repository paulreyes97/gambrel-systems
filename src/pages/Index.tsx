
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SecondaryHero from "@/components/SecondaryHero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gambrel-background">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SecondaryHero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
