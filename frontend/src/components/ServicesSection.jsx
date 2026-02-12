import { ArrowRight, Home, Bath, ChefHat, Church, Building2, Paintbrush } from "lucide-react";

const services = [
  {
    id: "kitchen",
    title: "Kitchen Remodels",
    description: "The heart of your home, reimagined. Cabinets, countertops, flooring — done right.",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
    price: "from $9,500"
  },
  {
    id: "bathroom",
    title: "Bathroom Remodels",
    description: "Transform your bathroom into a sanctuary. Tile, fixtures, and modern design.",
    icon: Bath,
    image: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?w=800",
    price: "from $4,500"
  },
  {
    id: "renovation",
    title: "Full Renovations",
    description: "Complete home transformation. Multiple rooms, structural changes, outdoor spaces.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1762374974129-f9266d9c4efc?w=800",
    price: "from $25,000"
  },
  {
    id: "church",
    title: "Church Construction",
    description: "Sacred spaces built with purpose. Houses of worship that inspire generations.",
    icon: Church,
    image: "https://images.unsplash.com/photo-1767692243999-9db180abfa62?w=800",
    price: "Custom"
  },
  {
    id: "commercial",
    title: "Commercial Build-Outs",
    description: "Restaurants, offices, retail. Functional spaces that drive business success.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    price: "Custom"
  },
  {
    id: "painting",
    title: "Interior & Exterior Painting",
    description: "Professional painting that transforms. Prep work, quality paint, clean finish.",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1721274503578-80116d19ce9d?w=800",
    price: "from $1,500"
  }
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#F5A623] font-semibold tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0A4F60] mb-6">
            Services That<br />
            <span className="text-[#F5A623]">Transform Homes</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From kitchen remodels to church construction — we approach every job with 
            excellence, honesty, and a commitment to quality craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              data-testid={`service-card-${service.id}`}
              className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#F5A623]/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-[#0A4F60]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F5A623]/20 transition-colors">
                    <service.icon className="w-6 h-6 text-[#0A4F60]" />
                  </div>
                  <span className="text-[#F5A623] font-bold text-sm">{service.price}</span>
                </div>
                
                <h3 className="font-bold text-xl text-[#0A4F60] mb-2 group-hover:text-[#F5A623] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-[#F5A623] font-semibold text-sm hover:gap-3 transition-all"
                >
                  See Pricing
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Plus: Flooring • Drywall • Decks • Patios • Pergolas • Carpentry • Siding • Windows
          </p>
          <a
            href="sms:2109809174?body=Hi%20Erik!%20I%27m%20interested%20in%20a%20service%20not%20listed.%20Can%20you%20help?"
            className="inline-flex items-center gap-2 text-[#0A4F60] font-semibold hover:text-[#F5A623] transition-colors"
          >
            Don't see what you need? Text us!
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
