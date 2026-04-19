import Brands from "../components/Brands";
import  OurJourney  from "../components/OurJourney";
import { Story } from "../components/Story";
import BgImage from "../components/ui/BgImage";
import VisionMision from "../components/VisionMision";
import WhyChoose from "../components/WhyChoose";

const About = () => {
  return (
    <div className="bg-[#f8fafc]">
      <BgImage src="/assets/images/bg/hero4.png" alt="Grand Motors Showroom" />
      <Story />
      <WhyChoose />
      <OurJourney />
      <Brands />
      <VisionMision />
    </div>
  );
};

export default About;
