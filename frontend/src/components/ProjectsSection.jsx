import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Shell Gas Station Commercial Paint",
    category: "Commercial",
    description: "Complete exterior painting of Shell gas station including building, canopy, and parking lines.",
    image: "https://images.unsplash.com/photo-1721274503578-80116d19ce9d?w=800",
  },
  {
    id: 2,
    title: "Double Deck with Pergola",
    category: "Outdoor Living",
    description: "Demolition and construction of a beautiful double-tier deck with custom pergola.",
    image: "https://images.unsplash.com/photo-1760552268175-431696421106?w=800",
  },
  {
    id: 3,
    title: "Luxury Bathroom Remodel",
    category: "Bathroom",
    description: "Complete bathroom transformation with custom tile, modern fixtures, and elegant design.",
    image: "https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?w=800",
  },
  {
    id: 4,
    title: "Exterior House Paint & Cedar Wrap",
    category: "Exterior",
    description: "Full exterior paint job with cedar-wrapped porch posts for a stunning finish.",
    image: "https://images.unsplash.com/photo-1768994181868-16ac58c0423a?w=800",
  },
  {
    id: 5,
    title: "Custom Carpentry & Arches",
    category: "Carpentry",
    description: "Beautiful custom arches connecting living room to dining area, ready for stone wrap.",
    image: "https://images.unsplash.com/photo-1601066675934-9657b64c0a4e?w=800",
  },
  {
    id: 6,
    title: "Vinyl Flooring Installation",
    category: "Flooring",
    description: "Complete floor renovation including demo, subfloor repair, and luxury vinyl installation.",
    image: "https://images.unsplash.com/photo-1622653416662-5a74e75717db?w=800",
  },
];

const categories = ["All", "Bathroom", "Flooring", "Outdoor Living", "Carpentry", "Exterior", "Commercial"];

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
            Our Work
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Performed to perfection. Take a look at some of our recent transformations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              data-testid={`filter-${cat.toLowerCase().replace(" ", "-")}`}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-[#D97706] text-white text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-white">
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
            See more on our Facebook
            <ChevronRight className="w-5 h-5" />
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
              <span className="inline-block px-4 py-1 bg-[#D97706] text-white text-sm font-semibold rounded-full mb-3">
                {selectedProject.category}
              </span>
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
