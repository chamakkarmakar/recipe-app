import React from 'react'

const GoogleProvider = () => {
  return (
    <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full cursor-pointer shadow-md duration-300 hover:scale-95 hover:shadow">
    <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">Sign With</div>
    <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
    <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">G+</span>
</div>
  )
}

export default GoogleProvider
