import React from 'react'
import Scribble from '../illustrations/scribble'

function Testimonial() {
  return (
    <main className="w-screen min-h-screen md:py-[5rem] py-[2.5rem] flex flex-col items-center max-w-[1300px] mx-auto md:mt-[4rem] mt-[9rem]">

        <div className='w-fit relative mb-[4rem]'>
            <p className='text-primary font-bold md:text-7xl text-4xl text-center md:tracking-[-0.25rem] tracking-tight'>Don&apos;t just take our<br/> word for it.</p>

            <Scribble color='#FFDA46' className='absolute md:left-[7rem] left-[3.7rem] -bottom-[0.8rem] md:w-[11rem] w-[6rem] h-[2rem]' />
        </div>
    </main>
  )
}

export default Testimonial