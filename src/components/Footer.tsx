
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gambrel-black text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/179d1af6-cf69-4552-966c-a34e543731dc.png" 
                alt="Gambrel Systems Logo" 
                className="h-10 mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Transforming construction with intelligent automation solutions powered by advanced AI technology.
            </p>
            
            <div>
              <h4 className="font-display font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about#top" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/careers#top" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/contact#top" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="pt-2">
              <p className="text-sm text-gray-400">Phone: +1 (786) 321-8832</p>
              <p className="text-sm text-gray-400">Email: support@gambrelsystems.com</p>
              <p className="text-sm text-gray-400">Address: 180 Gamble Ln, Pueblo, CO 81001</p>
              <div className="mt-4">
                <a 
                  href="https://www.linkedin.com/company/gambrel-systems" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="hover:opacity-80 transition-opacity"
                  >
                    {/* LinkedIn logo with custom colors */}
                    <rect x="2" y="2" width="20" height="20" rx="2" fill="#C0C0C0" />
                    <path d="M8 10V16M8 7V7.01M16 16V12C16 10.9391 15.5786 10 14.5 10C13.4214 10 13 10.9391 13 12V16M13 10V7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Gambrel Systems. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy#top" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms#top" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
