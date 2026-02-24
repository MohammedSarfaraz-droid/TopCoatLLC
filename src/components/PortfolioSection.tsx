import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroEpoxy from "@/assets/hero-epoxy.jpg";
import terrazzoImg from "@/assets/terrazzo-interior.jpg";
import facadeImg from "@/assets/building-facade.jpg";
import garageImg from "@/assets/garage-floor.jpg";
import stampedImg from "@/assets/stamped-concrete.jpg";
import customImg from "@/assets/custom-concrete.jpg";
import commercialImg from "@/assets/commercial-epoxy.jpg";
import sprayingImg from "@/assets/spraying-action.jpg";
import residentialImg from "@/assets/residential-floor.jpg";

const filters = ["All", "Commercial", "Residential", "Industrial", "Decorative"];

const projects = [
  { name: "Corporate Lobby Terrazzo", type: "Commercial", image: terrazzoImg, desc: "Custom terrazzo design for a Fortune 500 headquarters" },
  { name: "Industrial Warehouse Coating", type: "Industrial", image: commercialImg, desc: "High-performance epoxy for 50,000 sq ft facility" },
  { name: "Luxury Home Flooring", type: "Residential", image: residentialImg, desc: "Polished decorative concrete for modern living" },
  { name: "Metallic Epoxy Showroom", type: "Commercial", image: heroEpoxy, desc: "Mirror-finish metallic epoxy for auto dealership" },
  { name: "Building Facade Renovation", type: "Commercial", image: facadeImg, desc: "Textured concrete panels for modern office complex" },
  { name: "Designer Patio", type: "Decorative", image: stampedImg, desc: "Stamped concrete with natural stone pattern" },
  { name: "Premium Garage Coating", type: "Residential", image: garageImg, desc: "Anti-slip epoxy with custom color flakes" },
  { name: "Vertical Concrete Art", type: "Decorative", image: sprayingImg, desc: "Polymer-modified wall finish for gallery space" },
  { name: "Custom Surface Texture", type: "Decorative", image: customImg, desc: "Artisan copper-infused decorative finish" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filtered = active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <section id="portfolio" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Featured <span className="text-gradient-copper">Portfolio</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((project, i) => (
            <div
              key={project.name}
              className={`group relative overflow-hidden rounded-lg break-inside-avoid transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <div>
                  <span className="text-primary text-xs font-sans uppercase tracking-widest">{project.type}</span>
                  <h3 className="text-lg font-serif font-bold text-foreground mt-1">{project.name}</h3>
                  <p className="text-muted-foreground text-sm font-sans mt-1">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
