import { useState, useEffect } from "react";
import { Menu, X, Phone, Building2 } from "lucide-react";

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
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" data-testid="logo" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#D97706] rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-['Playfair_Display'] font-bold text-lg leading-tight ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
                Jireh Construction
              </h1>
              <p className={`text-xs tracking-widest uppercase ${isScrolled ? 'text-[#57534E]' : 'text-white/80'}`}>
                General Contractor
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-testid={`nav-${link.name.toLowerCase()}`}
                className={`font-medium text-sm hover:text-[#D97706] transition-colors ${
                  isScrolled ? "text-[#1C1917]" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="sms:2109809174"
              data-testid="nav-cta"
              className="flex items-center gap-2 bg-[#D97706] hover:bg-[#B45309] text-white px-5 py-2.5 rounded-md font-semibold text-sm transition-all hover:-translate-y-0.5 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Start Your Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? "text-[#0F172A]" : "text-white"}`}
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
                  className="text-[#1C1917] font-medium py-2 hover:text-[#D97706] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="sms:2109809174"
                className="flex items-center justify-center gap-2 bg-[#D97706] text-white px-5 py-3 rounded-md font-semibold mt-4"
              >
                <Phone className="w-4 h-4" />
                Start Your Project
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
