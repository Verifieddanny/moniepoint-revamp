"use client"

import { useEffect, useState } from "react";

function useIsMobile(breakpoint = 768) {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia(`(max-width:${breakpoint - 1}px)`);
        const set = () => setIsMobile(mql.matches);
        set();
        mql.addEventListener?.("change", set);
        return () => mql.removeEventListener?.("change", set);
    }, [breakpoint]);
    return isMobile;
}




export {useIsMobile}