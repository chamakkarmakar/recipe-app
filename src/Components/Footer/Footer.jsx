import React from 'react'

const Footer = () => {
  return (
    
    <footer className="flex flex-col text-white mt-32">
    <div className="flex flex-col items-start justify-around gap-5 bg-[#393E46] p-10 py-10 md:flex-row md:gap-0 md:items-center">
        <aside className="text-xl">
           
            <p className='text-4xl font-semibold font-serif'>Recipe</p>
        </aside>
        <nav className="text-lg">
            <ul className="space-y-3">
                <li>
                    <a className="cursor-pointer hover:underline">Home</a>
                </li>
                <li>
                    <a className="cursor-pointer hover:underline">Contact</a>
                </li>
                <li>
                    <a className="cursor-pointer hover:underline">About</a>
                </li>
            </ul>
        </nav>
        <nav className="text-lg">
            <ul className="space-y-3">
                <li>
                    <a className="cursor-pointer hover:underline">Services</a>
                </li>
                <li>
                    <a className="cursor-pointer hover:underline">Add</a>
                </li>
                
            </ul>
        </nav>
    </div>
    <aside className="bg-[#393E46] py-5 text-center text-sm">
        <p>&copy; 2024 Recipe. All Rights Reserved.</p>
    </aside>
</footer>

  )
}

export default Footer
