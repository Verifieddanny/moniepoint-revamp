import React from 'react'

function Navigation({ className, onClick }: { className?: string, onClick?: () => void }) {
    return (
        <svg width="116" height="115" viewBox="0 0 116 115" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
            <path d="M58.2112 0C85.1028 0.0677443 103.116 5.63032 106.858 9.07023C110.803 12.5779 116 30.7785 116 57.5C116 84.2214 110.803 102.43 106.858 105.93C103.116 109.437 85.0952 115 58.2112 115H57.7963C30.9122 114.932 12.8914 109.37 9.14993 105.93C5.19728 102.43 0 84.2214 0 57.5C5.39384e-06 30.7786 5.19728 12.5704 9.14993 9.07023C12.8914 5.63032 30.9801 0.067748 57.7963 0L58.2112 0Z" fill="#E8E7E7" />
            <path d="M70 35L52.0591 52.5509C49.2741 55.2753 49.2495 59.7495 52.0044 62.5044L70 80.5" stroke="#989696" strokeWidth="11" strokeLinecap="round" />
        </svg>


    )
}

export default Navigation