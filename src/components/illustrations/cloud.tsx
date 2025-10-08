import Image from "next/image"

function Cloud1({className}: {className?: string}) {
  return (
    <Image src="/images/cloud1.webp" alt="cloud-1" fill quality={90} className={className} />
  )
}

function Cloud2({className}: {className?: string}) {
  return (
    <Image src="/images/cloud2.webp" alt="cloud-2" fill quality={90} className={className} />
  )
}

function Cloud3({className}: {className?: string}) {
  return (
    <Image src="/images/cloud3.webp" alt="cloud-3" fill quality={90} className={className} />
  )
}

export {Cloud1, Cloud2, Cloud3}