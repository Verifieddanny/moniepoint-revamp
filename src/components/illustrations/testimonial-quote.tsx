import Image from 'next/image'
import React from 'react'

function TestimonialQuote() {
  return (
    <div className='w-[24rem] h-[30rem]'>
        <Image src="/images/quotes.webp" alt='quote' fill quality={90} className='w-full h-full object-contain' />
    </div>
  )
}

export default TestimonialQuote