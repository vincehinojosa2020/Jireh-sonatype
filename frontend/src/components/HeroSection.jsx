import { Phone, ChevronDown, MapPin, Building2, Users, Award } from "lucide-react";

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
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 w-full">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up opacity-0 animation-delay-100">
            <div className="h-px w-12 bg-[#D97706]" />
            <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm">
              General Contractor • Central Texas
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-7xl text-white font-bold leading-tight mb-6 animate-fade-in-up opacity-0 animation-delay-200">
            Building What<br />
            <span className="text-[#D97706]">Matters Most</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 animate-fade-in-up opacity-0 animation-delay-300 max-w-2xl">
            From churches and homes to restaurants and commercial spaces — we deliver 
            exceptional construction projects that serve communities and stand the test of time.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 mb-10 animate-fade-in-up opacity-0 animation-delay-400">
            <div className="flex items-center gap-3">
              <Building2 className="w-6 h-6 text-[#D97706]" />
              <div>
                <p className="text-white font-bold text-2xl">50+</p>
                <p className="text-white/60 text-sm">Projects Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-[#D97706]" />
              <div>
                <p className="text-white font-bold text-2xl">Expert</p>
                <p className="text-white/60 text-sm">Team</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-[#D97706]" />
              <div>
                <p className="text-white font-bold text-2xl">10+</p>
                <p className="text-white/60 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0 animation-delay-500">
            <a
              href="sms:2109809174"
              data-testid="hero-cta-primary"
              className="inline-flex items-center justify-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 rounded-md font-bold text-lg transition-all hover:-translate-y-1 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Start Your Project
            </a>
            <a
              href="#projects"
              data-testid="hero-cta-secondary"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-md font-bold text-lg transition-all"
            >
              View Our Work
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-10 flex flex-wrap items-center gap-6 animate-fade-in-up opacity-0 animation-delay-500">
            <a href="tel:2109809174" className="flex items-center gap-2 text-white/70 hover:text-[#D97706] transition-colors">
              <Phone className="w-4 h-4" />
              <span>(210) 980-9174</span>
            </a>
            <div className="flex items-center gap-2 text-white/70">
              <MapPin className="w-4 h-4" />
              <span>San Antonio • Schertz to Cedar Park</span>
            </div>
          </div>
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
