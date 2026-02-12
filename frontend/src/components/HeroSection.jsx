import { Phone, MessageCircle, Calendar, ChevronDown, Star } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_9d1df51c-b9c0-4f50-81ff-e54a305e2b3d/artifacts/456wlf9p_FullLogo_Transparent_NoBuffer.png";

const HeroSection = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #0A4F60 0%, #0d6377 50%, #0A4F60 100%)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-16 text-center">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up opacity-0 animation-delay-100">
          <img 
            src={LOGO_URL} 
            alt="Jireh Remodeling & Construction" 
            className="h-32 md:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up opacity-0 animation-delay-200">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#F5A623] text-[#F5A623]" />
            ))}
          </div>
          <span className="text-white/80 text-sm">San Antonio's Trusted Contractor</span>
        </div>

        {/* Main Heading - Frank Luntz style */}
        <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-300">
          Your Home.<br />
          <span className="text-[#F5A623]">Transformed.</span>
        </h1>

        {/* Value Proposition */}
        <p className="text-white/90 text-xl md:text-2xl leading-relaxed mb-4 animate-fade-in-up opacity-0 animation-delay-400 max-w-2xl mx-auto">
          Quality work. Fair prices. <span className="text-[#F5A623] font-semibold">Done right.</span>
        </p>
        
        <p className="text-white/70 text-lg mb-10 animate-fade-in-up opacity-0 animation-delay-400">
          Kitchen remodels from <span className="text-[#F5A623] font-bold">$9,500</span> • Free quotes • San Antonio
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 animation-delay-500">
          <a
            href="sms:2109809174?body=Hi%20Erik!%20I%27m%20interested%20in%20a%20free%20quote%20for%20my%20home%20project."
            data-testid="hero-text-cta"
            className="inline-flex items-center justify-center gap-3 bg-[#F5A623] hover:bg-[#e09620] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Text Today for Free Quote
          </a>
          <a
            href="tel:2109809174"
            data-testid="hero-call-cta"
            className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all"
          >
            <Phone className="w-6 h-6" />
            Call (210) 980-9174
          </a>
        </div>

        {/* Schedule Link */}
        <div className="mt-6 animate-fade-in-up opacity-0 animation-delay-500">
          <a
            href="https://calendly.com/vince-charlottesoftwareengineering/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
          >
            <Calendar className="w-4 h-4" />
            Or schedule a consultation online
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white/50 hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-[#F5A623]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-[#00C4FF]/20 rounded-full blur-3xl" />
    </section>
  );
};

export default HeroSection;
