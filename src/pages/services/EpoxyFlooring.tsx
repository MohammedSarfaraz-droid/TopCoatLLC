import ServicePageTemplate from "@/components/ServicePageTemplate";
import heroEpoxy from "@/assets/hero-epoxy.jpg";
import commercialImg from "@/assets/commercial-epoxy.jpg";
import garageImg from "@/assets/garage-floor.jpg";

const EpoxyFlooring = () => (
  <ServicePageTemplate
    title="Epoxy Flooring"
    subtitle="Industrial & Commercial Solutions"
    description="Our industrial-grade epoxy flooring systems deliver unmatched durability, chemical resistance, and visual appeal. From warehouses to showrooms, we create seamless, high-performance surfaces that withstand the toughest conditions while maintaining a stunning mirror-like finish."
    heroImage={heroEpoxy}
    benefits={[
      "Superior chemical and abrasion resistance for industrial environments",
      "Mirror-finish quality with metallic and solid color options",
      "Seamless, hygienic surface ideal for food processing and healthcare",
      "Rapid installation with minimal downtime for your business",
      "UV-stable formulations that resist yellowing and fading",
      "Custom color matching and decorative flake systems available",
    ]}
    details={[
      "Self-leveling epoxy systems",
      "Metallic epoxy coatings",
      "Anti-static flooring",
      "Chemical-resistant coatings",
      "High-build mortar systems",
      "Decorative flake systems",
    ]}
    galleryImages={[
      { src: heroEpoxy, alt: "Metallic epoxy showroom with golden reflections" },
      { src: commercialImg, alt: "Commercial warehouse with pristine epoxy coating" },
      { src: garageImg, alt: "Premium garage floor with glossy epoxy finish" },
    ]}
  />
);

export default EpoxyFlooring;
