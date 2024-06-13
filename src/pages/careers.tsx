
import Layout from "@/components/web/layout";

import { useEffect, } from "react";
import EmeraldFooter from "@/assets/web/svg/EmeraldFooter.svg";
import AboutUsHero from "@/assets/web/aboutUsHero.png";
import TiktokAboutUs from "@/assets/web/TiktokAboutUs.png";
import salonBg from "@/assets/web/salonBg.png";
import Salon from "@/assets/web/Salon.png";
import DejanXl from "@/assets/web/DejanXl.png";
import { Facebook, TwitterX, Instagram, Linkedin } from 'react-bootstrap-icons';

import EmeraldFooterRight from "@/assets/web/svg/EmeraldFooterRight.svg";
import EmeraldFooterLeft from "@/assets/web/svg/EmeraldFooterleft.svg";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"



export default function AboutUs() {

    return (
        <Layout>
            <Helmet>
                <title>Careers -  Fadelines Barber Shop</title>
                <meta name="description" content="Fadelines - A premier barber shop offering top-notch haircuts and styles." />
                <meta property="og:title" content="Fadelines Barber Shop" />
                <meta property="og:description" content="Fadelines - A premier barber shop offering top-notch haircuts and styles." />
                <meta property="og:image" content="URL to Fadelines' preview image" />
                <meta property="og:url" content="URL to Fadelines' website" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="flex flex-col text-stone-50 bg-black w-full relative tracking-wider">
                <img src={EmeraldFooter} alt="EmeraldFooter.svg" className="md:hidden block absolute bottom-[-10rem] md:bottom-[-26rem] z-0 left-0" />

                <img src={EmeraldFooterRight} alt="EmeraldFooter.svg" className="absolute hidden md:block bottom-[-10rem] md:bottom-[-26rem] z-0 right-0" />
                <img src={EmeraldFooterLeft} alt="EmeraldFooter.svg" className="absolute hidden md:block bottom-[-10rem] md:bottom-[-26rem] z-0 left-0" />
                <section className="pb-12 md:pb-24 ">
                    <section className=" w-full relative flex flex-col items-center text-center pt-12  md:pt-0 container">
                        <div className="w-full  md:px-0 pt-12 flex flex-col gap-4 ">
                            <h3 className="text-3xl md:text-3xl tracking-wider font-extrabold w-full md:w-1/3 mx-auto font-inter">
                                <span className="text-lg"> ABOUT US</span>
                                <br />
                                <span> THE STORY BEHIND</span>
                                <br />
                                <span className="text-transparent bg-gradient-to-r from-[#42FF00]  to-[#79FF86] bg-clip-text">OUR BARBERSHOP </span>
                            </h3>

                        </div>
                    </section>
                </section>
                <section className="flex flex-row md:flex-col relative container md:max-w-none md:mx-0 text-center md:text-start md:justify-center md:pb-32">
                    <img alt="background about us" src={AboutUsHero} className="absolute left-0 w-full h-[35rem] object-cover" />
                    <div className="w-full relative z-20 flex-col md:flex-row flex md:items-center md:justify-center md:container ">
                        <div className="w-full md:w-5/12 flex flex-col justify-center items-center md:justify-start md:items-start ">
                            <h3 className="text-xl md:text-3xl font-extrabold w-full pb-4">
                                HEY I&apos;M <span className="text-transparent bg-gradient-to-r from-[#42FF00]  to-[#79FF86] bg-clip-text">DEJAN</span>
                            </h3>
                            <p className="text-xs md:text-base tracking-wide flex-col flex gap-4 w-3/4 ">
                                <span> Faded Lines Barbershop wants to bring convivence back into peoples lives. With appointments and Walk-ins </span>

                                <span>  Prices determined by demand and experience </span>

                                <span> Not luck of the draw</span>
                            </p>
                        </div>
                        <div className="">
                            <img alt="background about us" src={DejanXl} className="hover:scale-110 transform transition-transform ease-out duration-500 cursor-pointer delay-75" />
                        </div>
                    </div>
                </section>
              
            </div>
        </Layout>
    );
}
