import React from "react"

const Overview = ({ desc }) => {
  return (
    <div className="max-w-screen-xl mx-auto my-5 md:my-10 px-4">
      <h1 className="text-[#1A1A1A] text-2xl sm:text-3xl font-semibold mb-4">
        Overview
      </h1>
      <p className="text-base sm:text-lg text-[#646464]">{desc}</p>
    </div>
  )
}

export default Overview
