
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";
import ScheduleConfirmation from "./pages/ScheduleConfirmation";
import CustomerService from "./pages/CustomerService";
import Sales from "./pages/Sales";
import Marketing from "./pages/Marketing";
import ProjectManagement from "./pages/ProjectManagement";
import ResourceManagement from "./pages/ResourceManagement";
import HiringOnboarding from "./pages/HiringOnboarding";
import GraphicDesign from "./pages/GraphicDesign";
import WebDesign from "./pages/WebDesign";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import ComingSoon from "./pages/ComingSoon";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    
    window.scrollTo(0, 0);
  }, [pathname, hash, navigate]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/schedule/confirmation" element={<ScheduleConfirmation />} />
          
          {/* Solution Pages */}
          <Route path="/solutions/customer-service" element={<CustomerService />} />
          <Route path="/solutions/sales" element={<Sales />} />
          <Route path="/solutions/marketing" element={<Marketing />} />
          <Route path="/solutions/project-management" element={<ProjectManagement />} />
          <Route path="/solutions/resource-management" element={<ResourceManagement />} />
          <Route path="/solutions/hiring-onboarding" element={<HiringOnboarding />} />
          <Route path="/solutions/graphic-design" element={<GraphicDesign />} />
          <Route path="/solutions/web-design" element={<WebDesign />} />
          <Route path="/solutions/software-development" element={<SoftwareDevelopment />} />
          <Route path="/solutions/coming-soon" element={<ComingSoon />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
