"use client";

import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  animate,
  type MotionValue,
} from "motion/react";
import { easeInOut } from "motion/react";

type Props = {
  className?: string;
  duration?: number;
  delay?: number;
  progressMV?: MotionValue<number>; // external clock
};

export default function RocketPath({
  className,
  duration = 3.5,
  delay = 0,
  progressMV,
}: Props) {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [len, setLen] = useState(0);

  // use external progress if provided, else create internal
  const internalProgress = useMotionValue(0);
  const progress = progressMV ?? internalProgress;

  // rocket pose
  const [pose, setPose] = useState({ x: 0, y: 0, angle: 0 });
  const poseFrom = useMemo(() => {
    return (p: number) => {
      if (!pathRef.current || len === 0) return { x: 0, y: 0, angle: 0 };
      const d = len * p;
      const p1 = pathRef.current.getPointAtLength(d);
      const p2 = pathRef.current.getPointAtLength(Math.min(d + 1, len));
      const angle = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
      return { x: p1.x, y: p1.y, angle };
    };
  }, [len]);

  useMotionValueEvent(progress, "change", (p) => setPose(poseFrom(p)));

  useLayoutEffect(() => {
    if (!pathRef.current) return;
    setLen(pathRef.current.getTotalLength());

    if (!progressMV) {
      const controls = animate(progress, 1, {
        duration,
        delay,
        ease: easeInOut,
      });
      return () => controls.stop();
    }
  }, [delay, duration, progress, progressMV]);

  // choose props for the path based on control mode
  const pathProps = progressMV
    ? {
        // external progress, bind via style
        style: { pathLength: progress as MotionValue<number> },
        initial: { pathLength: 0 },
        transition: { duration, delay, ease: easeInOut },
      }
    : {
        // internal animation
        initial: { pathLength: 0 },
        animate: { pathLength: 1 },
        transition: { duration, delay, ease: easeInOut },
      };

  return (
    <svg
      width="3121"
      height="1651"
      viewBox="0 0 3121 1651"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <motion.path
        ref={pathRef}
        d="M19.2626 812.502C127.301 1113.65 442.442 1670.62 838.702 1489.3C1234.96 1307.98 1403.57 387.925 1001.04 481.252C598.521 574.579 1028.78 1278.16 1379.43 1231.23C1817.75 1172.57 1534.41 664.562 1918.61 446.525C2225.97 272.095 2717.18 222.625 2945.47 246.398"
        stroke="#FFDA46"
        strokeWidth="24"
        strokeLinecap="round"
        {...pathProps}
      />

      {/* Rocket rides along the path */}
      <g transform={`translate(${pose.x}, ${pose.y}) rotate(${pose.angle})`}>
        {/* rebase and scale so the nose sits on the path */}
        <g transform="translate(-2350, -230) scale(0.8)">
          <path d="M2969.71 247.825L3001.77 213.891L3003.86 213.097L3111.58 298.97L3119.27 305.646L3119.07 306.09L2999.33 236.586L2969.71 247.825Z" fill="#6FD400" />
          <path d="M3001.5 214.172L3007.32 183.231L3120.44 306.438L3001.5 214.172Z" fill="#BBFF70" />
          <path d="M2998.28 260.639L2969.72 247.866L2999.53 236.371L3001.72 238.7L2998.28 260.639Z" fill="#468600" />
          <path d="M3120.44 306.437L2999.38 236.426L2988.03 299.534L3120.44 306.437Z" fill="#BBFF70" />
        </g>
      </g>
    </svg>
  );
}
