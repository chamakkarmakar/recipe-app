import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    const handleSignOut = async () => {
        await logout();
    }

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    return (
        <nav className="flex items-center justify-between bg-[#393E46] px-4 py-2 text-white">
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2><Link to="/">Logo</Link></h2>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">
                <li className="group flex  cursor-pointer flex-col"><Link to="/">Home</Link>
                    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                    <Link to="/recipes">Recipes</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                    <Link to="/about">About</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="group flex  cursor-pointer flex-col">
                    <Link to="/contact">Contact</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
                {user && <li className="group flex  cursor-pointer flex-col">
                    <Link to="/dashboard">Dashboard</Link><span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
                </li>}
                <li className="group flex  cursor-pointer flex-col">
                    {user ?
                        <button onClick={handleSignOut} className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to="/login">Log Out</Link></button>
                        :
                        <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to="/login">Log In</Link></button>}

                </li>
            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                {dropDownState && (
                    <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                        <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link to="/recipes">Recipes</Link>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            {user && <Link to="/dashboard">Dashboard</Link>}
                        </li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                            {user ?
                                <button onClick={handleSignOut} className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to="/login">Log Out</Link></button>
                                :
                                <button className="rounded-full bg-sky-600 px-6 py-2 text-white transition-all duration-300 hover:scale-90"><Link to="/login">Log In</Link></button>}
                        </li>
                    </ul>

                )}
            </div>
        </nav>
    )
}

export default NavBar
