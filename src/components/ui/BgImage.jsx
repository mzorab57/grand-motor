import React from 'react'

const BgImage = ({ src, alt }) => {
  return (
     <section className="relative  text-white  overflow-hidden py-72">
        <div className="absolute inset-0 z-0">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent "></div>
        </div>
      </section>
  )
}

export default BgImage