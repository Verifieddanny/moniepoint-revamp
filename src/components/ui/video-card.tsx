"use client"

import Image from 'next/image';
import React, { useCallback, useState } from 'react'

function VideoCard({
    videoId,
    poster,
    title,
    color,
    playbutton
}: {
    videoId: string;
    poster: string;
    title: string;
    color: string;
    playbutton: string
}) {
    const [playing, setPlaying] = useState(false);

    const start = useCallback(() => setPlaying(true), []);

    return (
        <div className="relative w-full">
            {/* Keep a fixed aspect for the container so layout does not jump */}
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                {!playing ? (
                    <button
                        type="button"
                        onClick={start}
                        className="group absolute inset-0 w-full h-full text-left cursor-pointer"
                        aria-label={`Play video, ${title}`}
                    >
                        {/* Poster image */}
                        <Image
                            src={poster}
                            alt=""
                            fill
                            quality={90}
                            priority
                            sizes="(min-width: 1024px) 1040px, 90vw"
                            className="object-cover w-full h-full transition-all duration-300 ease-in-out"
                        />

                        {/* Dark scrim for contrast */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-200" />

                        {/* Centered play button */}
                        <span className="absolute inset-0 flex items-center justify-center">
                            <span
                                className="inline-flex items-center justify-center rounded-full w-16 h-16 md:w-20 md:h-20 shadow-md transition-all duration-200 group-hover:scale-[1.05]"
                                style={{
                                    backgroundColor: color
                                }}
                            >
                                <svg
                                    width="84"
                                    height="84"
                                    viewBox="0 0 28 28"
                                    aria-hidden="true"
                                >
                                    <path d="M9 6L22 14L9 22V6Z" fill={playbutton} />
                                </svg>
                            </span>
                        </span>
                    </button>
                ) : (
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                        title={title}
                        allow="accelerometer, autoplay, clipboard-write, encrypted-media, gyroscope, picture-in-picture, web-share"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    );
}

export default VideoCard