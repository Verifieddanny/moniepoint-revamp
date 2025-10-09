import Link from 'next/link'
import React from 'react'
import { AppleStoreIcon, PlayStoreIcon } from '../illustrations/download-icon'

function DownloadApp() {
    return (
        <section className='w-full relative flex justify-center gap-x-[2rem] items-center md:py-[2.5rem] py-[1.25rem]'>


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

        </section>
    )
}

export default DownloadApp