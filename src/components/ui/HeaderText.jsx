

const HeaderText = ({text}) => {
  return (
    <div className="text-5xl uppercase text-center md:text-[4.5rem] w-full
     font-bold leading-tight bg-gradient-to-l from-gray-300 via-gray-700
      to-red-600 bg-clip-text text-transparent">
      {text}
    </div>
  )
}

export default HeaderText