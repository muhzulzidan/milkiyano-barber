import React from 'react';
import { Button } from '@/components/ui/button'; // Import the Button component. Adjust the path as needed.

interface InstagramSectionProps {
    instagram_images_desktop: { image: string, name: string }[];
    instagram_images_mobile: string[];
}

const InstagramSection: React.FC<InstagramSectionProps> = ({ instagram_images_desktop, instagram_images_mobile }) => {
    return (
        <section className="md:h-screen flex  flex-col justify-center items-start pt-24 relative z-10">
            <div className="w-full px-4 md:px-0 md:w-10/12 justify-center flex flex-col z-10 relative">
                <h3 className="text-4xl tracking-wider font-extrabold md:text-end md:flex md:self-end flex-col mb-8">
                    FOLLOW US ON <br /> <span className="text-transparent bg-gradient-to-r from-[#4DFF20]  to-[#88FF7D] bg-clip-text">INSTAGRAM</span>
                </h3>
                <div className="hidden md:flex md:flex-row gap-2 h-full w-full overflow-hidden rounded-3xl ">
                    {instagram_images_desktop.map((image, index) => (
                        <div className={`h-[30em] md:h-[500px] ${index === instagram_images_desktop.length - 1 ? 'w-[500px] ' : 'w-2/12'} aspect-[4/10] object-cover transition-all duration-500 brightness-50 scale-100 hover:brightness-100 hover:w-[500px] rounded-3xl relative`}>
                            <img
                                key={index}
                                width={500}
                                height={500}
                                className='h-full w-full object-cover rounded-3xl'
                                src={image.image}
                                alt={`Instagram photo ${index + 1}`}
                            />
                            <p className='absolute bottom-4 text-center w-full font-bold  left-1/2 transform -translate-x-1/2 '>
                                {image.name}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:hidden gap-4 h-1/3 w-full z-20 bg-black">
                    {instagram_images_desktop.map((image, index) => (
                        <img key={index} width={500} height={500}
                            className={`h-[10em]  ${index === instagram_images_mobile.length - 1 ? 'h-[300px]' : 'h-2/12'} aspect-[4/10] object-cover transition-all duration-500 brightness-50 scale-100 hover:brightness-100 hover:h-[300px] rounded-2xl`}
                            src={image.image} alt={`Instagram photo ${index + 1}`} />
                    ))}
                </div>
                <div className="flex flex-col md:flex-row  self-center gap-4 py-12 md:pl-[15vw] ">
                    <Button variant={"ghost"} className="rounded-xl md:rounded-2xl w-full md:w-32 font-extrabold border-[#14FF00] border text-lg py-4 px-12 md:py-6 md:px-2 hover:bg-[#14FF00] shadow-md hover:shadow-[#14FF00] hover:scale-110 transition-transform duration-500 ease-in-out backdrop-blur-lg hover:text-black" style={{ backdropFilter: 'blur(16px) contrast(100%) uppercase', WebkitBackdropFilter: 'blur(16px) contrast(100%)' }}>
                        Book Now
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;