
import Layout from "@/components/web/layout";
import { Button } from "@/components/ui/button";
import { EmblaOptionsType } from 'embla-carousel'


import { useEffect,  } from "react";
import EmeraldFooter from "@/assets/web/svg/EmeraldFooter.svg";
import EmeraldFooterRight from "@/assets/web/svg/EmeraldFooterRight.svg";
import EmeraldFooterLeft from "@/assets/web/svg/EmeraldFooterleft.svg";
import CarauselGallery from "@/components/CarauselGallery";
import { Helmet } from "react-helmet-async";
import CardStack from "@/components/CardStack";


const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
const OPTIONS: EmblaOptionsType = { loop: true, inViewThreshold: 1 }

export default function GalleriesPage() {


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
                <title>Gallery - Fadelines Barber Shop</title>
                <meta name="description" content="Fadelines - A premier barber shop offering top-notch haircuts and styles." />
                <meta property="og:title" content="Fadelines Barber Shop" />
                <meta property="og:description" content="Fadelines - A premier barber shop offering top-notch haircuts and styles." />
                <meta property="og:img" content="URL to Fadelines' preview img" />
                <meta property="og:url" content="URL to Fadelines' website" />
                <meta name="twitter:card" content="summary_large_img" />
            </Helmet>
            <div className="flex flex-col text-stone-50 bg-black w-full relative ">
                <img src={EmeraldFooter} alt="EmeraldFooter.svg" className="md:hidden block absolute bottom-[-10rem] md:bottom-[-26rem] z-0 left-0" />

                <img src={EmeraldFooterRight} alt="EmeraldFooter.svg" className="absolute hidden md:block bottom-[-10rem] md:bottom-[-26rem] z-0 right-0" />
                <img src={EmeraldFooterLeft} alt="EmeraldFooter.svg" className="absolute hidden md:block bottom-[-10rem] md:bottom-[-26rem] z-0 left-0" />
                <section className="pb-40 md:pb-24">
                    <section className=" w-full relative flex flex-col items-center text-center pt-12  md:pt-24 container">
                        <div className="w-full px-4 md:px-0 pt-12 flex flex-col gap-4 ">
                            <h3 className="text-2xl md:text-3xl tracking-wider font-extrabold w-full md:w-1/3 mx-auto font-inter">
                                <span className="text-transparent bg-gradient-to-r from-[#42FF00]  to-[#79FF86] bg-clip-text">GALLERY</span>
                                <br />
                                OF OUR WORK
                            </h3>

                        </div>
                    </section>

                    <section className="relative z-30 flex flex-col gap-2  py-4 container mx-0 max-w-none px-0">
                        <CarauselGallery slides={SLIDES} options={OPTIONS} />
                        {/* <Carousel opts={{
                            "loop": true,
                        }}>
                            <CarouselContent>
                                {galleryimgs.map((img, index) => (
                                    <CarouselItem key={index} className="basis-1/3">
                                        <img src={img.default} alt={`Gallery ${index + 1}`} />
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel> */}
                        <p className="text-center py-4 tracking-wider font-light">
                            Our cuts don&apos;t disappoint.
                        </p>
                    </section>
                </section>
                <section className="py-12 pb-24 px-0 container pr-0  md:pr-4 relative z-30 flex gap-12 justify-center items-center flex-col md:flex-row">
                    <div className="w-full md:w-10/12 flex flex-col justify-end md:pb-24 h-full">
                        <h3 className="text-3xl md:text-4xl font-extrabold tracking-wider flex flex-col  md:gap-2 text-center md:text-right">
                            <span>
                                BE OUR  NEXT
                            </span>
                            <span className="text-transparent bg-gradient-to-r from-[#42FF00]  to-[#79FF86] bg-clip-text">
                                MASTERPIECE
                            </span>
                        </h3>
                        <div className="flex flex-col gap-2 pt-4 w-full md:w-9/12 justify-end md:items-end self-end items-center justify-self-end ">
                            <Button className="bg-gradient-to-r from-[#14FF00]  to-[#999999] rounded-full px-6 text-stone-50 font-bold uppercase md:py-1 md:h-auto md:text-lg text-md transform transition-all duration-500 hover:scale-110 hover:from-[#999999] hover:to-[#14FF00] py-0 w-5/12 ">
                                Book Now
                            </Button>
                        </div>
                    </div>
                    <div className="w-full  overflow-hidden  flex justify-center items-center min-h-[25rem] md:min-h-[40rem] md:rotate-[26deg]">
                     
                        <CardStack />
                   
                        {/* <img src={Cards} alt="cards" className="w-10/12 max-w-none md:max-w-full md:w-10/12 " /> */}
                    </div>
                </section>
            </div>
        </Layout>
    );
}
