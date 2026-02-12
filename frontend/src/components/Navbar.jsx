import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_9d1df51c-b9c0-4f50-81ff-e54a305e2b3d/artifacts/456wlf9p_FullLogo_Transparent_NoBuffer.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" data-testid="logo" className="flex items-center">
            <img 
              src={LOGO_URL} 
              alt="Jireh Remodeling & Construction" 
              className="h-14 md:h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className="font-medium text-sm text-gray-700 hover:text-[#0A4F60] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:2109809174"
              data-testid="nav-call"
              className="flex items-center gap-2 text-[#0A4F60] hover:text-[#F5A623] font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              (210) 980-9174
            </a>
            <a
              href="sms:2109809174?body=Hi%20Erik!%20I%27m%20interested%20in%20a%20free%20quote."
              data-testid="nav-cta"
              className="flex items-center gap-2 bg-[#F5A623] hover:bg-[#e09620] text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Text Today!
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A4F60]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-4 animate-fade-in"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-medium py-2 hover:text-[#0A4F60] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                <a
                  href="tel:2109809174"
                  className="flex items-center justify-center gap-2 border-2 border-[#0A4F60] text-[#0A4F60] px-5 py-3 rounded-lg font-bold"
                >
                  <Phone className="w-4 h-4" />
                  Call (210) 980-9174
                </a>
                <a
                  href="sms:2109809174?body=Hi%20Erik!%20I%27m%20interested%20in%20a%20free%20quote."
                  className="flex items-center justify-center gap-2 bg-[#F5A623] text-white px-5 py-3 rounded-lg font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Text Today!
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
