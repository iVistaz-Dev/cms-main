"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

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
    <div className="min-h-screen pb-12 md:pb-20 bg-[url('/banner01.png')] bg-cover bg-center flex justify-center">
      <div className="flex flex-col items-center text-white h-full gap-16 md:gap-20 mx-auto">
        <div className="bg-white px-8 py-6 md:px-12 md:py-8 rounded-b-2xl shadow">
          <Image src="/logo.svg" width={175} height={65} alt="shoonya logo" />
        </div>

        <div className="flex flex-col items-center gap-3">
          <Image
            src="/rootsLogo.svg"
            width={195}
            height={103}
            alt="shoonya logo"
          />
          <h1 className="text-lg md:text-2xl text-[#292929] italic text-center">
            Planting the Seeds of Tomorrow
          </h1>
        </div>

        <div className="flex flex-col items-center gap-8 md:gap-14 px-3">
          <h1 className="text-xl md:text-4xl text-shoonya-black font-semibold text-center">
            We are on a mission to grow 1 Million trees by 2030
          </h1>

          <button
            onClick={handleScroll}
            className="relative bg-shoonya-green text-base md:text-lg px-4 md:px-9 py-2 md:py-3 rounded-full ring-4 ring-shoonya-green/30 shadow overflow-hidden group"
          >
            <span className="absolute inset-0 bg-shoonya-purple origin-left scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
            <span className="relative z-10 md:text-lg">Join the Movement</span>
          </button>
        </div>

        <div className="w-full mt-8 md:mt-10">
          <video
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/shoonya/5382493-hd_1280_720_24fps.mp4"
            className="w-full h-auto max-h-[300px] md:max-h-none"
            autoPlay
            muted
            loop
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
          ></video>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center">
          <Image
            src="/tree.png"
            width={250}
            height={250}
            className="md:w-[400px] md:h-[400px] object-contain"
            alt="tree"
          />

          <div className="flex flex-col justify-center gap-3 md:gap-5 text-center md:text-left">
            <p className="text-sm md:text-xl text-shoonya-purple">
              One Tree can absorb <br /> up to 22 kg of CO₂ per year
            </p>
            <h2 className="text-lg md:text-3xl font-semibold text-shoonya-black">
              Imagine what <br /> 1 Million Trees Can Do
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 md:gap-7 mt-5 w-full md:w-3/4 px-4">
          <h2 className="text-shoonya-black text-lg md:text-3xl text-center">
            Our initiative began with a simple commitment, to work together and
            give back to the Earth and her people. With a deep-rooted focus on
            ecological balance and community empowerment, we aim for lasting
            sustainable impact.
          </h2>

          <p className="text-sm md:text-lg text-[#141414] text-center mt-5 md:mt-10">
            Our vision is clear: to create a greener, more resilient planet by
            supporting the growth of native trees that support biodiversity and
            provide long-term benefits to both nature and people. Every tree
            planted today moves us closer to the ultimate goal,{" "}
            <span className="font-semibold">a net zero future</span>.
          </p>

          <p className="text-sm md:text-lg text-[#141414] text-center font-semibold">
            This is more than a project; it’s a collective act of love for the
            land we call home.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
