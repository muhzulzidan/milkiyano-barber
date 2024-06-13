import React, { ReactNode } from 'react';
import Header from './header';



const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div style={{ height:"1px" }} className={`font-inter h-px`}>
           
            <h1 className="hidden">Faded Lines Barber Shop</h1>
            <Header />
            <main className="">
                    {children}
            </main>
           
        </div>
    );
};

export default Layout;