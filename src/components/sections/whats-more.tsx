"use client";

import { generalSans } from "@/app/page";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

/* per card component, now accepts delayOffset */
function WhatsMoreCard({
  bg,
  title,
  desc,
  imgSrc,
  imgWrapperClass = "",
  delayOffset = 0,
  trigger = false, // parent in view
  cardRef
}: {
  bg: string;
  title: React.ReactNode;
  desc: React.ReactNode;
  imgSrc: string;
  imgWrapperClass?: string;
  delayOffset?: number;
  trigger?: boolean;
  cardRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <motion.div
      ref={cardRef}
      className="w-[18.92rem] h-[18.94rem] rounded-[1rem] relative overflow-hidden py-[1rem] px-[1.5rem]"
      style={{ backgroundColor: bg }}
      initial={{ scale: 0.92, opacity: 0 }}
      animate={trigger ? { scale: 1, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 320, damping: 26, mass: 0.9, delay: delayOffset }}
    >
      <motion.p
        className="font-bold text-[1.5rem] leading-6 tracking-[-0.02rem] mb-[1rem]"
        initial={{ opacity: 0, y: 6, filter: "blur(8px)" }}
        animate={trigger ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.45, ease: "easeOut", delay: delayOffset + 0.12 }}
      >
        {title}
      </motion.p>

      <motion.p
        className={`${generalSans.className} font-medium text-primary leading-4`}
        initial={{ opacity: 0, y: 8, filter: "blur(10px)" }}
        animate={trigger ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.5, ease: "easeOut", delay: delayOffset + 0.22 }}
      >
        {desc}
      </motion.p>

      <motion.div
        className={`absolute ${imgWrapperClass}`}
        initial={{ y: 60, opacity: 0 }}
        animate={trigger ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 420, damping: 28, delay: delayOffset + 0.28 }}
      >
        <Image
          src={imgSrc}
          alt=""
          fill
          quality={90}
          className="w-full h-full object-contain"
          priority
        />
      </motion.div>
    </motion.div>
  );
}

export default function WhatsMore() {
  const firstCard = useRef<HTMLDivElement | null>(null);
  const secondCard = useRef<HTMLDivElement | null>(null);
  const thirdCard = useRef<HTMLDivElement | null>(null);

  const inView = useInView(firstCard, { once: true, amount: 0.35 });
  const inTwoView = useInView(secondCard, { once: true, amount: 0.35 });
  const inThreeView = useInView(thirdCard, { once: true, amount: 0.35 });


  const STEP = 0.25; // stagger gap between cards

  return (
    <section className="w-screen relative flex flex-col items-center md:py-[6rem] py-[3rem]">
      <p className="text-primary font-bold md:text-7xl text-4xl text-center md:tracking-[-0.25rem] tracking-tight md:mb-[2.5rem] mb-[1rem]">
        What&apos;s more?
      </p>
      <p className={`${generalSans.className} text-grays font-medium text-center md:mb-[5rem] mb-[2.5rem]`}>
        Explore more ways to take your business
        <br /> to the next level.
      </p>

      <div className="w-full flex md:flex-row flex-col justify-center items-center md:gap-x-[2rem] md:gap-y-0 gap-y-[1rem]">
        <WhatsMoreCard
          cardRef={firstCard}
          bg="#FFEA84"
          title={<span className="text-[#0357EE]">Manage Multiple<br />Businesses</span>}
          desc={<>Explore more ways to take your<br />business to the next level.</>}
          imgSrc="/images/manage-multiple-businesses.webp"
          imgWrapperClass="w-[15.5rem] h-[17.3rem] -bottom-[35%] right-0"
          delayOffset={0 * STEP}
          trigger={inView}
        />

        <WhatsMoreCard
          cardRef={secondCard}
          bg="#CEF2FE"
          title={<span className="text-[#0357EE]">Business<br />Performance</span>}
          desc={<>Keep your finger on the<br />pulse of your business</>}
          imgSrc="/images/business-performance.webp"
          imgWrapperClass="w-[15.5rem] h-[17.3rem] -bottom-[35%] -right-[18%]"
          delayOffset={1 * STEP}
          trigger={inTwoView}
        />

        <WhatsMoreCard
          cardRef={thirdCard}
          bg="#59D9FE"
          title={<span className="text-primary">Easy Help</span>}
          desc={<>Quick and accessible support<br />whenever you need it</>}
          imgSrc="/images/easy-help.webp"
          imgWrapperClass="w-[8.27rem] h-[12.6rem] bottom-0 right-0"
          delayOffset={2 * STEP}
          trigger={inThreeView}
        />
      </div>
    </section>
  );
}
