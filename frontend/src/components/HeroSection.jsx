import { Phone, ChevronDown, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618373012585-ae012fc350e8?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Tagline */}
          <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            Best Service, Guaranteed
          </p>

          {/* Main Heading */}
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
            Building Dreams,<br />
            <span className="text-[#D97706]">Transforming</span> Homes
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 animate-fade-in-up opacity-0 animation-delay-300">
            Family-owned remodeling & construction serving San Antonio and 
            Central Texas. Over a decade of excellence, honesty, and a servant's heart.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-white/70 mb-10 animate-fade-in-up opacity-0 animation-delay-400">
            <MapPin className="w-5 h-5 text-[#D97706]" />
            <span>Serving San Antonio • Schertz to Cedar Park</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-500">
            <a
              href="sms:2109809174"
              data-testid="hero-cta-primary"
              className="inline-flex items-center justify-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:-translate-y-1 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Text to Get Started
            </a>
            <a
              href="#services"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              View Our Services
            </a>
          </div>

          {/* Phone Number */}
          <p className="mt-8 text-white/60 animate-fade-in-up opacity-0 animation-delay-500">
            Or call us at{" "}
            <a href="tel:2109809174" className="text-[#D97706] font-semibold hover:underline">
              (210) 980-9174
            </a>
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#D97706]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#B45309]/10 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
