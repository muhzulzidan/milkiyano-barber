
import Layout from "@/components/web/layout";

import { useEffect,  } from "react";
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

import instagramPhotos1 from '/src/assets/web/instagram/instagramPhotos.png';
import instagramPhotos2 from '/src/assets/web/instagram/instagramPhotos2.png';
import instagramPhotos3 from '/src/assets/web/instagram/instagramPhotos3.png';
import instagramPhotos4 from '/src/assets/web/instagram/instagramPhotos4.png';
import instagramPhotos5 from '/src/assets/web/instagram/instagramPhotos5.png';

import instagramPhotosMobile1 from '/src/assets/web/instagram/mobile/instagramPhotos.png';
import instagramPhotosMobile2 from '/src/assets/web/instagram/mobile/instagramPhotos2.png';
import instagramPhotosMobile3 from '/src/assets/web/instagram/mobile/instagramPhotos3.png';
import instagramPhotosMobile4 from '/src/assets/web/instagram/mobile/instagramPhotos4.png';
import instagramPhotosMobile5 from '/src/assets/web/instagram/mobile/instagramPhotos5.png';



const instagram_images_desktop = [
    instagramPhotos1,
    instagramPhotos2,
    instagramPhotos3,
    instagramPhotos4,
    instagramPhotos5,
];

const instagram_images_mobile = [
    instagramPhotosMobile1,
    instagramPhotosMobile2,
    instagramPhotosMobile3,
    instagramPhotosMobile4,
    instagramPhotosMobile5,
];


const SocialMediaLinks: React.FC = () => {
    const socialMedia = [
        { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com' },
        { name: 'Twitter', icon: TwitterX, url: 'https://www.twitter.com' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com' },
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com' },
    ];

    return (
        <div className="flex space-x-4">
            {socialMedia.map((item, index) => (
                <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="text-2xl text-[#42FF00] hover:text-[#6ed449]">
                    <item.icon className="w-8 h-auto"/>
                    <span className="sr-only">{item.name}</span>
                </a>
            ))}
        </div>
    );
}


export default function AboutUs() {


    useEffect(() => {
        // Create a new style element
        const style = document.createElement('style');

        // Define the animation
        style.innerHTML = `
        @keyframes move {
            0% { transform: translateX(100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
        }
    `;

        // Append the style element to the document head
        document.head.appendChild(style);

        // Clean up function
        return () => {
            document.head.removeChild(style);
        };
    }, []);


    return (
        <Layout>
            <Helmet>
                <title>About Us - Fadelines Barber Shop</title>
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
                <section className="flex flex-col md:flex-row relative container md:mx-0 md:max-w-none md:justify-center md:items-center md:py-12 py-24">
                    <img alt="background about us" src={salonBg} className=" left-0 absolute z-0 w-full h-[35rem] object-cover" />
                    <div className="flex flex-col md:flex-row md:justify-between md:max-w-6xl md:items-center  text-center md:text-start items-center ">
                        <div className="w-fit flex z-20  md:justify-start md:ml-[-3rem] md:pt-12 ">
                            <img alt="our salon about us" src={Salon} className="hover:scale-110 transform transition-transform ease-out duration-500 cursor-pointer delay-75" />
                        </div>
                        <div className="w-full md:w-5/12 md:text-right md:justify-start  flex flex-col justify-center items-center  z-10 " >
                            <h3 className="text-xl md:text-3xl font-extrabold w-full pb-4 text-transparent bg-gradient-to-r from-[#42FF00]  to-[#79FF86] bg-clip-text">
                                OUR SALON
                            </h3>
                            <p className="text-xs md:text-base tracking-wide flex-col flex gap-4 md:gap-3 md:pt-4 w-3/4 md:w-full font-light">
                                <span> Faded Lines Barbershop provides great services at a professional standard. Having clients feel welcome where professional barbers create a clean & safe environment to work and be around.</span>

                                <span> Specializing in ALL types of hair textures, we will ensure to have you feeling and leaving confident. From traditional styled & dapper haircuts, to smooth razor shaves and close fades.</span>

                                <span> Our team is committed to giving you a great service with an even better outcome to all your hair necessities.</span>
                            </p>
                        </div>
                    </div>

                </section>
                <section className="flex flex-col md:flex-row relative px-4 tracking-wider md:justify-center md:items-center  gap-12 md:gap-0 md:py-24">

                    <div className="md:w-4/12 flex flex-col gap-8 md:pl-24">
                        <h3 className="text-4xl flex flex-col font-extrabold w-8/12">
                            WE ARE WELL KNOWN ON
                            <span className="text-transparent bg-gradient-to-r from-[#42FF00]  to-[#79FF86] bg-clip-text"
                            >TIKTOK</span>
                        </h3>
                        <p className="text-sm font-light md:w-8/12">Still doubt our ability to create the best haircuts in Melbourne? Check our Tiktok and see for yourself.</p>
                       
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="ghost" className="rounded-2xl w-full md:w-32 font-extrabold border-[#14FF00] border text-lg py-6 px-2 hover:bg-[#14FF00] shadow-md hover:shadow-[#14FF00] hover:scale-110 transition-transform duration-500 ease-in-out hover:text-stone-950" >
                                    Follow Us
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle >Find Us Here</AlertDialogTitle>
                                    <AlertDialogDescription>
                                       <div className="py-4 flex "> 
                                        <SocialMediaLinks />
                                        </div>
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter className="flex items-center w-full px-4">
                                    <AlertDialogCancel >Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>

                    </div>
                    <div className="w-10/12 md:w-fit flex self-center md:self-start">
                        <img alt="background about us" src={TiktokAboutUs} className="" />
                    </div>
                </section>

                <section className="md:h-screen flex my-12 flex-col justify-center items-start py-12 relative z-50 ">

                    <div className="w-full px-4 md:px-0 md:w-10/12 justify-center flex flex-col z-10 relative  ">

                        <h3 className="text-4xl tracking-wider font-extrabold md:text-end md:flex md:self-end flex-col mb-8">
                            FOLLOW US ON <br /> <span className="text-transparent bg-gradient-to-r from-[#4DFF20]  to-[#88FF7D] bg-clip-text">INSTAGRAM</span>
                        </h3>

                        <div className="hidden md:flex md:flex-row gap-2 h-full w-full overflow-hidden bg-black">
                            {instagram_images_desktop.map((image, index) => (
                                <img
                                    key={index}
                                    width={500}
                                    height={500}
                                    className={`h-[30em] md:h-[500px]  ${index === instagram_images_desktop.length - 1 ? 'w-[500px] ' : 'w-2/12'} aspect-[4/10] object-cover transition-all duration-500 opacity-50 scale-100 hover:opacity-100 hover:w-[500px] rounded-2xl`}
                                    src={image}
                                    alt={`Instagram photo ${index + 1}`}
                                />
                            ))}
                        </div>

                        <div className="flex flex-col md:hidden gap-4 h-1/3 w-full z-20 bg-black">
                            {instagram_images_mobile.map((image, index) => (
                                <img key={index} width={500} height={500}
                                    className={`h-[10em]  ${index === instagram_images_mobile.length - 1 ? 'h-[300px]' : 'h-2/12'} aspect-[4/10] object-cover transition-all duration-500 opacity-50 scale-100 hover:opacity-100 hover:h-[300px] rounded-2xl`}

                                    src={image} alt={`Instagram photo ${index + 1}`} />
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row  self-center gap-4 py-12 md:pl-[15vw] ">
                            <Button variant={"ghost"} className="rounded-2xl w-full md:w-32 font-extrabold border-[#14FF00] border text-lg py-6 px-2 hover:bg-[#14FF00] shadow-md hover:shadow-[#14FF00] hover:scale-110 transition-transform duration-500 ease-in-out backdrop-blur-lg hover:text-black" style={{ backdropFilter: 'blur(16px) contrast(100%) uppercase', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}>
                                Book Now
                            </Button>

                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
