import Image from "next/image"

function Cloud({className}: {className?: string}) {
  return (
    <Image src="/images/cloud.webp" alt="cloud-1" fill quality={90} className={className} />
  )
}


export {Cloud}