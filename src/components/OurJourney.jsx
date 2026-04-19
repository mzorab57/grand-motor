import { FaCar, FaTruck, FaKey, FaBuilding } from 'react-icons/fa';
import HeaderText from './ui/HeaderText';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const OurJourney = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Grand Motors Founded',
      description: 'Started as a specialized company in modern car trading, focusing on quality vehicles from global brands.',
      icon: FaCar,
      color: 'red',
    },
    {
      year: '2022',
      title: 'Grand Transportation Launched',
      description: 'Expanded into shipping and logistics, offering car transportation from Dubai to Iraq.',
      icon: FaTruck,
      color: 'red',
    },
    {
      year: '2023',
      title: 'Grand Rent A Car Established',
      description: 'Added car rental services for both individuals and companies, completing our service portfolio.',
      icon: FaKey,
      color: 'red',
    },
    {
      year: '2024',
      title: 'Grand Group Formation',
      description: 'Unified all divisions under Grand Group for General Trading, becoming a comprehensive trading company.',
      icon: FaBuilding,
      color: 'red',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-28">
      

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className=" mb-16">
          <HeaderText text="Our Journey" />
          <p className=" max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Key milestones that shaped Grand Group from a specialized automotive
            company into a broader trading and mobility brand.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-red-200 via-slate-200 to-transparent hidden lg:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <MotionDiv
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative grid grid-cols-[60px,1fr] lg:grid-cols-[80px,1fr] gap-8 items-start"
              >
                {/* Timeline Dot + Year */}
                <div className="relative flex flex-col items-center">
                  <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl border border-red-100 transition-all duration-300 hover:scale-110 group`}>
                    <div className={`h-11 w-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-700 text-white shadow-inner`}>
                      <item.icon className="text-2xl" />
                    </div>
                  </div>

                  {/* Glowing Ring */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full border border-red-200/40 scale-0 group-hover:scale-100 transition-transform duration-500" />

                  {/* Year */}
                  <div className="mt-4 text-center">
                    <span className="text-4xl font-bold text-gray-200 tracking-widest transition-colors hover:text-red-200">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <MotionDiv
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl p-8 shadow-[0_15px_40px_-10px_rgb(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgb(0,0,0,0.12)] hover:border-red-100 transition-all duration-500"
                >
                  <div className="absolute -left-3 top-8 h-3 w-3 rounded-full bg-red-500 shadow-[0_0_0_6px_rgba(248,113,113,0.2)]" />

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-[15.5px]">
                    {item.description}
                  </p>

                  {/* Decorative Bottom Line */}
                  <div className="mt-8 h-0.5 w-16 bg-gradient-to-r from-red-500 to-transparent rounded-full" />
                </MotionDiv>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
