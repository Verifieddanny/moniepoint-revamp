import localFont from "next/font/local";

import Features from "@/components/sections/features-section";
import FreeBank from "@/components/sections/free-bank-account-section";
import Hero from "@/components/sections/hero-sections";

export const generalSans = localFont({
  src: "../../public/fonts/GeneralSans_Complete/Fonts/WEB/fonts/GeneralSans-Variable.woff2",
  variable: "--font-general-sans",
  weight: "100 900",
});


export default function Home() {
  return (
    <>
    <Hero />
    <FreeBank />
    <Features />
    </>
  );
}
