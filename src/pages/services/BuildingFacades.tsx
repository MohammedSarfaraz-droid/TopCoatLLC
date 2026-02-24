import ServicePageTemplate from "@/components/ServicePageTemplate";
import facadeImg from "@/assets/building-facade.jpg";
import sprayingImg from "@/assets/spraying-action.jpg";
import customImg from "@/assets/custom-concrete.jpg";

const BuildingFacades = () => (
  <ServicePageTemplate
    title="Building Facades"
    subtitle="Architectural Concrete Innovation"
    description="Transform your building's exterior with our innovative vertical concrete finishes. From textured panels to smooth modern coatings, our facade solutions combine aesthetic beauty with weather-resistant durability, creating striking architectural statements that stand the test of time."
    heroImage={facadeImg}
    benefits={[
      "Weather-resistant coatings that endure extreme conditions",
      "Modern textured and smooth finish options",
      "Lightweight polymer-modified systems for renovation projects",
      "UV-stable pigments for lasting color integrity",
      "Fire-resistant concrete formulations available",
      "Custom geometric and organic patterns",
    ]}
    details={[
      "Spray-applied finishes",
      "Trowel-applied textures",
      "Polymer-modified concrete",
      "Ventilated facade systems",
      "Restoration coatings",
      "Decorative panel systems",
    ]}
    galleryImages={[
      { src: facadeImg, alt: "Modern building with textured concrete facade panels" },
      { src: sprayingImg, alt: "Worker applying polymer concrete to building surface" },
      { src: customImg, alt: "Close-up of decorative facade texture" },
    ]}
  />
);

export default BuildingFacades;
