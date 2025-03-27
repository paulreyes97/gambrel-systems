
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Paperclip } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  
  const [attachment, setAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for contacting Gambrel Systems. We'll be in touch shortly.",
      });
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
      setAttachment(null);
    }, 1500);
  };
  
  return (
    <div 
      className="min-h-screen flex flex-col" 
      id="top"
      style={{
        backgroundImage: `url('/lovable-uploads/ae59f23b-fa65-4b7b-a282-8243f38f4b0e.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-black bg-opacity-70 py-24">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h1 className="heading-xl mb-6 text-white">Contact Us</h1>
            <p className="body-lg text-gambrel-silver max-w-3xl mx-auto">
              Interested in learning how we can transform your construction operations? Get in touch with our team.
            </p>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-24">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="bg-black bg-opacity-80 p-8 rounded-lg text-white">
                <h2 className="heading-md mb-6">Get In Touch</h2>
                <p className="body-md text-gambrel-silver mb-8">
                  Fill out the form below, and our team will contact you to discuss how we can help your construction business.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">Headquarters</h3>
                    <p className="body-md">
                      Address: 180 Gamble Ln<br />
                      Pueblo, CO 81001
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">Contact Information</h3>
                    <p className="body-md mb-1">General Inquiries: info@gambrelsystems.com</p>
                    <p className="body-md mb-1">Sales: sales@gambrelsystems.com</p>
                    <p className="body-md mb-1">Support: support@gambrelsystems.com</p>
                    <p className="body-md">Phone: +1 (786) 321-8832</p>
                  </div>
                  
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2">Office Hours</h3>
                    <p className="body-md">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-80 p-8 md:p-12 rounded-2xl shadow-sm border border-border text-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-black bg-opacity-50 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-black bg-opacity-50 text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-black bg-opacity-50 text-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-black bg-opacity-50 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full p-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 bg-black bg-opacity-50 text-white"
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="attachment" className="block text-sm font-medium mb-2">
                      Attach Files (optional)
                    </label>
                    <div className="flex items-center w-full">
                      <label htmlFor="attachment" className="flex items-center justify-center w-full p-3 border border-border border-dashed rounded-md cursor-pointer hover:bg-gray-900 transition-colors">
                        <Paperclip size={20} className="mr-2 text-gambrel-silver" />
                        <span className="text-sm text-gambrel-silver">
                          {attachment ? attachment.name : "Attach documents, images, or files"}
                        </span>
                        <input
                          id="attachment"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {attachment && (
                      <button
                        type="button"
                        onClick={() => setAttachment(null)}
                        className="text-xs text-gambrel-silver underline mt-1"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-xs text-gambrel-silver text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
