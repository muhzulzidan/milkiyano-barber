
import Layout from "@/components/landing/layout";
import { Button } from "@/components/ui/button";
import Footer from '@/components/landing/footer';
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from "@/components/CarauselScaled";

import { useEffect,  } from "react";
import Srolled from "@/components/Srolled.js";
import { Helmet } from "react-helmet-async";
import SwipedtoSee from "@/assets/svg/landing/Swipedtosee.svg";
import Vector from "@/assets/svg/landing/Vector.svg";
import Mid from "@/assets/svg/landing/Mid.svg";
import Top from "@/assets/svg/landing/top.svg";
import Josh from "@/assets/videos/josh/hero.mp4";
import Hero from "@/assets/svg/landing/Hero.svg";
import HeroBottom from "@/assets/svg/landing/HeroBottom.svg";
import ParticlesTwo from "@/assets/svg/landing/particles_section_twos.svg";
import ParticlesVideos from "@/assets/svg/landing/ParticlesVideos.svg";
import SwipeGif from "@/assets/gifs/josh/arrow.gif";

const OPTIONS: EmblaOptionsType = { loop: true, inViewThreshold: 1 }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

import cardFour from '@/assets/images/reviews/cards/cards_four.svg';
import cardOne from '@/assets/images/reviews/cards/cards_one.svg';
import cardTwo from '@/assets/images/reviews/cards/cards_two.svg';
import cardThree from '@/assets/images/reviews/cards/cards_three.svg';

const imagesReviews = [cardFour, cardOne, cardTwo, cardThree];

export default function JoshZver() {

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
        <title>Josh Fadelines BEST BARBER IN MELBOURNE</title>
        <meta name="description" content="Josh Fadelines BEST BARBER IN MELBOURNE - A premier barber shop offering top-notch haircuts and styles." />
        <meta property="og:title" content="Josh Fadelines BEST BARBER IN MELBOURNE" />
        <meta property="og:description" content="Josh Fadelines BEST BARBER IN MELBOURNE - A premier barber shop offering top-notch haircuts and styles." />
        <meta property="og:image" content="URL to Fadelines' preview image" />
        <meta property="og:url" content="URL to Fadelines' website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="flex flex-col bg-stone-950 w-full h-full relative">
        <img src={Vector} alt="Vector" width={500} height={500} className="absolute bottom-0 z-0 left-0 w-[40vw] h-auto" />
        <img src={Mid} alt="Vector Mid" width={500} height={500} className="absolute bottom-[85rem] z-0 left-0 w-full h-auto" />
        <img src={Top} alt="Vector Top" width={500} height={500} className="absolute top-[60rem] md:top-[30rem] z-10 left-0 w-full h-auto" />
        <section className="relative w-full h-[35rem] md:h-[35rem] " >
          <video autoPlay muted loop playsInline className="absolute z-0 w-full h-[40rem] md:h-[35rem] object-cover" >
            <source src={Josh} type="video/mp4" />
          </video>
          <div className="max-w-screen-lg mx-auto w-full">
            <div className="relative z-30 backdrop-blur-lg text-white rounded-3xl py-12 px-12 my-12 mb-10 mx-6 md:mx-12 border border-stone-50 md:w-1/2" style={{ backdropFilter: 'blur(16px) contrast(100%)', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}
            >
              <h2 className="text-4xl md:text-6xl uppercase font-poppins font-extrabold mb-2 text-[#42FF00] tracking-wider">Hi, I&apos;m josh</h2>
              <h2 className="text-xl font-bold mb-4">BEST BARBER IN MELBOURNE</h2>
              <p className="text-lg mb-8">I am specializing in design and it only takes one click to change everything including your look</p>
              <div className="bg-black"></div>
            </div>
            <div className="px-6 md:px-12 text-stone-50 flex flex-col md:flex-row gap-4 uppercase relative z-30">
              <Button
                variant={"ghost"}
                className="relative z-20 backdrop-blur-lg bg-transparent text-xl rounded-full border border-stone-50 px-12 py-6 
                transform hover:scale-110 transition-transform duration-200 ease-in-out hover:shadow-md hover:shadow-stone-50 hover:bg-stone-50 hover:text-stone-950"
                style={{ backdropFilter: 'blur(16px) contrast(100%)', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}
              >
                Book Now
              </Button>
            </div>
          </div>
          <img src={Hero} width={500} height={500} alt="Hero img" className="absolute z-20 w-screen  md:w-auto md:h-full object-fill top-0" />
          <img src={HeroBottom} width={500} height={500} alt="Hero Bottom" className="absolute z-20 w-auto h-full object-fill bottom-[-23rem] md:bottom-[-20rem]" fetchPriority="high" />
        </section>
        <section className="flex relative flex-col z-20 justify-center items-center  container w-full text-stone-50 uppercase py-32 pt-40 pb-20">
          <div className="hidden xl:flex  absolute bottom-1/3 pb-32 left-32  h-auto">
            <img alt="swipe to see " src={SwipedtoSee} width={500} height={500}  className="w-[15rem] h-auto" />
            <img
              alt="swipe to see "
              src={SwipeGif}
              width={500}
              height={500}
              className="w-[15rem] h-auto py-4 flex justify-end absolute bottom-[-0rem] right-0"
            />
          </div>
          <div className="relative z-10 flex flex-col gap-12 justify-center items-center overflow-hidden">
            <Srolled />
          </div>
          <img src={ParticlesTwo} width={500} height={500} alt="Your img" className="absolute z-0 w-auto h-full object-fill bottom-[0]" />
        </section>
        <section className="container relative z-10 text-stone-50 pt-0 py-12 ">
          <div className="relative z-10">
            <h3 className=" text-4xl md:text-6xl  font-poppins font-extrabold text-center py-2 uppercase text-transparent bg-gradient-to-r from-[#19F456] via-[#44D140] to-[#A1FF80] bg-clip-text">Our Videos</h3>
            <p className="text-center text-lg w-10/12 md:w-full mx-auto">well known on TIktok with millions of views</p>
            <div className="py-12 md:py-0 w-full md:px-12  ">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
            <div className="flex gap-10 justify-center items-center flex-col w-full ">
              <Button variant={"ghost"} className="border border-[#00FF1A] rounded-full font-extrabold font-poppins px-12 py-10 uppercase  text-xl md:text-3xl transform hover:scale-110 transition-transform duration-200 ease-in-out hover:bg-[#24FF00] hover:shadow-md hover:text-stone-950 hover:shadow-[#44813a] ">
                Book Now
              </Button>
            </div>
          </div>
          <img src={ParticlesVideos} width={500} height={500} alt="Your img" className="absolute left-0 z-0 w-auto h-full object-fill bottom-[0]" />
        </section>

        <section className="container mx-auto px-6 sm:px-6 lg:px-8 py-12 text-stone-50 rounded-lg shadow-lg relative z-10 flex flex-col justify-center items-center">
          <h4 className="text-4xl md:text-7xl my-6 md:my-12 uppercase   items-center justify-center text-center font-extrabold text-transparent bg-gradient-to-r from-[#19F456] via-[#44D140] to-[#A1FF80] bg-clip-text">Reviews</h4>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {imagesReviews.map((review, index) => (
              <img key={index} src={`${review}`} width={5000} height={5000} alt="reviews barbershops"  />
            ))}
          </div>
          <Button variant={"ghost"} className="border border-[#00FF19] px-12 py-8 text-2xl font-bold font-poppins rounded-full my-24 transform hover:scale-110 transition-transform duration-200 ease-in-out hover:bg-[#24FF00] hover:shadow-md hover:text-stone-950 hover:shadow-[#44813a] ">
            LIMITED SLOT ONLY!
          </Button>
        </section>
        <section className="container relative  z-30 flex justify-center items-center pb-32 px-6 md:px-0 md:pb-0 md:h-[100vh] text-stone-50  ">
          <div className=" bg-[#0E0E0E]/20 backdrop-blur-lg px-6 md:px-12 py-10 rounded-[36px] md:rounded-[50px] w-full md:w-9/12 lg:w-7/12 relative flex flex-col justify-center items-center"
            id="gradientBox"
            style={{ backgroundSize: 'cover', backdropFilter: 'blur(16px) contrast(100%)', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}
          >
            <h3 className="text-3xl md:text-4xl font-black font-poppins w-10/12 tracking-wider leading-[3rem] md:leading-10  mt-4 mb-12 uppercase">Book an Appoinment Now.
              <br className="hidden md:block"/>
              <span className="text-[#24FF00]">LIMITED </span>
              SLOT ONLY!
            </h3>
            <div className="flex justify-center items-center text-center flex-col  ">
              <p className="my-12 tracking-wider w-8/12 md:w-full">Life is too short to get a bad hair cut.</p>
              <div className="flex flex-col md:flex-row gap-2 py-4 uppercase" >
                <Button variant={"ghost"} className="border border-stone-400 rounded-full uppercase px-12 py-6 bg-[#1ABC00]/5 transform hover:scale-110 transition-transform duration-200 ease-in-out hover:shadow-lg hover:shadow-stone-800 hover:bg-[#24FF00] hover:text-stone-950">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
         
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
