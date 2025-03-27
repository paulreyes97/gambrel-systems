
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#f5f5f5' // Very subtle light grey background
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
