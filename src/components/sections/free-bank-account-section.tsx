"use client"

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import OfficialIcon from '../illustrations/official-icon'
import { generalSans } from "@/app/page";

function FreeBank() {
    const ref = useRef<HTMLElement | null>(null);
    const isInView = useInView(ref, { once: true, amount: 0.4 })
    return (
        <motion.main ref={ref} className='w-screen relative -top-[7dvh] flex flex-col items-center md:py-[5rem] py-[2.5rem]' initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }} className='md:w-[7.703rem] md:h-[7.625rem] w-[4.48rem] h-[4.44rem]'>
                <OfficialIcon className='w-full h-full' />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }} className='text-primary font-bold md:text-5xl text-3xl text-center my-[2rem] md:tracking-[-0.1rem] tracking-tight'>A free bank account to<br /> power your business</motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }} className={`text-grays text-center tracking-tight md:text-base text-sm ${generalSans.className}`}>Open a free bank account in your business name, in minutes.<br /> Access round the clock support, with no hidden fees and<br /> complete control over your account.</motion.p>
        </motion.main>
    )
}

export default FreeBank