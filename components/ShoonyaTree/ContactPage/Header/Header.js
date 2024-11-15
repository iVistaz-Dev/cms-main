"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import GetInvolved from "../../GetInvolved/GetInvolved"

const Header = ({ scrollToRef }) => {
  const [isReadyToScroll, setIsReadyToScroll] = useState(false)

  useEffect(() => {
    // Ensure the ref is set before allowing scroll
    if (scrollToRef?.current) {
      setIsReadyToScroll(true)
    }
  }, [scrollToRef])

  const handleScroll = () => {
    if (isReadyToScroll) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen pb-12 md:pb-20 bg-[url('/banner01.png')] bg-cover flex justify-center">
      <div className="flex flex-col items-center text-white h-full gap-5 md:gap-10 mx-auto">
        <div className="bg-white px-8 py-6 md:px-12 md:py-8 rounded-b-2xl shadow">
          <Image src="/logo.svg" width={175} height={65} alt="shoonya logo" />
        </div>

        <GetInvolved />
      </div>
    </div>
  )
}

export default Header
