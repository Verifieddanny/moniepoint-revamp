import ATMHand from "@/components/illustrations/atm-hand";
import HandsSectionSynced from "@/components/illustrations/hand-section-synced";
import LinkUp from "@/components/illustrations/link-up";
import MoneyLeft from "@/components/illustrations/money-left";
import MoneyRight from "@/components/illustrations/money-right";
import POSHand from "@/components/illustrations/pos-hand";
import RocketPath from "@/components/illustrations/rocket-path";
import Star from "@/components/illustrations/star";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen max-h-[150vh] flex-col bg-primary relative md:pt-[3rem] ">
      {/* Curved bottom */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -bottom-[28vh] w-[200vw] h-[200vw] bg-primary rounded-full z-0"
      />


      <section className="max-w-[1300px] mx-auto flex flex-col items-center h-fit relative">
        <div className="w-[12rem] h-[2.1rem] mb-[3rem]">
          <Logo className="w-full h-full" />
        </div>
        <p className="font-custom text-white font-bold tracking-[-4%] leading-[106%] text-center text-[8.3125rem] mb-[2.5rem]">
          Simple solutions
          <br /> to power your
          <br />
          business
        </p>

        <p className="text-white font-medium text-base text-center mb-[3rem]">
          Collect payments, access loans and manage operations with a <br />{" "}
          business banking solution that meets all your needs.
        </p>

        <Link href="">
          <div className="bg-button rounded-[0.5rem] py-[0.75rem] px-[1rem] flex items-center gap-x-2 hover:bg-accent transition-colors ease-in-out duration-300">
            <div className="w-[2rem] h-[2rem]">
              <LinkUp className="w-full h-full" />
            </div>
            <p className="text-white font-medium text-base text-center">
              Open an Account
            </p>
          </div>
        </Link>

        <div className="absolute -left-[12%] top-[48%] z-10 w-[16rem] h-[16rem] overflow-hidden">
          <MoneyLeft className="w-full h-full" />
        </div>

        <div className="absolute -right-[18%] top-[50%] z-10 w-[20rem] h-[20rem] overflow-hidden">
          <MoneyRight className="w-full h-full" />
        </div>


        <div className="absolute top-[20%] -left-[6%] w-[2rem] h-[2rem]">
          <Star color="#FFDA46" className="w-full h-full" delay={0.2} />
        </div>

        <div className="absolute top-[33%] -right-[2%] w-[2.5rem] h-[2.5rem]">
          <Star color="#74F0FF" className="w-full h-full" delay={0.6} duration={1.6} />
        </div>

        <div className="absolute -bottom-[20%] -left-[15%] w-[1.5rem] h-[1.5rem]">
          <Star color="#FFDA46" className="w-full h-full" delay={0.2} />
        </div>

        <div className="absolute -bottom-[25%] left-[50%] w-[2.5rem] h-[2.5rem]">
          <Star color="#FFDA46" className="w-full h-full" delay={0.2} />
        </div>

        <div className="absolute -bottom-[50%] -right-[15%] w-[2.2rem] h-[2.2rem]">
          <Star color="#FFDA46" className="w-full h-full" delay={0.6} duration={1.6} />
        </div>

        <div className="absolute -bottom-[110%] left-[40%] w-[2.2rem] h-[2.2rem]">
          <Star color="#FFDA46" className="w-full h-full" delay={0.6} duration={1.6} />
        </div>
      </section>


      <section className="w-full relative ">
        {/* <RocketPath className="absolute top-0 w-[97.5rem] h-[51.6rem]" duration={4} delay={0.2} />
        <div className="w-full flex items-start justify-between relative z-20">
          <POSHand />
          <ATMHand />
        </div> */}
        <HandsSectionSynced />
      </section>
    </main>
  );
}
