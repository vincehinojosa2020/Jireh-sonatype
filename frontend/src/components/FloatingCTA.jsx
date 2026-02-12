import { useState, useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div
      data-testid="floating-cta"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 animate-fade-in"
    >
      {/* Dismiss button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4 text-gray-500" />
      </button>

      {/* Call Button */}
      <a
        href="tel:2109809174"
        className="flex items-center gap-2 bg-[#0A4F60] hover:bg-[#0d6377] text-white px-5 py-3 rounded-full font-bold shadow-xl transition-all hover:scale-105"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden sm:inline">Call Now</span>
      </a>

      {/* Text Button - Primary */}
      <a
        href="sms:2109809174?body=Hi%20Erik!%20I%27m%20interested%20in%20a%20free%20quote."
        className="floating-cta flex items-center gap-3 bg-[#F5A623] hover:bg-[#e09620] text-white px-6 py-4 rounded-full font-bold shadow-2xl transition-all hover:scale-105"
      >
        <MessageCircle className="w-6 h-6" />
        <span>Text Today!</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
