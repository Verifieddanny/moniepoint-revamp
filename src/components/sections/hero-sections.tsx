// import { General_Sans } from "next/font/google";
// const generalSans = General_Sans({ subsets: ["latin"], weight: ["400","500","700"] });

import { generalSans } from "@/app/page";
import HandsSectionSynced from "@/components/illustrations/hand-section-synced";
import LinkUp from "@/components/illustrations/link-up";
import MoneyLeft from "@/components/illustrations/money-left";
import MoneyRight from "@/components/illustrations/money-right";
import Star from "@/components/illustrations/star";
import Logo from "@/components/logo";
import Link from "next/link";

function Hero() {
    return (
        <main className="flex md:min-h-screen flex-col relative pt-12 md:pt-[3rem] w-full">
            {/* Curved bottom background */}
            <div className="absolute w-[100vw] h-[20dvh] bg-primary -z-10 md:hidden left-0 top-0"></div>
            <div className=" absolute left-1/2 -translate-x-1/2 md:bottom-[8vh] -bottom-[8vh] md:w-[200vw] md:h-[200vw] w-[250vw] h-[250vh] bg-primary rounded-full z-0" />

            <section className="w-full max-w-[90%] md:max-w-[1300px] mx-auto flex flex-col items-center text-center relative">
                {/* Logo */}
                <div className="w-36 h-8 mb-8 md:w-48 md:h-10">
                    <Logo className="w-full h-full" />
                </div>

                {/* Headline */}
                <p className="text-white font-bold md:tracking-[-0.5rem] tracking-tight leading-[106%] text-4xl md:text-7xl lg:text-[8.3125rem] md:mb-10 mb-[3.5rem]">
                    Simple solutions
                    <br /> to power your
                    <br /> business
                </p>

                {/* Subtitle */}
                <p className={`text-white font-medium text-xs md:text-base mb-12 tracking-tight ${generalSans.className}`}>
                    Collect payments, access loans and manage <br className="block md:hidden" /> operations with a <br className="hidden md:block" />
                    business banking solution<br className="block md:hidden" /> that meets all your needs.
                </p>


                <Link href="https://moniepoint.sng.link/Dcbc3/df2f?_smtype=3">
                    <div className="bg-button md:rounded-[0.5rem] rounded-full py-[0.75rem] px-[1rem] flex items-center gap-x-2 hover:bg-accent transition-colors ease-in-out duration-300">
                        <div className="md:w-[2rem] md:h-[2rem] w-[1rem] h-[1rem] md:block hidden">
                            <LinkUp className="w-full h-full" />
                        </div>
                        <p className={`text-white font-medium text-base text-center ${generalSans.className}`}>
                            Open an Account
                        </p>
                    </div>
                </Link>

                <MoneyLeft />

                <MoneyRight />


                <div className="absolute top-[20%] min-[1300px]:-left-[6%] md:left-[6%] left-[1%] md:w-[2rem] md:h-[2rem] w-[0.5rem] h-[0.5rem]">
                    <Star color="#FFDA46" className="w-full h-full" delay={0.2} />
                </div>

                <div className="absolute top-[33%] min-[1300px]:-right-[2%] right-[2%] md:w-[2.5rem] md:h-[2.5rem] w-[0.75rem] h-[0.75rem]">
                    <Star color="#74F0FF" className="w-full h-full" delay={0.6} duration={1.6} />
                </div>

                <div className="absolute -bottom-[20%] min-[1300px]:-left-[15%] left-[3%] md:w-[1.5rem] md:h-[1.5rem] w-[0.45rem] h-[0.45rem]">
                    <Star color="#FFDA46" className="w-full h-full" delay={0.2} />
                </div>

                <div className="absolute -bottom-[25%] left-[50%] md:w-[2.5rem] md:h-[2.5rem] w-[0.75rem] h-[0.75rem]">
                    <Star color="#FFDA46" className="w-full h-full" delay={0.2} />
                </div>

                <div className="absolute -bottom-[50%] min-[1300px]:-right-[15%] right-[3%] md:w-[2.2rem] md:h-[2.2rem] w-[0.6rem] h-[0.6rem]">
                    <Star color="#FFDA46" className="w-full h-full" delay={0.6} duration={1.6} />
                </div>

                <div className="absolute md:-bottom-[110%] -bottom-[80%] left-[40%] md:w-[2.2rem] md:h-[2.2rem] w-[0.6rem] h-[0.6rem]">
                    <Star color="#FFDA46" className="w-full h-full" delay={0.6} duration={1.6} />
                </div>
            </section>


            <section className="w-full relative ">
                <HandsSectionSynced />
            </section>
        </main>
    )
}

export default Hero