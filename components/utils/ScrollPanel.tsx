import React from 'react'

type Props = {
    children: React.ReactNode;
}

const ScrollPanel = ({children,...props}:Props) => {
  return (
    <div className="w-full flex space-x-5 overflow-x-scroll p-10 mt-20 snap-x 
    snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {children}
    </div>
  )
}

export default ScrollPanel