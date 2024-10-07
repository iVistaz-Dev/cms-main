import React from "react"

const OurApproach = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      <div className="bg-cms-primary-green text-white w-full lg:w-auto">
        <div className="w-full lg:w-[400px]">
          <h1 className="text-3xl font-semibold mb-6 ps-4 lg:ps-16 pe-4 lg:pe-10 py-10">
            Our Approach
          </h1>
        </div>
      </div>
      <div className="bg-cms-secondary-green p-4 lg:p-16">
        <p className="text-[#404040] text-lg">
          We work for and with vulnerable communities who are disproportionately
          affected by climate change - small and marginal farmers, Nano, Micro,
          and MSMEs, street vendors, and indigenous people. We focus on
          enhancing their resilience, ensuring they can recover from or adapt to
          climate-related disruptions without compromising their lives,
          livelihoods and long-term well-being.
        </p>
      </div>
    </div>
  )
}

export default OurApproach
