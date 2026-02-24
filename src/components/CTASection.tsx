import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className={`relative container mx-auto px-4 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
          Ready to Transform{" "}
          <span className="text-gradient-copper">Your Space?</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto font-sans mb-10 text-lg">
          Let's discuss your project. Our experts will craft a custom solution tailored to your vision.
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-primary hover:bg-copper-light text-primary-foreground font-sans text-lg px-10 py-7 tracking-wide">
            Request a Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
