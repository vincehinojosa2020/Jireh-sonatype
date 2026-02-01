import { CheckCircle, Heart, Star, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Faith-Rooted",
    description: "Everything we do is rooted in our faith. It's an honor to serve you and your home — all for God's glory."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We approach every job with excellence and genuine care, bringing quality craftsmanship into every home."
  },
  {
    icon: CheckCircle,
    title: "Honesty",
    description: "Transparent pricing, honest communication, and a commitment to doing what's right for your project."
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Over a decade of experience in new construction and remodeling throughout Central Texas."
  }
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
                src="https://images.unsplash.com/photo-1618373012585-ae012fc350e8?w=800&q=80"
                alt="Construction tools representing craftsmanship"
                className="w-full h-full object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-2xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 bg-[#D97706]/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-[#D97706]">10+</span>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] font-bold text-[#0F172A] text-lg">Years</p>
                  <p className="text-[#57534E] text-sm">of Excellence</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-[#D97706]/20 rounded-xl hidden md:block" />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
              Welcome! I'm Erik.
            </h2>
            <div className="section-divider mb-8" />
            
            <div className="space-y-6 text-[#57534E] text-lg leading-relaxed">
              <p>
                We're a <span className="text-[#0F172A] font-semibold">family-owned business</span> serving 
                San Antonio and the Greater Central Texas Region, and everything we do is rooted in our faith.
              </p>
              <p>
                God has blessed me with over a decade of experience in new construction and remodeling, 
                and it's my calling to use these gifts to help families create spaces they love.
              </p>
              <p>
                Whether it's indoor renovations, painting, tile, drywall, or outdoor projects like 
                patios, decks, and pergolas — I approach every job with excellence, honesty, and a servant's heart.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-[#D97706]">
              <p className="font-['Playfair_Display'] text-xl text-[#0F172A] italic">
                "My goal is to bring quality craftsmanship and genuine care into every home."
              </p>
              <cite className="mt-2 block text-[#57534E] not-italic">— Erik, Owner</cite>
            </blockquote>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              data-testid={`value-card-${index}`}
              className="bg-white p-8 rounded-xl border border-[#E7E5E4] hover:border-[#D97706]/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#D97706]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D97706]/20 transition-colors">
                <value.icon className="w-7 h-7 text-[#D97706]" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F172A] mb-3">
                {value.title}
              </h3>
              <p className="text-[#57534E] leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
