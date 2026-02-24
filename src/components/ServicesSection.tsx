import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroEpoxy from "@/assets/hero-epoxy.jpg";
import terrazzoImg from "@/assets/terrazzo-interior.jpg";
import facadeImg from "@/assets/building-facade.jpg";
import garageImg from "@/assets/garage-floor.jpg";
import stampedImg from "@/assets/stamped-concrete.jpg";
import customImg from "@/assets/custom-concrete.jpg";

const services = [
  {
    title: "Epoxy Flooring",
    desc: "Industrial-grade epoxy systems with mirror-finish quality for commercial and industrial spaces.",
    image: heroEpoxy,
    path: "/services/epoxy-flooring",
  },
  {
    title: "Terrazzo",
    desc: "Elegant, timeless terrazzo flooring for luxury interiors — from corporate lobbies to hospitality venues.",
    image: terrazzoImg,
    path: "/services/terrazzo",
  },
  {
    title: "Building Facades",
    desc: "Innovative vertical concrete finishes that redefine modern architectural aesthetics.",
    image: facadeImg,
    path: "/services/building-facades",
  },
  {
    title: "Garage Floors",
    desc: "Premium anti-slip coatings that transform residential and commercial garages into showrooms.",
    image: garageImg,
    path: "/services/garage-floors",
  },
  {
    title: "Stamped Concrete",
    desc: "Decorative patterns and textures that bring artistry to outdoor patios and walkways.",
    image: stampedImg,
    path: "/services/stamped-concrete",
  },
  {
    title: "Custom Decorative Concrete",
    desc: "Bespoke polymer-modified surfaces tailored to your unique design vision.",
    image: customImg,
    path: "/services/stamped-concrete",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            Our <span className="text-gradient-copper">Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.title}
              to={service.path}
              className={`group relative overflow-hidden rounded-lg h-[380px] transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm font-sans mb-4 line-clamp-2">
                  {service.desc}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-sans font-medium group-hover:gap-3 gap-1 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
