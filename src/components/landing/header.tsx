import React from 'react';

import Logo from "/src/assets/images/Logo.png"
import { Button } from '@/components/ui/button';
import HeaderParticles from "@/assets/svg/landing/headerParticles.svg"

const Header: React.FC = () => {
    return (
        <header className="bg-stone-950 text-white py-6 md:py-10 relative">
            <div className="container mx-auto flex justify-center md:justify-between items-center relative z-10">
                <h1 className="text-2xl font-bold text-transparent hidden md:block">Barber Shop</h1>
                <div className='flex flex-col justify-center items-center'>
                    <img src={Logo} alt="barber shop faded lines" className='w-48 md:w-[15rem] h-auto' />
                </div>
                <nav className='hidden md:block'>
                    <ul className="flex">
                        <li>
                            <Button variant={"ghost"} className="border border-[#24FF00] rounded-full py-6 px-8 text-md uppercase  font-black transform hover:scale-110 transition-transform duration-200 ease-in-out hover:bg-[#24FF00] hover:shadow-lg hover:shadow-[#44813a] ">Book Now</Button>
                        </li>
                    </ul>
                </nav>
            </div>
            <img src={HeaderParticles} width={500} height={500} alt="Your Image" className="absolute z-0 w-full h-full object-fill bottom-[0]" />
        </header>
    );
};

export default Header;