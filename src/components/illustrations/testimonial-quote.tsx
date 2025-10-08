import Image from 'next/image'
import React from 'react'

function TestimonialQuote({className}:{className?: string}) {
  return (
    <div className={`md:w-[14rem] md:h-[20rem] w-[4.67rem] h-[6.67rem] ${className}`}>
        <Image src="/images/quotes.webp" alt='quote' fill quality={90} className='w-full h-full object-contain transition-all duration-300 ease-in-out' priority />
    </div>
  )
}

export default TestimonialQuote