import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <main>
      <Header />

      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
              Contact <span className="text-gradient-copper">Us</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-background border-border font-sans"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="bg-background border-border font-sans"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-background border-border font-sans"
                />
                <Input
                  placeholder="Service Interested In"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="bg-background border-border font-sans"
                />
              </div>
              <Textarea
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                rows={6}
                className="bg-background border-border font-sans"
              />
              <Button type="submit" size="lg" className="bg-primary hover:bg-copper-light text-primary-foreground font-sans w-full sm:w-auto px-10">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Let's Build Something Extraordinary</h2>
                <p className="text-muted-foreground font-sans leading-relaxed">
                  Whether you're planning a new construction project or renovating an existing space,
                  our team is ready to bring your vision to life. Reach out for a free consultation.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: "(123) 456-7890", href: "tel:+1234567890" },
                  { icon: Mail, label: "info@topcoatllc.com", href: "mailto:info@topcoatllc.com" },
                  { icon: MapPin, label: "Serving clients nationwide" },
                  { icon: Clock, label: "Mon – Fri: 7AM – 6PM | Sat: 8AM – 2PM" },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4 p-4 rounded-lg glass">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    {href ? (
                      <a href={href} className="text-foreground hover:text-primary transition-colors font-sans text-sm">{label}</a>
                    ) : (
                      <span className="text-foreground font-sans text-sm">{label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-sans font-semibold text-foreground uppercase tracking-widest text-sm mb-3">Service Areas</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  We serve commercial, industrial, and residential clients across the region.
                  Contact us to confirm availability in your area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
