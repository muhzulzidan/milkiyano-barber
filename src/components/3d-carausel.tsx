// import  {  useState } from "react";
// import Carousel from "react-spring-3d-carousel";
// import uuidv4 from "uuid";
// import { config } from "react-spring";

// const getTouches = (evt: { touches: any; originalEvent: { touches: any; }; }) => {
//     return (
//         evt.touches || evt.originalEvent.touches // browser API
//     );
// };

// const ThreeDCarausel = () => {
//     const [goToSlide, setGoToSlide] = useState(0);
//     const [offsetRadius, setOffsetRadius] = useState(2);
//     const [showNavigation, setShowNavigation] = useState(true);
//     const [enableSwipe, setEnableSwipe] = useState(true);
//     const [config, setConfig] = useState(config.gentle);

//     const slides = [
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/800/801/?random" alt="1" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/800/802/?random" alt="2" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/600/803/?random" alt="3" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/800/500/?random" alt="4" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/800/804/?random" alt="5" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/500/800/?random" alt="6" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/800/600/?random" alt="7" />
//         },
//         {
//             key: uuidv4(),
//             content: <img src="https://picsum.photos/805/800/?random" alt="8" />
//         }
//     ].map((slide, index) => {
//         return { ...slide, onClick: () => setGoToSlide(index) };
//     });

//     const onChangeInput = (e: { target: { value: string; name: string; }; }) => {
//         const value = parseInt(e.target.value, 10) || 0;
//         if (e.target.name === "goToSlide") {
//             setGoToSlide(value);
//         } else if (e.target.name === "offsetRadius") {
//             setOffsetRadius(value);
//         }
//     };

//     const handleTouchStart = (evt: any) => {
//         if (!enableSwipe) {
//             return;
//         }

//         const firstTouch = getTouches(evt)[0];
//         setGoToSlide((prevGoToSlide) => ({
//             ...prevGoToSlide,
//             xDown: firstTouch.clientX,
//             yDown: firstTouch.clientY
//         }));
//     };

//     const handleTouchMove = (evt: { touches: { clientY: any; }[]; }) => {
//         if (!enableSwipe || (!goToSlide.xDown && !goToSlide.yDown)) {
//             return;
//         }

//         let xUp = evt.touches[0].clientX;
//         let yUp = evt.touches[0].clientY;

//         let xDiff = goToSlide.xDown - xUp;
//         let yDiff = goToSlide.yDown - yUp;
//         if (Math.abs(xDiff) > Math.abs(yDiff)) {
//             if (xDiff > 0) {
//                 /* left swipe */
//                 setGoToSlide((prevGoToSlide) => ({
//                     ...prevGoToSlide,
//                     goToSlide: prevGoToSlide.goToSlide + 1,
//                     xDown: null,
//                     yDown: null
//                 }));
//             } else {
//                 /* right swipe */
//                 setGoToSlide((prevGoToSlide) => ({
//                     ...prevGoToSlide,
//                     goToSlide: prevGoToSlide.goToSlide - 1,
//                     xDown: null,
//                     yDown: null
//                 }));
//             }
//         }
//     };

//     return (
//         <div
//             style={{ width: "80%", height: "500px", margin: "0 auto" }}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//         >
//             <Carousel
//                 slides={slides}
//                 goToSlide={goToSlide.goToSlide}
//                 offsetRadius={offsetRadius}
//                 showNavigation={showNavigation}
//                 animationConfig={config}
//             />
//             <div
//                 style={{
//                     margin: "0 auto",
//                     marginTop: "2rem",
//                     width: "50%",
//                     display: "flex",
//                     justifyContent: "space-around"
//                 }}
//             >
//                 <div>
//                     <label>Go to slide: </label>
//                     <input name="goToSlide" onChange={onChangeInput} />
//                 </div>
//                 <div>
//                     <label>Offset Radius: </label>
//                     <input name="offsetRadius" onChange={onChangeInput} />
//                 </div>
//                 <div>
//                     <label>Show navigation: </label>
//                     <input
//                         type="checkbox"
//                         checked={showNavigation}
//                         name="showNavigation"
//                         onChange={(e) => {
//                             setShowNavigation(e.target.checked);
//                         }}
//                     />
//                 </div>
//                 <div>
//                     <label>Enable swipe: </label>
//                     <input
//                         type="checkbox"
//                         checked={enableSwipe}
//                         name="enableSwipe"
//                         onChange={(e) => {
//                             setEnableSwipe(e.target.checked);
//                         }}
//                     />
//                 </div>
//                 <div>
//                     <button
//                         onClick={() => {
//                             setConfig(config.gentle);
//                         }}
//                         disabled={config === config.gentle}
//                     >
//                         Gentle Transition
//                     </button>
//                 </div>
//                 <div>
//                     <button
//                         onClick={() => {
//                             setConfig(config.slow);
//                         }}
//                         disabled={config === config.slow}
//                     >
//                         Slow Transition
//                     </button>
//                 </div>
//                 <div>
//                     <button
//                         onClick={() => {
//                             setConfig(config.wobbly);
//                         }}
//                         disabled={config === config.wobbly}
//                     >
//                         Wobbly Transition
//                     </button>
//                 </div>
//                 <div>
//                     <button
//                         onClick={() => {
//                             setConfig(config.stiff);
//                         }}
//                         disabled={config === config.stiff}
//                     >
//                         Stiff Transition
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//  export default ThreeDCarausel;