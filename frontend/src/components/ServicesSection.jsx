import { useState, useEffect } from "react";
import { ArrowRight, Building2, Home, UtensilsCrossed, Church, Warehouse, Paintbrush, Hammer, Trees } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Service categories with icons
const serviceIcons = {
  "churches": Church,
  "residential": Home,
  "commercial": Building2,
  "restaurants": UtensilsCrossed,
  "remodeling": Hammer,
  "painting": Paintbrush,
  "outdoor": Trees,
  "industrial": Warehouse,
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API}/services`);
        setServices(response.data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
        // Fallback data with expanded services
        setServices([
          {
            id: "churches",
            title: "Church Construction",
            description: "Sacred spaces built with purpose. We construct houses of worship that inspire congregations and serve communities for generations.",
            image: "https://images.unsplash.com/photo-1767692243999-9db180abfa62?w=800"
          },
          {
            id: "residential",
            title: "Residential Construction",
            description: "Custom homes built to your vision. From foundation to finish, we create quality residences that families are proud to call home.",
            image: "https://images.unsplash.com/photo-1762374974129-f9266d9c4efc?w=800"
          },
          {
            id: "commercial",
            title: "Commercial Buildings",
            description: "Functional commercial spaces that drive business success. Office buildings, retail centers, and mixed-use developments.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
          },
          {
            id: "restaurants",
            title: "Restaurant Build-Outs",
            description: "Turn your culinary vision into reality. Complete restaurant construction and build-outs from concept to grand opening.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
          },
          {
            id: "remodeling",
            title: "Renovations & Remodeling",
            description: "Transform existing spaces into something extraordinary. Kitchens, bathrooms, and complete interior renovations.",
            image: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?w=800"
          },
          {
            id: "outdoor",
            title: "Outdoor Living Spaces",
            description: "Extend your living space outdoors. Custom decks, patios, pergolas, and outdoor kitchens built to last.",
            image: "https://images.unsplash.com/photo-1760552268175-431696421106?w=800"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const getBentoClass = (index) => {
    if (index === 0) return "col-span-1 md:col-span-2 row-span-1 md:row-span-2";
    if (index === 3) return "col-span-1 md:col-span-2";
    return "col-span-1";
  };

  return (
    <section
      id="services"
      data-testid="services-section"
      className="py-24 md:py-32 bg-[#FAFAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-4">
            Our Capabilities
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Building Projects That<br />Shape Communities
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#57534E] text-lg leading-relaxed">
            From ground-up construction to complete renovations, our team delivers projects 
            of every scale with the same commitment to excellence, integrity, and craftsmanship.
          </p>
        </div>

        {/* Bento Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`bg-white rounded-lg skeleton-pulse h-64 ${getBentoClass(i)}`}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.id] || Building2;
              return (
                <div
                  key={service.id}
                  data-testid={`service-card-${service.id}`}
                  className={`service-card group relative bg-white rounded-lg overflow-hidden border border-[#E7E5E4] ${getBentoClass(index)}`}
                >
                  {/* Image */}
                  <div className="absolute inset-0 img-zoom">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 min-h-[280px]">
                    <div className="w-12 h-12 bg-[#D97706]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#D97706] transition-colors">
                      <IconComponent className="w-6 h-6 text-[#D97706] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-['Playfair_Display'] text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#D97706] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[#D97706] font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Discuss Your Project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#0F172A] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-3">
              Have a project in mind?
            </h3>
            <p className="text-white/70 max-w-xl">
              No project is too big or too small. Let's discuss how we can bring your vision to life.
            </p>
          </div>
          <a
            href="https://calendly.com/vince-charlottesoftwareengineering/new-meeting-1"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="services-cta"
            className="inline-flex items-center gap-3 bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 rounded-md font-bold transition-all hover:-translate-y-1 whitespace-nowrap"
          >
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
