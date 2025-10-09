import React from 'react'

function HeroBackground({ className }: { className?: string }) {
    return (
        <svg width="4886" height="4917" viewBox="0 0 4886 4917" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 2449.55C2.87825 1309.67 239.215 546.125 385.367 387.53C534.396 220.305 1307.69 0.00022854 2443 0C3578.31 0 4351.92 220.305 4500.63 387.53C4649.66 546.125 4886 1309.99 4886 2449.55V2467.13C4883.12 3606.7 4646.78 4370.56 4500.63 4529.15C4351.92 4696.7 3578.31 4917 2443 4917C1307.69 4917 534.077 4696.7 385.367 4529.15C239.215 4370.56 2.87841 3603.82 0 2467.13L0 2449.55Z" fill="#001335" />
        </svg>

    )
}

export default HeroBackground