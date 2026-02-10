import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Community Church Renovation",
    category: "Churches",
    description: "Complete interior and exterior renovation of a community church, including new sanctuary design, structural improvements, and accessibility upgrades.",
    image: "https://images.unsplash.com/photo-1767692243999-9db180abfa62?w=800",
    scale: "15,000 sq ft"
  },
  {
    id: 2,
    title: "Custom Family Residence",
    category: "Residential",
    description: "Ground-up construction of a modern family home featuring open floor plan, energy-efficient systems, and premium finishes throughout.",
    image: "https://images.unsplash.com/photo-1762374974129-f9266d9c4efc?w=800",
    scale: "3,500 sq ft"
  },
  {
    id: 3,
    title: "Restaurant Build-Out",
    category: "Commercial",
    description: "Complete restaurant construction including commercial kitchen, dining area, custom bar, and outdoor patio seating.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    scale: "4,200 sq ft"
  },
  {
    id: 4,
    title: "Shell Gas Station",
    category: "Commercial",
    description: "Full commercial painting project including building exterior, canopy, and parking lot striping. Completed on schedule for a satisfied repeat customer.",
    image: "https://images.unsplash.com/photo-1721274503578-80116d19ce9d?w=800",
    scale: "Commercial"
  },
  {
    id: 5,
    title: "Luxury Bathroom Suite",
    category: "Remodeling",
    description: "High-end bathroom remodel featuring custom tile work, modern fixtures, and spa-like amenities.",
    image: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?w=800",
    scale: "Master Suite"
  },
  {
    id: 6,
    title: "Multi-Level Deck & Pergola",
    category: "Outdoor",
    description: "Custom double-deck construction with integrated pergola, creating an expansive outdoor living and entertainment space.",
    image: "https://images.unsplash.com/photo-1760552268175-431696421106?w=800",
    scale: "800 sq ft"
  },
];

const categories = ["All", "Churches", "Residential", "Commercial", "Remodeling", "Outdoor"];

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const openLightbox = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const navigateProject = (direction) => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % filteredProjects.length;
    } else {
      newIndex = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    }
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <section
      id="projects"
      data-testid="projects-section"
      className="py-24 md:py-32 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-[#D97706] font-semibold tracking-widest uppercase text-sm mb-4">
            Our Portfolio
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
            Projects That Define Us
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Every project tells a story of collaboration, craftsmanship, and commitment to excellence. 
            Here's a glimpse of what we've built together with our clients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-[#D97706] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              data-testid={`project-card-${project.id}`}
              onClick={() => openLightbox(project)}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] img-zoom">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-block px-3 py-1 bg-[#D97706] text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                  <span className="text-white/60 text-sm">{project.scale}</span>
                </div>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-white group-hover:text-[#D97706] transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/jirehRandC"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="projects-fb-link"
            className="inline-flex items-center gap-2 text-[#D97706] font-semibold hover:text-white transition-colors"
          >
            See more projects on Facebook
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div
          data-testid="project-lightbox"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            data-testid="lightbox-close"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigateProject("prev"); }}
            className="absolute left-4 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full rounded-lg"
            />
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="inline-block px-4 py-1 bg-[#D97706] text-white text-sm font-semibold rounded-full">
                  {selectedProject.category}
                </span>
                <span className="text-white/60">{selectedProject.scale}</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-white/70 max-w-xl mx-auto">
                {selectedProject.description}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); navigateProject("next"); }}
            className="absolute right-4 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
