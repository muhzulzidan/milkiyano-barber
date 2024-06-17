import { motion, MotionValue } from "framer-motion";

interface LineProps {
    height: string | number;
}


const StaticLine = ({ height }: LineProps) => (
    <div className={` w-[1px] bg-[#086600] z-0`} style={{ height, }} />
);

const AnimatedLine = ({ scaleY, height }: { scaleY: MotionValue<number> } & LineProps) => (
    <motion.div
    
        className={`absolute  w-[2px] bg-gradient-to-b from-[#096601] to-[#15ff00] shadow-[0px_0px_70px_2px_#15ff00] origin-top z-10`}
        style={{ scaleY, height, }}
    />
);


export { StaticLine, AnimatedLine };