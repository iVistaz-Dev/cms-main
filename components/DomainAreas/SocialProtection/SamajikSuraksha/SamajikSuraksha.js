import React from "react"

const SamajikSuraksha = () => {
  return (
    <div className="flex flex-col lg:flex-row md:me-16">
      {/* Left Section */}
      <div className="bg-cms-primary text-white flex-shrink-0">
        <div className="w-full lg:w-[400px] px-5 sm:px-16 py-10">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-6">
            Samajik <br /> Suraksha ‘Setu’
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 border-y">
        <div className="px-5 py-7 sm:px-10 md:px-20 w-full bg-[#EBE1EF]">
          {/* First Paragraph */}
          <p className="text-[#404040] text-sm sm:text-base leading-relaxed">
            India’s path vision for Viksit Bharat by 2047 is shared by us and is
            at the heart of our mission to build a comprehensive and equitable
            social security system that empowers every citizen. In this
            collective endeavour, we aim to build a network that elevates social
            security from a mere safety net to a springboard for individual and
            national progress.
          </p>

          {/* Second Paragraph */}
          <p className="py-5 text-[#404040] text-sm sm:text-base leading-relaxed">
            Samajik Suraksha ‘Setu’, the social protection coalition anchored by
            CMS, is a proposed alliance of organizations and stakeholders
            committed to advancing comprehensive social protection systems in
            India. Setu aims to address the country’s pressing need for robust
            and accessible social safety nets and support India’s commitment to
            universalizing social security coverage.
          </p>

          {/* Button */}
          <button className="px-5 py-2 bg-cms-primary text-white text-sm sm:text-base rounded-sm">
            Know more
          </button>
        </div>
      </div>
    </div>
  )
}

export default SamajikSuraksha
