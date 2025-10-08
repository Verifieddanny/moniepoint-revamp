import React from 'react'

function Scribble({ color, className }: { color: string, className?: string }) {
    return (
        <svg width="610" height="71" viewBox="0 0 610 71" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M15.5 51.7081C84.5 51.7081 74.5 0.208109 122.5 19.2081C170.5 38.2081 151.5 65.2082 205.5 51.7081C259.5 38.208 294.5 19.2081 326.5 19.2081C358.5 19.2081 388.5 51.7081 420.5 51.7081C446.1 51.7081 493.833 30.0414 514.5 19.2081C534.167 21.0414 577.8 27.4079 595 38.208" stroke={color} strokeWidth="30" strokeLinecap="round" />
        </svg>

    )
}

export default Scribble