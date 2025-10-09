import { generalSans } from '@/app/page'
import React from 'react'
import Timeline from '../ui/timeline'

function GettingStarted() {
    return (
        <section className="w-screen relative flex flex-col items-center md:py-[5rem] py-[2.5rem]">
            <p className="text-primary font-bold md:text-7xl text-4xl text-center md:tracking-[-0.25rem] tracking-tight md:mb-[2.5rem] mb-[1rem]">
                How to get started
            </p>
            <p className={`${generalSans.className} text-grays font-medium text-center md:mb-[5rem] mb-[2.5rem]`}>
                Your journey with Moniepoint starts here!<br /> Just follow these easy steps
            </p>

            <Timeline />
        </section>
    )
}

export default GettingStarted