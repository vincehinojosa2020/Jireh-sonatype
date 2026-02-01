import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Bathroom Remodel",
    "Flooring",
    "Drywall",
    "Painting",
    "Decks & Patios",
    "Carpentry",
  ];

  return (
    <footer data-testid="footer" className="bg-[#0F172A] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#D97706] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-['Playfair_Display']">J</span>
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] font-bold text-white text-lg">
                  Jireh
                </h3>
                <p className="text-white/50 text-xs tracking-widest uppercase">
                  Remodeling & Construction
                </p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Family-owned business serving San Antonio and Central Texas. 
              Quality craftsmanship rooted in faith.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/jirehRandC"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook"
                className="w-10 h-10 bg-white/10 hover:bg-[#D97706] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/erik-camacho-38b63320b"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-linkedin"
                className="w-10 h-10 bg-white/10 hover:bg-[#D97706] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-white text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#D97706] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-white text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-[#D97706] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-['Playfair_Display'] font-bold text-white text-lg mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="sms:2109809174"
                  className="flex items-center gap-3 text-white/60 hover:text-[#D97706] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#D97706]" />
                  (210) 980-9174
                </a>
              </li>
              <li>
                <a
                  href="mailto:Jirehrandc@Gmail.com"
                  className="flex items-center gap-3 text-white/60 hover:text-[#D97706] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#D97706]" />
                  Jirehrandc@Gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-[#D97706] flex-shrink-0 mt-0.5" />
                <span>San Antonio, TX<br />Schertz to Cedar Park</span>
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
            "All for God's glory"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
