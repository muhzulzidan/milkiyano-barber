import React, { useState } from 'react';
// import img from 'next/img';

import Logo from "@/assets/svg/logo.svg"

// import { useRouter } from "next/router"
import { Link, useLocation } from 'react-router-dom';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,

    SheetTrigger,

} from "@/components/ui/sheet"

import { Squash as Hamburger } from 'hamburger-react'

import Facebook from "@/assets/web/svg/Facebook.svg"
import Xicon from "@/assets/web/svg/XIcon.svg"
import Whatsapp from "@/assets/web/svg/Whatsapp.svg"
import Instagram from "@/assets/web/svg/Instagram.svg"

interface NavLinkProps {
    to: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => {
    const location = useLocation();
    return (
        <li className='my-4'>
            <Link to={to} className={`text-2xl font-light hover:text-stone-50 ${location.pathname === to ? 'text-stone-50' : ''}`}>
                {label}
            </Link>
        </li>
    );
};

const links = [
    { to: "/", label: "Home" },
    { to: "/barbers", label: "Barbers" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about-us", label: "About Us" },
    { to: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
    // const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    // console.log(router.pathname, "path")
    return (
        <header className="bg-black text-white py-0 relative shadow-lg shadow-black border-none z-[999999]">
            <div className="container mx-auto flex justify-between items-center relative z-10 border-none px-2 md:px-4">
                <h1 className="text-2xl font-bold text-transparent hidden ">Barber Shop</h1>
                <div className='flex flex-col justify-center items-center'>
                   <Link to={"/"}> 
                        <img src={Logo} alt="barber shop faded lines" className='w-48 md:w-[18rem] h-auto'  />
                   </Link>
                </div>
                <nav className='hidden lg:block'>
                    <ul className="flex text-stone-600 ">
                        <li>
                            <Link to="/" className={`text-md uppercase font-bold border-r border-stone-50 px-4 hover:text-stone-50 ${location.pathname === '/' ? 'text-stone-50' : ''}`}>HOME</Link>
                        </li>
                        {/* <li>
                            <Link to="/zver-josh" className={`text-md uppercase font-bold border-r border-stone-50 px-4 hover:text-stone-50 ${location.pathname === '/barbers' ? 'text-stone-50' : ''}`}>JOSH</Link>
                        </li> */}
                        <li>
                            <Link to="/barbers" className={`text-md uppercase font-bold border-r border-stone-50 px-4 hover:text-stone-50 ${location.pathname === '/barbers' ? 'text-stone-50' : ''}`}>BARBERS</Link>
                        </li>
                        <li>
                            <Link to="/gallery" className={`text-md uppercase font-bold border-r border-stone-50 px-4 hover:text-stone-50 ${location.pathname === '/gallery' ? 'text-stone-50' : ''}`}>GALLERY</Link>
                        </li>
                        <li>
                            <Link to="/about-us" className={`text-md uppercase font-bold border-r border-stone-50 px-4 hover:text-stone-50 ${location.pathname === '/about-us' ? 'text-stone-50' : ''}`}>ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={`text-md uppercase font-bold   px-4 hover:text-stone-50 ${location.pathname === '/contact' ? 'text-stone-50' : ''}`}>CONTACT</Link>
                        </li>
                    </ul>
                </nav>
                <nav className='hidden xl:block'>
                    <ul className="flex gap-7 ">
                        <li>
                            <a href="/home" className="text-md uppercase font-bold hover:text-stone-50 opacity-40 hover:opacity-100 ">
                                <img alt='instagram' src={Instagram}  className='w-10 h-auto' />
                            </a>
                        </li>
                       
                        <li>
                            <a href="/home" className="text-md uppercase font-bold hover:text-stone-50 opacity-40 hover:opacity-100 ">
                                <img width={500} height={500} alt='Facebook' src={Facebook}  className='w-10 h-auto' />
                            </a>
                        </li>
                       
                        <li>
                            <a href="/home" className="text-md uppercase font-bold hover:text-stone-50 opacity-40 hover:opacity-100 ">
                                <img width={500} height={500} alt='twitter' src={Xicon}  className='w-10 h-auto' />
                            </a>
                        </li>
                       
                        <li>
                            <a href="/home" className="text-md uppercase font-bold hover:text-stone-50 opacity-40 hover:opacity-100 ">
                                <img width={500} height={500} alt='whatsapp' src={Whatsapp} className='w-10 h-auto'  />
                            </a>
                        </li>
                       
                    </ul>
                </nav>
               <nav className='xl:hidden flex flex-col justify-center'>
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger aria-label='open menu'/>
                        <Hamburger label='close icons' toggled={isMenuOpen} toggle={setIsMenuOpen} size={24} />
                        <SheetContent side={"top"}>
                            <SheetHeader>
                                <SheetDescription>
                                    <ul className="flex flex-col text-stone-600 ">
                                        {links.map((link) => (
                                            <NavLink key={link.to} to={link.to} label={link.label} />
                                        ))}
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
               </nav>

            </div>
            {/* <img src="/web/gradeintHeader.png" width={500} height={500} alt="Your img" className="absolute z-0 w-full h-full bottom-[0] object-cover" /> */}
        </header>
    );
};

export default Header;