import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-epoxy.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="Luxury epoxy showroom floor with golden reflections and dramatic lighting"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
    </div>

    {/* Accent border */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          Premium Flooring & Decorative Concrete
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.4s" }}>
          Luxury Surfaces.{" "}
          <span className="text-gradient-copper">Engineered to Last.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-sans animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          20+ Years of Craftsmanship in Epoxy, Terrazzo & Decorative Concrete.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.8s" }}>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-copper-light text-primary-foreground font-sans text-base px-8 py-6 tracking-wide">
              Request a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <a href="#portfolio">
            <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary text-foreground hover:bg-primary/10 font-sans text-base px-8 py-6 tracking-wide">
              <Eye className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
