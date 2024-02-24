import Image from "next/image";

import interstellarLogo from '@/public/interstellar-logo.svg'

export default function Logo({
  className,
  logoSize = 40,
  showText = true
}:{
  className?: string,
  logoSize?: number,
  showText?: boolean
}) {
  return (
    <h1 className={`text-1xl select-none font-sans capitalize font-light flex flex-row gap-2 h-fit w-fit items-center justify-center ${className}`}>
      <Image
        src={interstellarLogo.src}
        alt="Interstellar Logo"
        priority={true}
        width={logoSize}
        height={logoSize}
      />
     { showText && 'Odyssey' }
    </h1>
  )
}