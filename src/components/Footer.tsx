
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <Link to="/" className="inline-flex items-center space-x-3">
              <div className="bg-white p-1.5 rounded-md">
                <img 
                  src="/lovable-uploads/e53f40ea-0dbc-4498-9e81-205b4a2a07aa.png" 
                  alt="Gambrel Systems Logo" 
                  className="h-10"
                />
              </div>
              <span className="font-montserrat font-semibold text-xl text-white" style={{ color: "#FFFFFF !important" }}>Gambrel Systems</span>
            </Link>
            <p className="text-sm text-gray-300 max-w-xs mt-4" style={{ color: "#FFFFFF !important" }}>
              Transforming businesses through intelligent AI automation, enhancing productivity, and driving strategic growth.
            </p>
          </div>

          <div className="space-y-4 mt-8 md:mt-0">
            <div className="pt-2">
              <p className="text-gray-300 mb-2" style={{ color: "#FFFFFF !important" }}><span className="font-medium" style={{ color: "#FFFFFF !important" }}>Phone:</span> +1 (786) 321-8832</p>
              <p className="text-gray-300 mb-2" style={{ color: "#FFFFFF !important" }}><span className="font-medium" style={{ color: "#FFFFFF !important" }}>Email:</span> <a href="mailto:support@gambrelsystems.com" className="hover:underline hover:text-elegant-blue-300 transition-colors" style={{ color: "#FFFFFF !important" }}>support@gambrelsystems.com</a></p>
              <p className="text-gray-300" style={{ color: "#FFFFFF !important" }}><span className="font-medium" style={{ color: "#FFFFFF !important" }}>Address:</span> 6515 East Union Avenue<br />Suite 491<br />Denver, CO 80237<br />United States</p>
              <div className="mt-6">
                <a 
                  href="https://www.linkedin.com/company/gambrel-systems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#00052d] hover:bg-[#000420] h-10 w-10 rounded-md transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-white" style={{ color: "#FFFFFF !important" }} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e293b] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400" style={{ color: "#FFFFFF !important" }}>
            &copy; {currentYear} Gambrel Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
