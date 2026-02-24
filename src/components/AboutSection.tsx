import { Clock, Users, DollarSign, CalendarCheck, HeadphonesIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import artisanImage from "@/assets/artisan-working.jpg";

const highlights = [
  { icon: Clock, text: "20+ Years Experience" },
  { icon: Users, text: "Skilled Professional Team" },
  { icon: DollarSign, text: "Competitive Pricing" },
  { icon: CalendarCheck, text: "On-Time Delivery" },
  { icon: HeadphonesIcon, text: "Professional Aftersales" },
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={artisanImage}
                alt="Skilled artisan applying decorative concrete coating with precision tools"
                className="w-full h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg" />
          </div>

          {/* Text */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Craftsmanship Meets{" "}
              <span className="text-gradient-copper">Innovation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-sans">
              Topcoat LLC began with a passion for decorative painting and stenciled wood floors,
              evolving into one of the region's most trusted names in stamped concrete and
              polymer-modified surfaces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-sans">
              Through years of experimentation and artistic dedication, we've mastered the craft of
              transforming ordinary surfaces into extraordinary works of art — combining technical
              excellence with unmatched creativity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 p-3 rounded-lg glass">
                  <Icon className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-sans text-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
