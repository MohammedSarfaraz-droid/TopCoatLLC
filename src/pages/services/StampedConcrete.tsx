import ServicePageTemplate from "@/components/ServicePageTemplate";
import stampedImg from "@/assets/stamped-concrete.jpg";
import residentialImg from "@/assets/residential-floor.jpg";
import customImg from "@/assets/custom-concrete.jpg";

const StampedConcrete = () => (
  <ServicePageTemplate
    title="Stamped Concrete"
    subtitle="Decorative Outdoor Surfaces"
    description="Bring the beauty of natural stone, brick, and slate to your outdoor spaces at a fraction of the cost. Our stamped concrete solutions create stunning patios, driveways, and walkways with intricate patterns and rich color variations that complement any architectural style."
    heroImage={stampedImg}
    benefits={[
      "Realistic stone, brick, and slate patterns at concrete pricing",
      "Durable outdoor finish resistant to freeze-thaw cycles",
      "Integral and broadcast color options for rich tones",
      "Low maintenance compared to natural stone pavers",
      "Seamless surface eliminates weed growth between joints",
      "Custom pattern combinations for unique designs",
    ]}
    details={[
      "Ashlar slate patterns",
      "Cobblestone designs",
      "Wood plank textures",
      "Random stone patterns",
      "Integral color systems",
      "Decorative border options",
    ]}
    galleryImages={[
      { src: stampedImg, alt: "Beautiful stamped concrete patio with natural stone pattern" },
      { src: residentialImg, alt: "Decorative concrete flooring in luxury residence" },
      { src: customImg, alt: "Custom stamped concrete with copper tones" },
    ]}
  />
);

export default StampedConcrete;
