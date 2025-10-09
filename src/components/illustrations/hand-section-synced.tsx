"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { easeInOut } from "motion";
// import RocketPath from "@/components/illustrations/rocket-path"; 
import POSHand from "@/components/illustrations/pos-hand";
import ATMHand from "@/components/illustrations/atm-hand";

export default function HandsSectionSynced() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.2, once: true }); 

  // one clock for the whole scene
  const progress = useMotionValue(0);

  useEffect(() => {
  let controls: ReturnType<typeof animate> | undefined;
  if (inView) {
    controls = animate(progress, 1, { duration: 4.5, ease: easeInOut});
  } else {
    progress.set(0);
  }
  return () => controls?.stop();
}, [inView, progress]);

  // POS slides from left while progress goes 0.00 to 0.35
  const posX = useTransform(progress, [0.0, 0.25, 0.35], [-80, -80, 0]);
  const posOpacity = useTransform(progress, [0.0, 0.25, 0.35], [0, 0, 1]);

  // ATM starts later, from right, 0.10 to 0.50
  const atmX = useTransform(progress, [0.10, 0.35, 0.50], [80, 80, 0]);
  const atmOpacity = useTransform(progress, [0.10, 0.35, 0.50], [0, 0, 1]);

  const perf = "transform-gpu will-change-transform";

  return (
    <section ref={ref} className="w-full relative overflow-x-hidden md:mt-0 mt-[15vh]">
      {/* Rocket path reads the same shared progress */}
      {/* <RocketPath
        className="absolute top-0 w-[100vw] md:h-[51.6rem] h-[14.82rem]"
        progressMV={progress}
      /> */}

      <div className="w-full flex items-start justify-between relative z-20">
        <motion.div style={{ x: posX, opacity: posOpacity }} className={`md:mt-[8rem] mt-[2rem] ${perf}`}>
          <POSHand />
        </motion.div>

        <motion.div style={{ x: atmX, opacity: atmOpacity }} className={`md:mt-[19rem] mt-[4rem] ${perf}`}>
          <ATMHand />
        </motion.div>
      </div>
    </section>
  );
}
