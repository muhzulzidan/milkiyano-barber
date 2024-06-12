import { useState } from 'react'
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from 'react-use-gesture'

import styles from '@/styles/card.module.css'

const cards = [
    '/src/assets/web/cards/cards3.png',
    '/src/assets/web/cards/cards2.png',
    '/src/assets/web/cards/cards.png',
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i: number) => ({
    x: i * -50, // Adjust this value to change the horizontal spacing between cards
    y: i * 1, // Adjust this value to change the vertical spacing between cards
    scale: 1,
    rot: 10 + i * -10,
    delay: i * 100,
})
const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r: number, s: number) =>
    `perspective(1500px) rotateX(10deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function CardStack() {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, api] = useSprings(cards.length, i => ({
        ...to(i),
        from: from(i),
    })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
        const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
        if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        api.start(i => {
            if (index !== i) return // We're only interested in changing spring-data for the current spring
            const isGone = gone.has(index)
            const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
            const rot = mx / 50 + (isGone ? dir * 5 * velocity : 0); // Decrease rotation
            const scale = down ? 1.1 : 1 // Active cards lift up a bit
            return {
                x,
                rot,
                scale,
                delay: undefined,
                config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
            }
        })
        if (!down && gone.size === cards.length)
            setTimeout(() => {
                gone.clear()
                api.start(i => to(i))
            }, 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

    
    return (
        <>
           {/* <div className='h-full'> */}
            {props.map(({ x, y, rot, scale }, i) => {
                // Calculate the reversed index
                const ri = cards.length - 1 - i;

                return (
                    <animated.div className={styles.deck} key={i} style={{ x, y }}>
                        <animated.div
                            {...bind(i)}
                            style={{
                                transform: interpolate([rot, scale], trans),
                                backgroundImage: `url(${cards[i]})`,
                                filter: `blur(${ri}px) brightness(${100 - ri * 30}%)`, // Adjust the filters based on the reversed index
                            }}
                        />
                    </animated.div>
                );
            })}
           {/* </div> */}
        </>
    )
}

export default CardStack