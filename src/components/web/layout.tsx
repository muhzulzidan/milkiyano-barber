import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';
import SmoothScrolling from "@/components/SmoothScrolling";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className={` font-inter h-px`}>
            <SmoothScrolling>
            <h1 className="hidden">Faded Lines Barber Shop</h1>
            <Header />
            <main className="">
                    {children}
            </main>
            <Footer />
            </SmoothScrolling>
        </div>
    );
};

export default Layout;