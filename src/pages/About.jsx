import CarBrands from "../components/CarBrands";
import { OurJourney } from "../components/OurJourney";
import { Story } from "../components/Story";
import BgImage from "../components/ui/BgImage";
import HeaderText from "../components/ui/HeaderText";
import VisionMision from "../components/VisionMision";

const About = () => {
 

  const advantages = [
    {
      title: 'Over 10 Years of Experience',
      description: 'Practical experience spanning more than a decade in the automotive industry.',
      icon: '⭐'
    },
    {
      title: 'Diverse Services',
      description: 'Complete solutions including trading, rental, and shipping services.',
      icon: '🔄'
    },
    {
      title: 'New Cars Only',
      description: 'We exclusively deal in new vehicles, never used cars.',
      icon: '✨'
    },
    {
      title: 'Competitive Pricing',
      description: 'Competitive prices with flexible offers and payment plans.',
      icon: '💰'
    },
    {
      title: 'Regional Partnerships',
      description: 'Trusted regional partnership network for reliable service delivery.',
      icon: '🤝'
    },
    {
      title: 'Professional Team',
      description: 'Integrated team with professional expertise and industry knowledge.',
      icon: '👥'
    }
  ];

 

  const futureGoals = [
    {
      title: 'Revenue Target',
      description: 'Reach $50 million in annual sales within five years',
      icon: '📈'
    },
    {
      title: 'Sales Volume',
      description: 'Increase sales volume to 2,500-3,000 cars annually',
      icon: '🎯'
    },
    {
      title: 'Baghdad Branch',
      description: 'Open a new branch in Baghdad to expand our reach',
      icon: '🏪'
    },
    {
      title: 'Service Center',
      description: 'Establish a comprehensive Service Center in Erbil',
      icon: '🔧'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <BgImage src="/assets/images/service1.jpg" alt="Grand Motors Showroom" />

      {/* Company Story */}
   
      <Story />


      {/* Timeline */}
      <OurJourney />

      <VisionMision />
      {/* Car Brands */}
      <CarBrands />


    </div>
  );
};

export default About;