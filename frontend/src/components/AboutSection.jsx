import { CheckCircle, Heart, Shield, Target, Handshake, Award } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_9d1df51c-b9c0-4f50-81ff-e54a305e2b3d/artifacts/456wlf9p_FullLogo_Transparent_NoBuffer.png";

const values = [
  {
    icon: Heart,
    title: "Faith-Driven",
    description: "Our work is rooted in faith. We build not just structures, but legacies."
  },
  {
    icon: Shield,
    title: "Integrity First",
    description: "Honest communication, fair pricing, and doing what's right — every time."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We don't settle for 'good enough.' Quality is non-negotiable."
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "Your vision drives our work. We succeed when you succeed."
  }
];

const AboutSection = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#0A4F60] flex items-center justify-center p-12">
              <img
                src={LOGO_URL}
                alt="Jireh Remodeling & Construction"
                className="w-full max-w-md"
              />
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#F5A623]/20 rounded-bl-[100px]" />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-2xl hidden md:flex items-center gap-4">
              <div className="w-16 h-16 bg-[#F5A623] rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="font-bold text-[#0A4F60] text-2xl">10+</p>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <p className="text-[#F5A623] font-semibold tracking-widest uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0A4F60] mb-6">
              Meet Erik
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm <span className="text-[#0A4F60] font-semibold">Erik Camacho</span>, 
                founder of Jireh Remodeling & Construction. We're a family-owned business 
                serving San Antonio, and everything we do is rooted in our faith.
              </p>
              <p>
                God blessed me with over a decade of experience in construction and remodeling. 
                Now I use those gifts to help families create spaces they love — at prices that 
                are <span className="text-[#F5A623] font-semibold">30% less than the big box stores</span>.
              </p>
              <p>
                Whether it's a kitchen remodel, bathroom renovation, or building a church for 
                your congregation — I approach every job with excellence, honesty, and a servant's heart.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-4 border-[#F5A623]">
              <p className="font-['Playfair_Display'] text-xl text-[#0A4F60] italic">
                "Quality work. Fair prices. Done right."
              </p>
              <cite className="mt-2 block text-gray-500 not-italic">— Erik Camacho, Founder</cite>
            </blockquote>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              data-testid={`value-card-${index}`}
              className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[#F5A623]/50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-[#0A4F60]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F5A623]/20 transition-colors">
                <value.icon className="w-7 h-7 text-[#0A4F60]" />
              </div>
              <h3 className="font-bold text-xl text-[#0A4F60] mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
