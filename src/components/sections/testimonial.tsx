"use client"

import React, { useCallback, useState } from 'react'
import Scribble from '../illustrations/scribble'
import Image from 'next/image'
import TestimonialQuote from '../illustrations/testimonial-quote'
import Navigation from '../illustrations/navigation'
import { generalSans } from '@/app/page'
import VideoCard from './video-card'
import { testimonials } from '../../../lib/testimonial'
import { motion, AnimatePresence } from "motion/react";

/* tuning knobs */
const SWIPE_OFFSET_PX = 60;          
const SWIPE_VELOCITY = 0.35;         
const SWIPE_POWER_THRESHOLD = 400;   
const SLIDE_X = 120;

const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * Math.abs(velocity);

function Testimonial() {
     const [[index, direction], setPage] = useState<[number, 1 | -1]>([0, 1]);

  const next = () =>
    setPage(([i]) => [ (i + 1) % testimonials.length, 1 ]);
  const prev = () =>
    setPage(([i]) => [ (i - 1 + testimonials.length) % testimonials.length, -1 ]);

  const current = testimonials[index];

  const variants = {
    enter: (dir: 1 | -1) => ({ x: dir * SLIDE_X, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:  (dir: 1 | -1) => ({ x: -dir * SLIDE_X, opacity: 0 }),
  };
    return (
        <main className="w-screen min-h-screen md:py-[5rem] py-[2.5rem] flex flex-col items-center max-w-[1300px] mx-auto md:mt-[4rem] mt-[9rem] md:mb-[5rem] mb-[2.5rem]">

            <div className='w-fit relative mb-[4rem]'>
                <p className='text-primary font-bold md:text-7xl text-4xl text-center md:tracking-[-0.25rem] tracking-tight'>Don&apos;t just take our<br /> word for it.</p>

                <motion.div
                    key={current.scribbleColor + index}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="absolute md:left-[7rem] left-[3.7rem] md:-bottom-[1.8rem] -bottom-[0.6rem] md:w-[11rem] w-[6rem] md:h-[4rem]"
                >
                    <Scribble color={current.scribbleColor} className='w-full h-full' />
                </motion.div>
            </div>

            <div className="w-full flex justify-center gap-x-[2rem]">
        <Navigation
          className="w-[2rem] h-[3rem] cursor-pointer md:block hidden mt-[13rem]"
          onClick={prev}
        />

        <div className="relative md:w-[70%] w-[93%] md:h-[48.75rem] h-[24.6rem]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 380, damping: 36, mass: 0.9 }}
              className="w-full h-full rounded-[1rem] md:p-[2rem] p-2 select-none [touch-action:pan-y]"
              style={{ backgroundColor: current.cardColor }}

              /* swipe settings */
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              dragMomentum={true}
              onDragEnd={(_, info) => {
                const { offset, velocity } = info;

                // accept on either good power, or short but fast flick, or long slow drag
                const power = swipePower(offset.x, velocity.x);
                const longDrag = Math.abs(offset.x) > SWIPE_OFFSET_PX;
                const quickFlick = Math.abs(velocity.x) > SWIPE_VELOCITY;

                if (power > SWIPE_POWER_THRESHOLD || longDrag || quickFlick) {
                  if (offset.x < 0) next(); else prev();
                }
              }}
            >
              <div className="w-full md:h-[29.25rem] h-[11.26rem] rounded-[1rem] bg-white relative overflow-hidden">
                <VideoCard
                  videoId={current.videoId}
                  poster={current.poster}
                  title={current.name}
                  color={current.cardColor}
                  playbutton={current.playColor}
                />
              </div>

              {/* corner quotes */}
              <TestimonialQuote className="absolute md:-top-[18%] md:-left-[5%] -top-[13%] -left-[2%]" />
              <TestimonialQuote className="absolute md:bottom-[25%] md:-right-[5%] bottom-[40%] -right-[2%] rotate-180" />

              {/* text */}
              <div className="w-full md:h-[17.5rem] h-[7.34rem] flex md:flex-row flex-col justify-between md:pt-[4rem] pt-2">
                <div className="md:w-[55%] w-full">
                  <p className="text-primary font-bold md:text-7xl text-4xl tracking-[-0.2rem]">
                    {current.name}
                  </p>
                  <p className="text-primary font-medium md:text-xl md:mt-[2rem] mt-[0.5rem] text-[1.125rem] tracking-[-0.02rem]">
                    {current.role}
                  </p>
                </div>
                <div className="md:w-[45%] w-full">
                  <p className={`${generalSans.className} font-medium tracking-[-0.02rem] md:mt-0 mt-[1rem] md:text-base text-xs`}>
                    {current.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Navigation
          className="w-[2rem] h-[3rem] cursor-pointer rotate-180 md:block hidden mt-[13rem]"
          onClick={next}
        />
      </div>

            <div className="w-full flex items-center justify-center gap-x-[1rem] md:mt-[1.5rem] mt-[1.25rem]">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage([i, i > index ? 1 : -1])}
                        className={`w-[1rem] h-[1rem] rounded-[0.25rem] transition-colors duration-300 ${i === index ? "bg-accent" : "bg-[#D2D2D2]"
                            }`}
                        title={`Go to testimonial ${i + 1}`}
                        aria-label={`Go to testimonial ${i + 1}`}
                    />
                ))}
            </div>
        </main>
    )
}

export default Testimonial