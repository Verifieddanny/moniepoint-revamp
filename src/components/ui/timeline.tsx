"use client";

import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";
import { generalSans } from "@/app/page";

/* ---------------------------------------
   Data
----------------------------------------*/
type Step = {
    id: number;
    color: string;
    title: string;
    body: string;
    icon: React.ReactNode;
};

const STEPS: Step[] = [
    {
        id: 1,
        color: "#0357EE",
        title: "Fill in your details and verify your phone number",
        body:
            "Provide your email and phone number then verify your phone number with an OTP.",
        icon: <HashtagIcon className="w-[3rem] h-[3rem]" />
    },
    {
        id: 2,
        color: "#A36DFF",
        title: "Get verified with your BVN and KYC details",
        body:
            "Select username and password. Provide your BVN and KYC details, complete face and ID verification, then set up a PIN.",
        icon: <VerifySelfIcon className="w-[3rem] h-[3rem]" />

    },
    {
        id: 3,
        color: "#FA1E1A",
        title: "Fund your account to start making transfers",
        body: "Top up to start making transfers.",
        icon: <TransactIcon className="w-[3rem] h-[3rem]" />

    },
    {
        id: 4,
        color: "#F79E1B",
        title: "Access your dashboard and apply for an expense card",
        body:
            "Log in to your business dashboard and click the Card menu to request an expense card.",
        icon: <WalletIcon className="w-[3rem] h-[3rem]" />

    },
];

/* ---------------------------------------
   Check icon
----------------------------------------*/
function CheckIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 90 69" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[1.5rem] md:h-[1.5rem] w-[1rem] h-[1rem]">
            <path d="M10.875 36.2383L33.625 58.9883L79.125 10.2383" stroke="white" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}

/* ---------------------------------------
   Other icon
----------------------------------------*/
function HashtagIcon({ className }: { className?: string }) {
    return (
        <svg width="138" height="124" viewBox="0 0 138 124" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M23 123.333L30.6667 92.666H0L3.83333 77.3327H34.5L42.1667 46.666H11.5L15.3333 31.3327H46L53.6667 0.666016H69L61.3333 31.3327H92L99.6667 0.666016H115L107.333 31.3327H138L134.167 46.666H103.5L95.8333 77.3327H126.5L122.667 92.666H92L84.3333 123.333H69L76.6667 92.666H46L38.3333 123.333H23ZM49.8333 77.3327H80.5L88.1667 46.666H57.5L49.8333 77.3327Z" fill="white" />
        </svg>

    )
}

function VerifySelfIcon({ className }: { className?: string }) {
    return (
        <svg width="158" height="158" viewBox="0 0 158 158" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M102.001 151.833C112.696 151.833 118.04 151.833 122.448 150.775C129.323 149.125 135.608 145.605 140.608 140.606C145.607 135.606 149.127 129.321 150.777 122.446C151.835 118.038 151.835 112.694 151.835 101.999M56.0013 151.833C45.3063 151.833 39.9626 151.833 35.5543 150.775C28.6792 149.125 22.3944 145.605 17.3949 140.606C12.3955 135.606 8.87608 129.321 7.22597 122.446C6.16797 118.038 6.16797 112.694 6.16797 101.999M56.0013 6.16602C45.3063 6.16602 39.9626 6.16602 35.5543 7.22402C28.6792 8.87412 22.3944 12.3935 17.3949 17.393C12.3955 22.3925 8.87608 28.6773 7.22597 35.5524C6.16797 39.9607 6.16797 45.312 6.16797 55.9994M102.001 6.16602C112.696 6.16602 118.04 6.16602 122.448 7.22402C129.323 8.87412 135.608 12.3935 140.608 17.393C145.607 22.3925 149.127 28.6773 150.777 35.5524C151.835 39.9607 151.835 45.312 151.835 55.9994M102.001 59.8327C102.001 53.7327 99.5781 47.8826 95.2648 43.5692C90.9514 39.2559 85.1013 36.8327 79.0013 36.8327C72.9013 36.8327 67.0512 39.2559 62.7378 43.5692C58.4245 47.8826 56.0013 53.7327 56.0013 59.8327C56.0013 65.9327 58.4245 71.7828 62.7378 76.0961C67.0512 80.4095 72.9013 82.8327 79.0013 82.8327C85.1013 82.8327 90.9514 80.4095 95.2648 76.0961C99.5781 71.7828 102.001 65.9327 102.001 59.8327Z" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M117.335 121.165C117.335 110.999 113.296 101.249 106.107 94.0596C98.9182 86.8707 89.1679 82.832 79.0013 82.832C68.8347 82.832 59.0844 86.8707 51.8955 94.0596C44.7066 101.249 40.668 110.999 40.668 121.165" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

function TransactIcon({ className }: { className?: string }) {
    return (
        <svg width="140" height="132" viewBox="0 0 140 132" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M40.9214 64.1372C41.6342 64.8492 42.1997 65.6948 42.5855 66.6255C42.9713 67.5562 43.1699 68.5538 43.1699 69.5614C43.1699 70.5689 42.9713 71.5665 42.5855 72.4972C42.1997 73.428 41.6342 74.2735 40.9214 74.9855L26.9144 89.0002H100.668C102.701 89.0002 104.651 89.8079 106.089 91.2457C107.527 92.6835 108.334 94.6335 108.334 96.6669C108.334 98.7002 107.527 100.65 106.089 102.088C104.651 103.526 102.701 104.334 100.668 104.334H26.9144L40.9291 118.348C41.6414 119.06 42.2065 119.905 42.5922 120.835C42.9779 121.766 43.1766 122.763 43.177 123.77C43.1773 124.777 42.9793 125.774 42.5943 126.704C42.2093 127.635 41.6447 128.48 40.9329 129.193C40.2211 129.905 39.376 130.47 38.4457 130.856C37.5155 131.242 36.5185 131.44 35.5115 131.441C34.5044 131.441 33.5072 131.243 32.5767 130.858C31.6463 130.473 30.8007 129.908 30.0884 129.197L2.97907 102.087C1.54179 100.649 0.734375 98.6998 0.734375 96.6669C0.734375 94.6339 1.54179 92.6842 2.97907 91.2465L30.0884 64.1372C31.5261 62.6999 33.4758 61.8925 35.5087 61.8925C37.5417 61.8925 39.4914 62.6999 40.9291 64.1372H40.9214ZM99.0807 2.80386C100.401 1.48384 102.157 0.69087 104.021 0.573714C105.884 0.456558 107.726 1.02327 109.201 2.16753L109.921 2.80386L137.031 29.9132C138.351 31.2333 139.144 32.9898 139.261 34.853C139.378 36.7162 138.811 38.5581 137.667 40.0332L137.031 40.7539L109.921 67.8555C108.542 69.2305 106.69 70.0288 104.743 70.0883C102.797 70.1477 100.9 69.4639 99.4389 68.1756C97.9779 66.8874 97.0621 65.0913 96.8773 63.1522C96.6926 61.2132 97.2529 59.2765 98.4444 57.7355L99.0807 57.0149L113.088 43.0002H39.3344C37.3803 42.998 35.5008 42.2498 34.0799 40.9084C32.659 39.5669 31.8039 37.7336 31.6894 35.7828C31.5749 33.8321 32.2096 31.9113 33.4638 30.4128C34.718 28.9143 36.497 27.9513 38.4374 27.7205L39.3344 27.6669H113.095L99.0807 13.6369C97.6435 12.1992 96.836 10.2495 96.836 8.21653C96.836 6.1836 97.6435 4.24158 99.0807 2.80386Z" fill="white" />
        </svg>

    )
}

function WalletIcon({ className }: { className?: string }) {
    return (
        <svg width="166" height="136" viewBox="0 0 166 136" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M6.33203 67.9993C6.33203 39.0883 6.33203 24.629 15.3174 15.6513C24.3027 6.67368 38.7544 6.66602 67.6654 6.66602H98.332C127.243 6.66602 141.702 6.66601 150.68 15.6513C159.658 24.6367 159.665 39.0883 159.665 67.9993C159.665 96.9103 159.665 111.37 150.68 120.347C141.695 129.325 127.243 129.333 98.332 129.333H67.6654C38.7544 129.333 24.295 129.333 15.3174 120.347C6.3397 111.362 6.33203 96.9103 6.33203 67.9993Z" stroke="white" strokeWidth="12" />
            <path d="M67.6654 98.666H36.9987M98.332 98.666H86.832M6.33203 52.666H159.665" stroke="white" strokeWidth="12" strokeLinecap="round" />
        </svg>

    )
}

/* ---------------------------------------
   One step row
----------------------------------------*/
function TimelineStep({ step, index }: { step: Step; index: number }) {
    const ref = useRef<HTMLDivElement | null>(null);

    // progress for THIS row only, tune the band with the offsets
    const { scrollYProgress: rowP } = useScroll({
        target: ref,
        offset: ["start 96%", "start 60%"],
    });



    // smooth, reversible styling
    const ringScale = useTransform(rowP, [0, 0.5, 1], [0.9, 0.95, 1]);
    const ringBg = useTransform(rowP, [0, 0.5, 1], ["#ffffff", "#ffffff", "#00C74E"]);
    const ringBorder = useTransform(rowP, [0, 0.5, 1], ["#E5E7EB", "#E5E7EB", "#00C74E"]);
    const checkOpacity = useTransform(rowP, [0.6, 0.8], [0, 1]);

    return (
        <div ref={ref} className="relative grid grid-cols-[72px_1fr] gap-2 md:gap-6">
            <div className="relative">
                {/* exact same size/positioning as yours */}
                <motion.div
                    className=" absolute left-1/2 -translate-x-1/2 w-8 h-8 md:w-[4.2rem] md:h-[4.2rem] md:mt-[1rem] mt-[3.5rem] rounded-full border-[4px]"
                    style={{ scale: ringScale, backgroundColor: ringBg, borderColor: ringBorder }}
                    aria-hidden="true"
                >
                    <motion.div
                        className="w-full h-full grid place-items-center"
                        style={{ opacity: checkOpacity }}
                    >
                        <CheckIcon />
                    </motion.div>
                </motion.div>
            </div>

            {/* your card, unchanged */}
            <motion.div
                className="rounded-xl bg-[#F4F4F4] p-5 md:p-6"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5, once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 * index }}
            >
                <div className="flex items-start gap-4">
                    <div className="w-20 h-20 rounded-2xl flex-one items-center justify-center md:flex hidden" style={{ backgroundColor: step.color }} aria-hidden="true">
                        {step.icon}
                    </div>
                    <div>
                        <p className="text-[#454545] font-bold md:text-xl text-base tracking-tight">{step.title}</p>
                        <p className={`text-[#696969] mt-2 md:text-sm text-xs ${generalSans.className}`}>{step.body}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}


/* ---------------------------------------
   Section with animated progress rail
----------------------------------------*/
export default function Timeline() {
    const sectionRef = useRef<HTMLElement | null>(null);

    // Scroll progress across the section, 0 at top, 1 at bottom
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start 70%", "end 60%"], });



   // We will scale the green line from the top
   const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);


    return (
        <section
            ref={sectionRef}
            className="relative max-w-[960px] mx-auto px-4 md:px-6 py-10 md:py-16"
        >

            <div className="relative">
                {/* Static rail on md+ */}
                <div
                    className="absolute left-[28px] top-[2rem] bottom-0"
                    aria-hidden="true"
                >
                    <div className="absolute left-[28px] top-[2rem] bottom-0" aria-hidden="true">
                        {/* gray track, unchanged look but full path height = 90% */}
                        <div className="absolute left-1/2 md:-translate-x-[1.2rem] -translate-x-[1.3rem] w-[4px] h-[90%] bg-[#E5E7EB] rounded-full" />
                        {/* green progress, same height as track, grows from top */}
                        <motion.div
                            className="absolute left-1/2 md:-translate-x-[1.2rem] -translate-x-[1.3rem] w-[4px] h-[90%] bg-[#00C74E] rounded-full origin-top"
                            style={{ scaleY }}
                        />
                    </div>


                </div>

                <div className="space-y-6 md:space-y-7">
                    {STEPS.map((s, i) => (
                        <TimelineStep key={s.id} step={s} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
