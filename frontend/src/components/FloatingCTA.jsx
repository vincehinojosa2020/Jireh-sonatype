import { useState, useEffect } from "react";
import { Calendar, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div
      data-testid="floating-cta"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in"
    >
      {/* Dismiss button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
      >
        <X className="w-4 h-4 text-[#57534E]" />
      </button>

      {/* Main CTA */}
      <a
        href="https://calendly.com/vince-charlottesoftwareengineering/new-meeting-1"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-cta flex items-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white px-6 py-4 rounded-full font-bold shadow-2xl transition-all hover:scale-105"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:inline">Book Consultation</span>
        <span className="sm:hidden">Book Now</span>
      </a>
    </div>
  );
};

export default FloatingCTA;
