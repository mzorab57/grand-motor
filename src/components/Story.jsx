import React from 'react'
import HeaderText from './ui/HeaderText'

export const Story = () => {
  return (
       <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* top text */}
          <div className="pb-20">
          <HeaderText text="About Grand Group" />
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            From a specialized car trading company to a comprehensive trading group, 
            our journey represents growth, innovation, and unwavering commitment to excellence.
          </p>
          </div>
         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl uppercase  md:text-[4.5rem] w-full
     font-bold leading-tight bg-gradient-to-l from-gray-300 via-gray-700
      to-red-600 bg-clip-text text-transparent"> Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Grand Motors for General & Auto Trading</strong> was founded in 2020 as a specialized 
                  company in modern car trading. With consecutive successes and business expansion, 
                  it transformed into <strong>Grand Group for General Trading</strong> to encompass 
                  several leading companies in diverse sectors.
                </p>
                <p>
                  Today, the group provides integrated solutions in car trading, car rental, 
                  and transportation and shipping, becoming a trusted partner for individual 
                  customers and companies alike, both inside Iraq and abroad.
                </p>
                <p>
                  Our commitment to quality, competitive pricing, and exceptional service has 
                  made us a leader in the automotive industry in the Kurdistan Region and Iraq.
                </p>
              </div>
            </div>
            {/* Statistics section with background image */}
            
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 overflow-hidden">
              {/* Background Image */}
                <img 
                  src="/assets/images/service3.jpg" 
                  alt="Statistics Background" 
                  className="w-full h-full object-cover "
                />
            </div>
          </div>
        </div>
      </section>
  )
}
