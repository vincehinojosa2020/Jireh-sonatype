import { Phone, Mail, MapPin, Facebook, Linkedin, MessageCircle } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_9d1df51c-b9c0-4f50-81ff-e54a305e2b3d/artifacts/456wlf9p_FullLogo_Transparent_NoBuffer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Kitchen Remodel",
    "Bathroom Remodel",
    "Full Renovation",
    "Custom Builds",
    "Church Construction",
    "Commercial",
  ];

  return (
    <footer data-testid="footer" className="bg-[#0A4F60]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img 
              src={LOGO_URL} 
              alt="Jireh Remodeling & Construction" 
              className="h-20 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-white/70 leading-relaxed mb-6">
              San Antonio's trusted contractor. Quality work, fair prices, done right.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/jirehRandC"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook"
                className="w-10 h-10 bg-white/10 hover:bg-[#F5A623] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/erik-camacho-9314a3381/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="w-10 h-10 bg-white/10 hover:bg-[#F5A623] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#F5A623] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-[#F5A623] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">
              Contact Erik
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="sms:2109809174?body=Hi%20Erik!"
                  className="flex items-center gap-3 text-[#F5A623] hover:text-white transition-colors font-bold"
                >
                  <MessageCircle className="w-5 h-5" />
                  Text Today!
                </a>
              </li>
              <li>
                <a
                  href="tel:2109809174"
                  className="flex items-center gap-3 text-white/60 hover:text-[#F5A623] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#F5A623]" />
                  (210) 980-9174
                </a>
              </li>
              <li>
                <a
                  href="mailto:Jirehrandc@Gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#F5A623] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#F5A623]" />
                  Jirehrandc@Gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-[#F5A623] flex-shrink-0 mt-0.5" />
                <span>San Antonio, Texas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Jireh Remodeling & Construction. All rights reserved.
          </p>
          <p className="text-white/40 text-sm italic">
            "Building with purpose — all for God's glory"
          </p>
        </div>
        
        {/* Credit */}
        <div className="mt-6 text-center">
          <p className="text-white/30 text-sm">
            Made by{" "}
            <a 
              href="https://charlottesoftwareengineering.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F5A623] hover:text-[#F5A623]/80 transition-colors"
            >
              Charlotte
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
