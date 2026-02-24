import ServicePageTemplate from "@/components/ServicePageTemplate";
import garageImg from "@/assets/garage-floor.jpg";
import heroEpoxy from "@/assets/hero-epoxy.jpg";
import commercialImg from "@/assets/commercial-epoxy.jpg";

const GarageFloors = () => (
  <ServicePageTemplate
    title="Garage Floors"
    subtitle="Residential & Industrial Coatings"
    description="Elevate your garage from ordinary to extraordinary. Our premium garage floor coatings provide anti-slip protection, chemical resistance, and a showroom-quality finish that transforms your space into a clean, professional environment."
    heroImage={garageImg}
    benefits={[
      "Anti-slip textured coatings for safety in wet conditions",
      "Chemical and oil resistant for easy cleaning and maintenance",
      "Custom color flake and metallic finish options",
      "Resistant to hot tire pickup and abrasion",
      "Quick-cure systems for minimal garage downtime",
      "Professional clean finish that enhances property value",
    ]}
    details={[
      "Polyaspartic coatings",
      "Full-broadcast flake systems",
      "Metallic garage coatings",
      "Anti-slip aggregates",
      "Moisture mitigation systems",
      "Concrete repair & prep",
    ]}
    galleryImages={[
      { src: garageImg, alt: "Premium garage floor with glossy coating and luxury car" },
      { src: heroEpoxy, alt: "Metallic epoxy coating in residential garage" },
      { src: commercialImg, alt: "Industrial garage floor with high-performance coating" },
    ]}
  />
);

export default GarageFloors;
