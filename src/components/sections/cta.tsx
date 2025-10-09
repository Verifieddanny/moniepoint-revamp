import React from 'react'
import { RotatingFive, RotatingOne, RotatingThree, RotatingTwo } from '../illustrations/rotating-union'
import { generalSans } from '@/app/page'
import Link from 'next/link'
import { AppleStoreIcon, PlayStoreIcon } from '../illustrations/download-icon'

function Next() {
    return (
        <svg width="32" height="23" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.3409 48.612L58.832 24.9987L35.3409 1.38537C35.1288 1.10677 34.8592 0.877006 34.5506 0.711631C34.2419 0.546255 33.9013 0.449132 33.5518 0.426834C33.2023 0.404537 32.8521 0.457588 32.525 0.582393C32.1978 0.707199 31.9012 0.900846 31.6554 1.15023C31.4095 1.3996 31.2201 1.69889 31.1 2.02783C30.9799 2.35677 30.9319 2.70768 30.9591 3.0568C30.9864 3.40591 31.0884 3.7451 31.2582 4.05138C31.4279 4.35766 31.6615 4.62389 31.9431 4.83204L49.5187 22.5543L2.75647 22.5543C2.10817 22.5543 1.48641 22.8118 1.028 23.2702C0.569571 23.7286 0.31203 24.3504 0.31203 24.9987C0.31203 25.647 0.569571 26.2688 1.02799 26.7272C1.48641 27.1856 2.10817 27.4431 2.75647 27.4431L49.5187 27.4431L31.9431 45.1654C31.4861 45.6257 31.2306 46.2487 31.2329 46.8973C31.2352 47.546 31.4951 48.1672 31.9554 48.6243C32.4157 49.0813 33.0387 49.3368 33.6873 49.3345C34.336 49.3322 34.9572 49.0723 35.4143 48.612L35.3409 48.612Z" fill="#002C88" />
        </svg>

    )
}

function Cta() {
    return (
        <section className="relative w-full overflow-hidden bg-[#2191FF] md:py-[5rem] py-[2.5rem]">
            {/* stacked, centered background rings */}
            <div className="pointer-events-none select-none absolute inset-0">
                {/* anchor at center */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* sizes use vmin so they scale with the smaller viewport side */}
                    <RotatingThree className="block w-[100vmin] md:w-[200vmin] h-auto animate-spin [animation-duration:70s] [animation-timing-function:linear]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RotatingTwo className="block w-[87.5vmin] md:w-[175vmin] h-auto animate-spin [animation-duration:55s] [animation-timing-function:linear]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RotatingOne className="block w-[67.5vmin]  md:w-[135vmin]  h-auto animate-spin [animation-duration:45s] [animation-timing-function:linear]" />
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <RotatingFive className="block w-[37.5vmin]  md:w-[75vmin]  h-auto animate-spin [animation-duration:35s] [animation-timing-function:linear]" />
                </div>
            </div>

            {/* content on top */}
            <div className="relative z-10 flex flex-col items-center">
                <p className='text-center font-bold md:text-7xl text-xl text-white mb-[5rem]'>Enjoy a business solution<br /> designed to help you grow.</p>

                <Link href="https://moniepoint.sng.link/Dcbc3/df2f?_smtype=3" className='md:flex items-center gap-x-1.5 px-4 py-6 rounded-[1rem] bg-[#FFDA46] hidden mb-[3rem]'>
                    <p className={`font-medium ${generalSans.className}`}>Open an Account</p>
                    <Next />
                </Link>

                <div className='w-full relative flex justify-center gap-x-[2rem] items-center'>


                    <Link rel="noopener" target="_blank" href="https://apps.apple.com/us/app/moniepoint-personal-banking/id6452756675" className="ios-link v-popper--has-tooltip bg-black p-4 rounded-[0.7rem]">
                        <div style={{ height: "24px", width: "96px" }}>
                            <AppleStoreIcon />
                        </div>
                    </Link>

                    <Link rel="noopener" target="_blank" href="https://play.google.com/store/apps/details?id=com.moniepoint.personal" className="bg-black p-4 rounded-[0.7rem]" aria-label="Download on Google Play">
                        <div style={{ height: "24px", width: "105px" }}>
                            <PlayStoreIcon />

                        </div>
                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Cta