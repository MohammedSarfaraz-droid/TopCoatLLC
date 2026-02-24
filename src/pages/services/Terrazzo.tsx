import ServicePageTemplate from "@/components/ServicePageTemplate";
import terrazzoImg from "@/assets/terrazzo-interior.jpg";
import residentialImg from "@/assets/residential-floor.jpg";
import commercialImg from "@/assets/commercial-epoxy.jpg";

const Terrazzo = () => (
  <ServicePageTemplate
    title="Terrazzo"
    subtitle="Luxury Interior Flooring"
    description="Terrazzo is the hallmark of sophisticated design. Our expert team creates stunning, custom terrazzo floors using premium aggregates and cutting-edge techniques. Perfect for corporate lobbies, hospitality venues, and luxury residences that demand timeless elegance."
    heroImage={terrazzoImg}
    benefits={[
      "Unlimited design flexibility with custom color and aggregate combinations",
      "Exceptional durability — lasts decades with minimal maintenance",
      "Eco-friendly options using recycled glass and natural stone",
      "Seamless installation for expansive, uninterrupted floor designs",
      "Ideal for high-traffic commercial environments",
      "Polished finish that enhances natural lighting in any space",
    ]}
    details={[
      "Epoxy terrazzo systems",
      "Cementitious terrazzo",
      "Precast terrazzo elements",
      "Custom logo & design inlays",
      "Recycled glass aggregates",
      "Polished & honed finishes",
    ]}
    galleryImages={[
      { src: terrazzoImg, alt: "Luxury corporate lobby with custom terrazzo floor" },
      { src: residentialImg, alt: "Modern residential interior with polished terrazzo" },
      { src: commercialImg, alt: "Large-scale commercial terrazzo installation" },
    ]}
  />
);

export default Terrazzo;
