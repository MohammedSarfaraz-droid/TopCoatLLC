import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  benefits: string[];
  details: string[];
  galleryImages: { src: string; alt: string }[];
}

const ServicePageTemplate = ({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  details,
  galleryImages,
}: ServicePageProps) => {
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center container mx-auto px-4 pt-20">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">{subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">{title}</h1>
        </div>
      </section>

      {/* Description + Benefits */}
      <section className="py-20 bg-card" ref={benefitsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className={`transition-all duration-700 ${benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Why Choose Our <span className="text-gradient-copper">{title}</span>
              </h2>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">{description}</p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-copper-light text-primary-foreground font-sans">
                  Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className={`space-y-6 transition-all duration-700 delay-200 ${benefitsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">Key Benefits</h3>
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 rounded-lg glass">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-sans text-foreground">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Technical <span className="text-gradient-copper">Details</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {details.map((d, i) => (
              <div key={i} className="p-6 rounded-lg glass text-center">
                <p className="text-sm font-sans text-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-card" ref={galleryRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-10 text-center">
            Project <span className="text-gradient-copper">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg transition-all duration-700 ${galleryVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <img src={img.src} alt={img.alt} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-copper-light text-primary-foreground font-sans text-lg px-10 py-7">
              Request a Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicePageTemplate;
