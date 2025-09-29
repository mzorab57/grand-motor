import React from 'react'

const TitleText = ({text}) => {
  return (
    <div className="text-2xl font-bold  mb-2 uppercase text-center    leading-tight bg-gradient-to-l from-black/5 via-gray-700 to-gray-500 bg-clip-text text-transparent">
      {text}
    </div>
  )
}

export default TitleText