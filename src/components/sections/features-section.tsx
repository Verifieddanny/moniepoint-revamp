"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import LinkUp from "../illustrations/link-up";
import { Cloud1, Cloud2, Cloud3 } from "../illustrations/cloud";


const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 180, damping: 22, mass: 0.6 }
    }
};

export default function Features() {
    return (
        <main className="w-screen min-h-screen md:py-[5rem] py-[2.5rem] flex flex-col items-center max-w-[1300px] mx-auto">
            {/* Card 1 */}
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="w-[90%] h-[32.75rem] md:h-[41rem] rounded-[1rem] overflow-hidden flex flex-col md:mb-[5rem] mb-[2.5rem] transform-gpu will-change-transform"
            >
                <div className="w-full h-1/2 md:h-[63%] relative">
                    <Image
                        src="/images/pos-wey-no-get-issue.webp"
                        alt="pos-machine-wey-no-get-wahala"
                        quality={90}
                        fill
                        className="object-cover w-full h-full object-center"
                        sizes="(min-width: 1024px) 1170px, 90vw"
                        priority={false}
                    />
                </div>

                <div className="w-full h-1/2 md:h-[37%] bg-accent bg-[url(/images/backgroun-spots.webp)] bg-cover bg-center flex md:flex-row flex-col md:justify-between md:p-[2rem] p-[1rem]">
                    <p className="font-custom font-bold md:text-7xl text-3xl text-white md:tracking-[-0.1rem] tracking-tight md:w-[65%] w-full">
                        POS machine wey
                        <br /> no get wahala.
                    </p>

                    <div className="md:w-[35%] w-full">
                        <p className="text-white font-custom tracking-tight md:text-base text-sm md:mt-0 mt-[1rem] md:mb-[2.5rem] mb-[1rem]">
                            Accept card and transfer payments seamlessly,
                            <br /> with a reliable point of sale terminal. Enjoy
                            <br /> instant settlement, easy dispute resolution, and
                            <br /> instant payments every time.
                        </p>

                        <Link href="">
                            <div className="bg-primary rounded-[0.5rem] py-[0.75rem] px-[1rem] flex items-center gap-x-2 hover:bg-accent transition-colors ease-in-out duration-300 md:w-fit justify-center">
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
                viewport={{ once: true, amount: 0.2 }}
                className="w-[90%] h-[32.75rem] md:h-[41rem] rounded-[1rem] overflow-hidden flex flex-col md:mb-[5rem] mb-[2.5rem] transform-gpu will-change-transform"
            >
                <div className="w-full h-1/2 md:h-[63%] relative overflow-hidden">
                    <Image
                        src="/images/better-card-for-activ-deals.webp"
                        alt="better-card-for-active-deals"
                        quality={90}
                        fill
                        className="object-cover w-full h-full object-center"
                        sizes="(min-width: 1024px) 1170px, 90vw"
                    />

                    {/* endless left to right wrap, starts from current layout position */}
                    <motion.div
                        className="absolute -top-[10%] -left-[10%] w-[50rem] h-[25rem] pointer-events-none"
                        animate={{ x: ["-120%", "120vw"] }}
                        transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud1 />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-[10%] -left-[10%] w-[50rem] h-[25rem] pointer-events-none"
                        animate={{ x: ["-120%", "120vw"] }}
                        transition={{ duration: 46, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud1 />
                    </motion.div>

                    <motion.div
                        className="absolute -top-[25%] -right-[8%] w-[50rem] h-[25rem] pointer-events-none"
                        animate={{ x: ["-140%", "120vw"] }}
                        transition={{ duration: 55, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud2 />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-[5%] right-[50%] w-[50rem] h-[25rem] pointer-events-none"
                        animate={{ x: ["-130%", "120vw"] }}
                        transition={{ duration: 60, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud2 />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-[45%] right-0 w-[50rem] h-[25rem] pointer-events-none"
                        animate={{ x: ["-150%", "120vw"] }}
                        transition={{ duration: 64, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud2 />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-[25%] -right-[8%] w-[50rem] h-[25rem] pointer-events-none"
                        animate={{ x: ["-140%", "120vw"] }}
                        transition={{ duration: 70, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud3 />
                    </motion.div>

                    <motion.div
                        className="absolute -bottom-[25%] left-[45%] w-[50rem] h-[25rem] pointer-events-none"
                        animate={{ x: ["-140%", "120vw"] }}
                        transition={{ duration: 76, ease: "linear", repeat: Infinity, repeatType: "loop" }}
                    >
                        <Cloud3 />
                    </motion.div>
                </div>

                <div className="w-full h-1/2 md:h-[37%] bg-accent bg-[url(/images/backgroun-spots.webp)] bg-cover bg-center flex md:flex-row flex-col md:justify-between md:p-[2rem] p-[1rem]">
                    <p className="font-custom font-bold md:text-7xl text-3xl text-white md:tracking-[-0.1rem] tracking-tight md:w-[65%] w-full">
                        Better card
                        <br />
                        for aktiv deals.
                    </p>

                    <div className="md:w-[35%] w-full">
                        <p className="text-white font-custom tracking-tight md:text-base text-sm md:mt-0 mt-[1rem] md:mb-[2.5rem] mb-[1rem]">
                            Order an expense card to spend and manage your
                            <br /> business finance effectively, and get it in 48hrs.
                            <br /> Track your business expenses and set limits for
                            <br /> different needs.
                        </p>

                        <Link href="">
                            <div className="bg-primary rounded-[0.5rem] py-[0.75rem] px-[1rem] flex items-center gap-x-2 hover:bg-accent transition-colors ease-in-out duration-300 md:w-fit justify-center">
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
                viewport={{ once: true, amount: 0.2 }}
                className="w-[90%] h-[32.75rem] md:h-[41rem] rounded-[1rem] overflow-hidden flex flex-col transform-gpu will-change-transform"
            >
                <div className="w-full h-1/2 md:h-[63%] relative">
                    <Image
                        src="/images/you-fit-get-loan-sharply.webp"
                        alt="you-fit-get-loan-sharply"
                        quality={90}
                        fill
                        className="object-cover w-full h-full object-center"
                        sizes="(min-width: 1024px) 1170px, 90vw"
                    />
                </div>

                <div className="w-full h-1/2 md:h-[37%] bg-accent bg-[url(/images/backgroun-spots.webp)] bg-cover bg-center flex md:flex-row flex-col md:justify-between md:p-[2rem] p-[1rem]">
                    <p className="font-custom font-bold md:text-7xl text-3xl text-white md:tracking-[-0.1rem] tracking-tight md:w-[65%] w-full">
                        You fit get
                        <br />
                        loan sharply
                    </p>

                    <div className="md:w-[35%] w-full">
                        <p className="text-white font-custom tracking-tight md:text-base text-sm md:mt-0 mt-[1rem] md:mb-[2.5rem] mb-[1rem]">
                            Access working capital loans to help your business
                            <br /> grow. Easy request process with business friendly
                            <br /> interest rates and repayment tenures.
                        </p>

                        <Link href="">
                            <div className="bg-primary rounded-[0.5rem] py-[0.75rem] px-[1rem] flex items-center gap-x-2 hover:bg-accent transition-colors ease-in-out duration-300 md:w-fit justify-center">
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
