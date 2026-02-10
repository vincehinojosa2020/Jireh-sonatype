import { CheckCircle, Heart, Star, Clock, Users, Shield, Target, Handshake } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Faith-Driven",
    description: "Our work is rooted in faith and guided by purpose. We build not just structures, but legacies."
  },
  {
    icon: Shield,
    title: "Integrity First",
    description: "Honest communication, transparent pricing, and doing what's right — every time, on every project."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for 'good enough.' Every detail matters, and quality is non-negotiable."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We succeed when you succeed. Your vision drives our work, and collaboration fuels results."
  }
];

const capabilities = [
  "Ground-up Construction",
  "Commercial Build-outs",
  "Church Construction",
  "Restaurant Construction",
  "Custom Homes",
  "Renovations & Remodeling",
  "Project Management",
  "Design-Build Services"
];

const AboutSection = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-[#FAFAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Construction site representing our work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 bg-[#D97706] rounded-xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-['Playfair_Display'] font-bold text-[#0F172A] text-lg">Expert Team</p>
                  <p className="text-[#57534E] text-sm">Ready to Build</p>
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -top-6 -left-6 bg-[#0F172A] p-4 rounded-xl shadow-xl hidden md:block">
              <p className="text-[#D97706] font-bold text-3xl">10+</p>
              <p className="text-white text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-4">
              About Jireh Construction
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
              Building Tomorrow,<br />Together
            </h2>
            <div className="section-divider mb-8" />
            
            <div className="space-y-6 text-[#57534E] text-lg leading-relaxed">
              <p>
                <span className="text-[#0F172A] font-semibold">Jireh Remodeling & Construction</span> is 
                a full-service general contractor serving San Antonio and Central Texas. Founded on 
                faith and built on excellence, we tackle projects of every scale.
              </p>
              <p>
                From custom homes and church construction to restaurant build-outs and commercial 
                renovations — our experienced team brings vision to reality. We believe that great 
                construction isn't just about buildings; it's about building <em>relationships</em> and 
                serving <em>communities</em>.
              </p>
              <p>
                Whether you're a congregation planning a new sanctuary, a family building your dream 
                home, or an entrepreneur opening your first restaurant — we have the expertise, the 
                team, and the commitment to deliver.
              </p>
            </div>

            {/* Capabilities */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#D97706] flex-shrink-0" />
                  <span className="text-[#1C1917] text-sm font-medium">{cap}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-10 pl-6 border-l-4 border-[#D97706]">
              <p className="font-['Playfair_Display'] text-xl text-[#0F172A] italic">
                "We don't just build structures — we build trust, relationships, and projects that 
                serve communities for generations."
              </p>
              <cite className="mt-3 block text-[#57534E] not-italic font-semibold">— Erik, Founder & General Contractor</cite>
            </blockquote>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Our Core Values
            </h3>
            <p className="text-[#57534E] max-w-2xl mx-auto">
              These principles guide every project, every decision, and every relationship we build.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                data-testid={`value-card-${index}`}
                className="bg-white p-8 rounded-xl border border-[#E7E5E4] hover:border-[#D97706]/50 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-[#D97706]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D97706] transition-colors">
                  <value.icon className="w-7 h-7 text-[#D97706] group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-['Playfair_Display'] text-xl font-bold text-[#0F172A] mb-3">
                  {value.title}
                </h4>
                <p className="text-[#57534E] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
