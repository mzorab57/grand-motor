import HeaderText from './ui/HeaderText';
import { Award, Layers, Sparkles, BadgeDollarSign, Globe, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div;

const WhyChoose = () => {
  const advantages = [
    {
      title: 'Over 10 Years of Experience',
      icon: Award,
      number: '01',
      label: 'Proven Track Record',
      highlights: ['Industry Expertise', 'Market Insight', 'Trusted Service']
    },
    {
      title: 'Diverse Services',
      icon: Layers,
      number: '02',
      label: 'Integrated Solutions',
      highlights: ['Car Trading', 'Car Rental', 'Shipping & Logistics']
    },
    {
      title: 'New Cars Only',
      icon: Sparkles,
      number: '03',
      label: 'Premium Standards',
      highlights: ['Brand New Stock', 'Modern Models', 'Clean Inventory']
    },
    {
      title: 'Competitive Pricing',
      icon: BadgeDollarSign,
      number: '04',
      label: 'Value Driven',
      highlights: ['Fair Pricing', 'Flexible Offers', 'Smart Packages']
    },
    {
      title: 'Regional Partnerships',
      icon: Globe,
      number: '05',
      label: 'Regional Network',
      highlights: ['Trusted Partners', 'Reliable Delivery', 'Cross-Border Reach']
    },
    {
      title: 'Professional Team',
      icon: UserCheck,
      number: '06',
      label: 'Expert Support',
      highlights: ['Customer Care', 'Expert Guidance', 'Fast Response']
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#ecebea] py-24 lg:py-32">
    
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12 items-end mb-16">
          <div className="lg:col-span-2">
            <HeaderText text="Why Choose Grand Motors" />
            <p className="mt-6 text-lg leading-8 text-gray-600 md:text-xl max-w-2xl">
              A stronger automotive experience built on credibility, modern vehicles,
              flexible services, and regional operational strength.
            </p>
          </div>
          <div className="hidden lg:flex justify-end">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {advantages.map((item, index) => (
            <MotionDiv
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,244,240,0.96))] p-7 shadow-[0_12px_35px_-16px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_20px_45px_-18px_rgba(15,23,42,0.22)]">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-200/40 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400/60 text-gray-700">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-gray-600">{item.number}</span>
                </div>

                <div className="relative mt-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                    {item.label}
                  </p>
                  <h3 className="mt-4 max-w-[12ch] text-4xl font-semibold leading-none tracking-tight text-gray-900 md:text-5xl">
                    {item.title}
                  </h3>
                </div>

                <div className="relative mt-8 flex flex-wrap gap-2.5">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-gray-300 bg-white/60 px-3 py-1.5 text-xs font-medium text-gray-500 backdrop-blur-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
