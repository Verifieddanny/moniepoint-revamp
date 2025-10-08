"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { RotatingOne, RotatingTwo, RotatingThree, RotatingFour } from "../illustrations/rotating-union";

export default function Numbers() {

    const ref = useRef<HTMLDivElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.4 });

    // Motion value for counting
    const count = useMotionValue(0);
    const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

    useEffect(() => {
        if (inView) {
            const controls = animate(count, 5_000_000, {
                duration: 3.5,
                ease: "easeOut",
            });
            return () => controls.stop();
        } else {
            count.set(0);
        }
    }, [inView, count]);

    return (
        <section className="relative w-full overflow-hidden bg-[#0F4099] md:py-[5rem] py-[2.5rem]" ref={ref}>
            {/* stacked, centered background rings */}
            <div className="pointer-events-none select-none absolute inset-0">
                {/* anchor at center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* sizes use vmin so they scale with the smaller viewport side */}
                    <RotatingOne className="block w-[100vmin] md:w-[200vmin] h-auto animate-spin [animation-duration:70s] [animation-timing-function:linear]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RotatingTwo className="block w-[87.5vmin] md:w-[175vmin] h-auto animate-spin [animation-duration:55s] [animation-timing-function:linear]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RotatingThree className="block w-[67.5vmin]  md:w-[135vmin]  h-auto animate-spin [animation-duration:45s] [animation-timing-function:linear]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RotatingFour className="block w-[37.5vmin]  md:w-[75vmin]  h-auto animate-spin [animation-duration:35s] [animation-timing-function:linear]" />
                </div>
            </div>

            {/* content on top */}
            <div className="relative z-10 flex flex-col items-center">
                <p className="font-medium text-white md:text-3xl text-xs text-center md:tracking-[-0.02rem] tracking-tight md:mb-[5rem] mb-[2.5rem]">
                    Businesses that Count On Us
                </p>
                <motion.p
                    className="font-medium text-white text-5xl md:text-[12rem] text-center tracking-[-0.02rem] md:tracking-[-0.5rem] md:mb-[5rem] mb-[2.5rem]"
                >
                    {rounded}
                </motion.p>
                <p className="font-medium text-white md:text-3xl text-xs text-center tracking-[-0.02rem]">Join 5 million business owners on the<br /> Moniepoint platform</p>
            </div>
        </section>
    );
}
