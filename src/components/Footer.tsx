import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Epoxy Flooring", path: "/services/epoxy-flooring" },
  { label: "Terrazzo", path: "/services/terrazzo" },
  { label: "Building Facades", path: "/services/building-facades" },
  { label: "Garage Floors", path: "/services/garage-floors" },
  { label: "Stamped Concrete", path: "/services/stamped-concrete" },
];

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-gradient-copper mb-4">TOPCOAT LLC</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Over 20 years of craftsmanship in epoxy flooring, terrazzo, and decorative concrete.
            Luxury surfaces engineered to last.
          </p>
          <p className="text-primary italic font-serif text-sm">
            "If You Can Imagine It, We Can Build It."
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-sans font-semibold text-foreground uppercase tracking-widest text-sm mb-4">
            Services
          </h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  to={s.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-sans font-semibold text-foreground uppercase tracking-widest text-sm mb-4">
            Company
          </h4>
          <ul className="space-y-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Portfolio", path: "/#portfolio" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={l.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sans font-semibold text-foreground uppercase tracking-widest text-sm mb-4">
            Contact
          </h4>
          <div className="space-y-3">
            <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4 text-primary" />
              (123) 456-7890
            </a>
            <a href="mailto:info@topcoatllc.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Mail className="w-4 h-4 text-primary" />
              info@topcoatllc.com
            </a>
            <div className="flex items-start gap-3 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span>Serving Commercial & Residential Clients Nationwide</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Topcoat LLC. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs">
          Premium Flooring & Decorative Concrete Solutions
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
