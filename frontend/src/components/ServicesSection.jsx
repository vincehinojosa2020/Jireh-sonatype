import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

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
        // Fallback data
        setServices([
          {
            id: "bathroom",
            title: "Bathroom Remodel",
            description: "Transform your bathroom into a relaxing retreat with custom tile, fixtures, and cabinetry.",
            image: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?w=800"
          },
          {
            id: "flooring",
            title: "Flooring",
            description: "From hardwood to luxury vinyl, we install beautiful, durable floors that last.",
            image: "https://images.unsplash.com/photo-1622653416662-5a74e75717db?w=800"
          },
          {
            id: "framing",
            title: "Framing (Metal & Wood)",
            description: "Professional metal and wood framing for new construction and renovations.",
            image: "https://images.unsplash.com/photo-1618373012585-ae012fc350e8?w=800"
          },
          {
            id: "drywall",
            title: "Drywall",
            description: "Expert drywall installation, repair, and finishing for flawless walls.",
            image: "https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?w=800"
          },
          {
            id: "painting",
            title: "Interior & Exterior Painting",
            description: "Professional painting services that bring your vision to life with precision.",
            image: "https://images.unsplash.com/photo-1721274503578-80116d19ce9d?w=800"
          },
          {
            id: "outdoor",
            title: "Decks, Patios & Pergolas",
            description: "Create your dream outdoor living space with custom decks, patios, and pergolas.",
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
    // Create visual hierarchy with bento grid
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
        <div className="mb-16 md:mb-20">
          <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Our Services
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-[#57534E] text-lg max-w-2xl">
            From indoor renovations to outdoor living spaces, we approach every 
            job with excellence, honesty, and a commitment to quality craftsmanship.
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
            {services.map((service, index) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 min-h-[280px]">
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
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#57534E] mb-4">
            Don't see what you're looking for? We do it all!
          </p>
          <a
            href="sms:2109809174"
            data-testid="services-cta"
            className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white px-8 py-4 rounded-md font-bold transition-all hover:-translate-y-1"
          >
            Text Us Your Project Ideas
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
