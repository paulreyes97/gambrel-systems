
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#F9F5F0' // Light cream background from logo
      }}
    >
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
