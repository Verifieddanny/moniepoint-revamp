"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import LinkUp from "../illustrations/link-up";
import { Cloud } from "../illustrations/cloud";
import { generalSans } from "@/app/page";
import { useRef } from "react";


const cardVariants = {
    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { type: "spring" as const, stiffness: 140, damping: 20, mass: 0.7 }
    }
};


export default function Features() {
    const firstRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress: firstP } = useScroll({
        target: firstRef,
        offset: ["start 90%", "start 45%"],
    });

    // map scroll -> styles
    const firstY = useTransform(firstP, [0, 1], [24, 0]);
    const firstOpacity = useTransform(firstP, [0, 1], [0, 1]);
    // const firstBlur = useTransform(firstP, [0, 1], [6, 0], { clamp: false });
    return (
        <main className="w-full min-h-screen md:py-[5rem] py-[2.5rem] flex flex-col items-center max-w-[1300px] mx-auto">
            {/* Card 1 */}
            <motion.div
                ref={firstRef}
                style={{
                    y: firstY,
                    opacity: firstOpacity,
                    willChange: "transform, opacity",
                }}
                className="md:w-[90%] w-[80%] h-[32.75rem] md:h-[41rem] rounded-[1rem] overflow-hidden flex flex-col md:mb-[5rem] mb-[4.375rem] transform-gpu"
            >
                <div className="w-full h-[14.75rem] md:h-[63%] relative overflow-hidden">
                    <Image
                        src="/images/pos-wey-no-get-issue.webp"
                        alt="pos-machine-wey-no-get-wahala"
                        quality={90}
                        fill
                        priority
                        sizes="(min-width: 1024px) 1170px, 90vw"
                        className="object-cover w-full h-full object-center hover:scale-125 duration-300 ease-in-out transition-all"
                    />
                </div>

                <div className="w-full h-[18.125rem] md:h-[37%] bg-[#0A6FFE] bg-[url(/images/backgroun-spots.webp)] bg-cover bg-center flex md:flex-row flex-col md:justify-between md:py-[2rem] md:px-[2rem] py-[1rem] px-[0.5rem]">
                    <p className="font-bold md:text-7xl text-3xl text-white md:tracking-[-0.1rem] tracking-tight md:w-[65%] w-full">
                        POS machine wey
                        <br /> no get wahala.
                    </p>

                    <div className={`md:w-[35%] w-full ${generalSans.className}`}>
                        <p className="text-white tracking-tight md:text-base text-sm md:mt-0 md:mb-[2.5rem] mt-[1.5rem] mb-[1rem]">
                            Accept card and transfer payments seamlessly,
                            <br /> with a reliable point of sale terminal. Enjoy
                            <br /> instant settlement, easy dispute resolution, and
                            <br /> instant payments every time.
                        </p>

                        <Link href="https://moniepoint.sng.link/Dcbc3/df2f?_smtype=3">
                            <div className="bg-[#002C88] md:rounded-[0.5rem] rounded-[1rem] md:py-[0.75rem] px-[1rem] py-[1.5rem] flex items-center gap-x-2 hover:bg-primary/35 transition-colors ease-in-out duration-300 md:w-fit justify-center">
                                <p className="text-white font-medium text-base text-center">
                                    Open an Account
                                </p>
                                <div className="w-[1rem] h-[1rem] rotate-90 md:block hidden">
                                    <LinkUp className="w-full h-full" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Card 2 with drifting clouds */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22, margin: "10% 0% -10% 0%" }}
                className="md:w-[90%] w-[80%] h-[32.75rem] md:h-[41rem] rounded-[1rem] overflow-hidden flex flex-col md:mb-[5rem] mb-[4.375rem] transform-gpu will-change-transform"
            >
                <div className="w-full h-[14.75rem] md:h-[63%] relative overflow-hidden">
                    <Image
                        src="/images/better-card-for-activ-deals.webp"
                        alt="better-card-for-active-deals"
                        quality={90}
                        fill
                        priority
                        className="object-cover w-full h-full object-center hover:scale-125 duration-300 ease-in-out transition-all"
                        sizes="(min-width: 1024px) 1170px, 90vw"
                    />

                    {/* endless left to right wrap, starts from current layout position */}
                    <motion.div
                        className="absolute md:-top-[10%] top-[10%] -left-[0%] md:w-[100rem] md:h-[25rem] w-[50rem] h-[12.5rem] pointer-events-none"
                        animate={{ x: ["-120%", "120vw"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud />
                    </motion.div>

                    <motion.div
                        className="absolute md:-bottom-[10%] top-[5%] md:-left-[105rem] -left-[52.5rem] md:w-[100rem] md:h-[25rem] w-[50rem] h-[12.5rem] pointer-events-none"
                        animate={{ x: ["-120%", "120vw"] }}
                        transition={{ duration: 46, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud />
                    </motion.div>

                    <motion.div
                        className="absolute md:-bottom-[10%] top-[10%] md:left-[105rem] left-[52.5rem] md:w-[100rem] md:h-[25rem] w-[50rem] h-[12.5rem] pointer-events-none"
                        animate={{ x: ["-120%", "120vw"] }}
                        transition={{ duration: 46, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud />
                    </motion.div>


                </div>

                <div className="w-full h-[18.125rem] md:h-[37%] bg-[#0A6FFE] bg-[url(/images/backgroun-spots.webp)] bg-cover bg-center flex md:flex-row flex-col md:justify-between md:py-[2rem] md:px-[2rem] py-[1rem] px-[0.5rem]">
                    <p className="font-bold md:text-7xl text-3xl text-white md:tracking-[-0.1rem] tracking-tight md:w-[65%] w-full">
                        Better card
                        <br />
                        for aktiv deals.
                    </p>

                    <div className={`md:w-[35%] w-full ${generalSans.className}`}>
                        <p className="text-white tracking-tight md:text-base text-sm md:mt-0 md:mb-[2.5rem] mt-[1.5rem] mb-[0.8rem]">
                            Order an expense card to spend and manage your
                            <br /> business finance effectively, and get it in 48hrs.
                            <br /> Track your business expenses and set limits for
                            <br /> different needs.
                        </p>

                        <Link href="https://moniepoint.sng.link/Dcbc3/df2f?_smtype=3">
                            <div className="bg-[#002C88] md:rounded-[0.5rem] rounded-[1rem] md:py-[0.75rem] py-[1.5rem] px-[1rem] flex items-center gap-x-2 hover:bg-primary/35 transition-colors ease-in-out duration-300 md:w-fit justify-center">
                                <p className="text-white font-medium text-base text-center">
                                    Get a Card
                                </p>
                                <div className="w-[1rem] h-[1rem] rotate-90 md:block hidden">
                                    <LinkUp className="w-full h-full" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22, margin: "10% 0% -10% 0%" }}
                className="md:w-[90%] w-[80%] h-[32.75rem] md:h-[45rem] rounded-[1rem] overflow-hidden flex flex-col transform-gpu will-change-transform"
            >
                <div className="w-full h-[14.75rem] md:h-[63%] relative overflow-hidden">
                    <Image
                        src="/images/you-fit-get-loan-sharply.webp"
                        alt="you-fit-get-loan-sharply"
                        quality={90}
                        fill
                        priority
                        className="object-cover object-[top_2rem] w-full h-auto  hover:scale-125 duration-300 ease-in-out transition-all"
                        sizes="(min-width: 1024px) 1170px, 90vw"
                    />
                </div>

                <div className="w-full h-[18.125rem] md:h-[37%] bg-[#0A6FFE] bg-[url(/images/backgroun-spots.webp)] bg-cover bg-center flex md:flex-row flex-col md:justify-between md:py-[2rem] md:px-[2rem] py-[1rem] px-[0.5rem]">
                    <p className="font-bold md:text-7xl text-3xl text-white md:tracking-[-0.1rem] tracking-tight md:w-[65%] w-full">
                        You fit get
                        <br />
                        loan sharply
                    </p>

                    <div className={`md:w-[35%] w-full ${generalSans.className}`}>
                        <p className="text-white tracking-tight md:text-base text-sm md:mt-0 md:mb-[2.5rem] mt-[1.71rem] mb-[2rem]">
                            Access working capital loans to help your business
                            <br /> grow. Easy request process with business friendly
                            <br /> interest rates and repayment tenures.
                        </p>

                        <Link href="https://moniepoint.sng.link/Dcbc3/df2f?_smtype=3">
                            <div className="bg-[#002C88] md:rounded-[0.5rem] rounded-[1rem] md:py-[0.75rem] px-[1rem] py-[1.5rem] flex items-center gap-x-2 hover:bg-primary/35 transition-colors ease-in-out duration-300 md:w-fit justify-center">
                                <p className="text-white font-medium text-base text-center">
                                    Open an Account
                                </p>
                                <div className="w-[1rem] h-[1rem] rotate-90 md:block hidden">
                                    <LinkUp className="w-full h-full" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
