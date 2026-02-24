import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import artisanImg from "@/assets/artisan-working.jpg";
import sprayingImg from "@/assets/spraying-action.jpg";
import { Target, Eye, Heart, Shield } from "lucide-react";

const values = [
  { icon: Target, title: "Excellence", desc: "Every surface we create reflects our commitment to perfection and attention to detail." },
  { icon: Eye, title: "Innovation", desc: "We continuously explore new materials, techniques, and design possibilities." },
  { icon: Heart, title: "Integrity", desc: "Honest pricing, transparent communication, and dependable project timelines." },
  { icon: Shield, title: "Quality", desc: "Premium materials and proven processes ensure lasting results on every project." },
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <img src={sprayingImg} alt="Topcoat LLC worker applying decorative concrete" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 text-center pt-20">
          <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Our Story</p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">About Topcoat LLC</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card" ref={ref}>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              A Journey of <span className="text-gradient-copper">Artistry & Growth</span>
            </h2>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Topcoat LLC was born from a deep passion for surface artistry. What started as a small decorative painting
              operation quickly grew into a full-service flooring and decorative concrete company, serving clients across
              commercial, industrial, and residential sectors.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed mb-4">
              Over the past two decades, we've expanded our expertise from stenciled wood floors to
              polymer-modified concrete, terrazzo, epoxy systems, and architectural facade coatings. Each
              project pushes us to innovate, experiment, and deliver surfaces that are as beautiful as they are durable.
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed">
              Today, Topcoat LLC stands as a trusted name in the industry — known for our artistic vision,
              technical precision, and unwavering commitment to client satisfaction.
            </p>
          </div>
          <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <img src={artisanImg} alt="Topcoat artisan crafting a decorative floor" className="w-full h-[450px] object-cover rounded-lg" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-gradient-copper">Mission</span>
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed mb-12 text-lg">
            To deliver premium-quality flooring and decorative concrete solutions that exceed expectations,
            combining artistic craftsmanship with cutting-edge technology to create surfaces that inspire.
          </p>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-gradient-copper">Vision</span>
          </h2>
          <p className="text-muted-foreground font-sans leading-relaxed text-lg">
            To be the most trusted and innovative surface finishing company — recognized for transforming
            spaces through artistry, quality, and an unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
            Core <span className="text-gradient-copper">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-6 rounded-lg glass text-center">
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-serif font-bold text-foreground text-lg mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
