import HeaderText from './ui/HeaderText';
import { TextParallaxContentExample } from './ui/text-parallax-content-scroll';

const ServiceSection = () => {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-4  ">
        <div className="text-start mb-14">
          {/* <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-3">
            Our Divisions
          </p> */}
          <HeaderText text="Our Business Divisions" />
          <p className=" mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
            Scroll through each division to experience a more cinematic presentation of our automotive trading,
            rental, and transportation services.
          </p>
        </div>
      </div>
      <TextParallaxContentExample />
    </section>
  )
}

export default ServiceSection
