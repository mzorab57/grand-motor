import React from 'react'
import { FaCar, FaTruck, FaKey, FaBuilding } from 'react-icons/fa'
import HeaderText from './ui/HeaderText';
import TitleText from './ui/TitleText';

export const OurJourney = () => {

     const timeline = [
    {
      year: '2020',
      title: 'Grand Motors Founded',
      description: 'Started as a specialized company in modern car trading, focusing on quality vehicles from global brands.',
      icon: FaCar,
      color: 'from-red-600 to-red-800',
      accent: 'slate-700'
    },
    {
      year: '2022',
      title: 'Grand Transportation Launched',
      description: 'Expanded into shipping and logistics, offering car transportation from Dubai to Iraq.',
      icon: FaTruck,
      color: 'from-red-600 to-red-800',
      accent: 'gray-700'
    },
    {
      year: '2023',
      title: 'Grand Rent A Car Established',
      description: 'Added car rental services for both individuals and companies, completing our service portfolio.',
      icon: FaKey,
      color: 'from-red-600 to-red-800',
      accent: 'zinc-700'
    },
    {
      year: '2024',
      title: 'Grand Group Formation',
      description: 'Unified all divisions under Grand Group for General Trading, becoming a comprehensive trading company.',
      icon: FaBuilding,
      color: 'from-red-600 to-red-800',
      accent: 'neutral-700'
    }
  ];
  
  return (
     <section className="py-20 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-slate-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-zinc-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <HeaderText text="Our Journey" />
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">Milestones that define our evolution from a specialized automotive company to a comprehensive trading group</p>
          </div>

          <div className="relative">
            {/* Professional timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-slate-300 via-gray-400 to-zinc-400 shadow-sm"></div>
            
            {/* Mobile timeline line - visible only on mobile */}
            <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-slate-300 via-gray-400 to-zinc-400 shadow-sm"></div>
            
            <div className="space-y-40 md:space-y-20">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center  ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:group group relative`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} text-center md:text-left`}>
                    <div className="bg-white  rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border-2 border-gray-300">
                      <div className="flex items-center justify-between mb-4 md:mb-6 flex-col md:flex-row gap-4 md:gap-0">
                         <div className={`text-3xl md:text-4xl p-3 bg-gradient-to-br  rounded-xl text-red-400  group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                           <item.icon />
                         </div>
                        
                         <div className={`text-3xl md:text-4xl font-bold text-${item.accent} tracking-wider`}>{item.year}</div>
                       </div>
                     
                      <h3 className="text-2xl font-bold  mb-2 uppercase    leading-tight bg-gradient-to-l from-black/5 via-gray-700 to-gray-500 bg-clip-text text-transparent">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg font-medium">{item.description}</p>
                      
                      {/* Professional accent line */}
                      <div className={`mt-4 md:mt-6 h-1 w-20 bg-gradient-to-r ${item.color} rounded-full mx-auto ${index % 2 === 0 ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}></div>
                    </div>
                  </div>
                  
                  {/* Mobile timeline dot - visible only on mobile */}
                  <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className={`w-4 h-4 bg-gradient-to-r ${item.color} rounded-full border-3 border-white shadow-lg`}>
                      <div className="absolute inset-0 rounded-full bg-white opacity-20"></div>
                    </div>
                  </div>
                  
                  {/* Desktop timeline dot - hidden on mobile */}
                  <div className="relative z-20 items-center justify-center hidden md:flex">
                    <div className={`w-5 h-5 bg-gradient-to-r ${item.color} rounded-full border-4 border-white shadow-xl group-hover:scale-110 transition-all duration-300`}>
                      <div className="absolute inset-0 rounded-full bg-white opacity-20"></div>
                    </div>
                  </div>
                  
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
            
            {/* Professional timeline end */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-6 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded-full border-4 border-white shadow-xl"></div>
          </div>
        </div>
      </section>
  )
}
