"use client"
import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Contact from "../../components/ShipComponent/Contact"
import AOS from "aos"
import "aos/dist/aos.css"

// import ShipForm from '../../utils/ShipForm'
const Ship = () => {
  const formRef = useRef(null)

  const handleJoinUsClick = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    AOS.init({
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease",
    })
  })

  // Header Scroll animation

  const [scrollDown, setScrollDown] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDown(true)
      } else {
        setScrollDown(false)
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      {/* Header */}
      <div className="w-full lg:mt-28 mt-28">
        <div
          className={`border-b border-gray-200 fixed top-0 left-0 right-0 z-50 ${scrollDown ? "bg-[#C7EDE6]" : "bg-white"
            }`}
          data-aos="fade-down"
        >
          <div className="flex lg:flex-row justify-between items-center lg:w-[1140px] lg:p-6 mx-auto p-4">
            <img
              className="lg:h-auto lg:w-auto h-[40px] lg:mb-0"
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/cms-logo.svg"
              alt="CMS Logo"
            />
            <img
              className="lg:w-auto lg:h-[65px] h-[40px]"
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/swasti.svg"
              alt="Swasti Logo"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-center lg:h-[600px] w-full"
          data-aos="zoom-in"
        >
          <div className="relative w-full lg:bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/cms-banner-img.png')] bg-no-repeat bg-center bg-cover h-full flex items-center container mx-auto">
            <div className="flex flex-col items-start pl-5 w-full md:w-2/3 lg:w-1/2 py-6 ">
              <p
                className="text-4xl md:text-5xl font-bold lg:text-left pb-5 text-fuchsia-800 text-center"
                data-aos="fade-down"
              >
                Saarthi Health Innovation Platform (SHIP)
              </p>
              <p className="text-2xl md:text-4xl border-t-4 border-b-4 border-teal-200 py-5 mx-auto lg:mx-px">
                Catalysing Innovations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The SHIP is an integrated solution */}
      <div className="bg-[#00AE8E]">
        <p
          className="text-lg lg:text-2xl p-5 flex items-center justify-center text-center text-white lg:w-[1140px] mx-auto"
          data-aos="fade-down"
        >
          The SHIP is an integrated solution that enables healthcare facilities to access non-clinical services like financing, aggregated procurement, equipment and facility maintenance, technology solutions, medical waste management, and legal and advisory services which leads to efficient cost management and clinical outcomes, ultimately enhancing the quality of healthcare.
        </p>
      </div>

      {/* We work with Healthcare enterprises */}
      <div className="bg-[#E5D9EA] w-full lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:w-[1140px] w-full mx-auto">
          <div className="relative bg-no-repeat bg-end bg-cover h-auto flex items-end w-full lg:w-[700px]">
            <img
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/health-care.png"
              alt="health-care"
              className="h-auto w-full lg:w-98"
              data-aos="fade-right"
            />
          </div>
          <div className="flex flex-col items-start p-5 ps-0 lg:ps-28 w-full lg:w-full overflow-hidden">
            <p
              className="text-lg lg:text-[22px]  lg:pb-5 p-3 leading-relaxed lg:px-0 px-7 text-center lg:text-justify"
              data-aos="fade-left"
            >
              We work with healthcare enterprises, which are either independent units managed by a single physician or a group of medical professionals operating small to medium-sized hospitals. SHIP helps these enterprises scale their operations, improve operational efficiencies, overcome barriers to growth, and achieve economies of scale. We work with the administrative staff and doctors of these facilities to manage their insurance and cashless expenditures while also ensuring compliance with laws and regulations, logistics, and diagnostic services, as well as training their health workforce as needed to ensure efficient systems and practices.
            </p>
          </div>
        </div>
      </div>

      {/* With our help, healthcare enterprises */}
      <div className="flex flex-col lg:flex-row bg-[#C7EDE6] w-full mx-auto  overflow-hidden">
        <div className="flex flex-col items-center justify-center p-3 flex-grow lg:w-3/4">
          <p
            className="text-lg lg:text-[22px] lg:text-justify lg:p-32 container leading-relaxed mx-auto px-5 text-center"
            data-aos="fade-right"
          >
            With our help, healthcare enterprises will be able to access the resources they need to focus on what is most important: patient care and outcomes. SHIP leverages the collective experience of the {" "}
            <Link
              className="text-fuchsia-800"
              href={"https://catalysts.global/"}
            >
              Catalyst Group
            </Link>{" "} in developing efficient enterprises. Catalyst Group's learnings from the health system strengthening programs have given us deeper insight and understanding of the workings of small and medium-sized hospitals and medical practices. We want to share this knowledge with the healthcare industry in an effort to improve profitability and quality of care.


            {/* With our help, healthcare enterprises will be able to access the
            resources they need to focus on what is most important: patient care
            and outcomes. SHIP leverages the collective experience of the{" "}
            <Link
              className="text-fuchsia-800"
              href={"https://catalysts.global/"}
            >
              Catalyst Group
            </Link>{" "}
            in developing efficient enterprises. Catalyst Group learnings from
            the health system strengthening programs have given us deeper
            insight and understanding of the workings of small and medium-sized
            hospitals and medical practices. We want to share this knowledge
            with the healthcare industry in an effort to improve profitability
            and quality of care. */}
          </p>
        </div>
        <div className="lg:flex hidden lg:w-[850px] items-center justify-center">
          <img
            className="w-full h-auto container mx-auto"
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/patient_care_and_outcomes.jpeg"
            alt="patient_care_and_outcomes"
            data-aos="fade-left"
          />
        </div>
      </div>

      {/* Scope of Services */}
      <div>
        <div className="text-center">
          <p className="text-2xl font-bold my-6" data-aos="fade-down">
            Scope of Services
          </p>
          <div
            className="relative w-[600px] h-[600px] mx-auto p-10 items-center justify-center flex-wrap lg:block hidden"
            data-aos="fade-up"
          >
            {/* left */}
            <div className="relative w-[230px] text-left p-4 bg-[#00AE8E] rounded-3xl flex items-center font-semibold text-white top-[7%] right-[5%] transform translate-x-[-50%] hover:w-[350px] hover:rounded-none group">
              <div>
                <p className="lg:ps-5 lg:mr-5 text-lg">Procurement</p>
                <div className="hidden group-hover:block text-sm lg:ps-5">
                  Aggregation of consumables
                </div>
              </div>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/procurement.svg"
                alt="Procurement"
                className="w-12 h-12"
              />
            </div>
            <div className="absolute w-[230px] text-left p-4 bg-[#00AE8E] rounded-3xl flex items-center font-semibold text-white top-[35%] right-[85%] hover:w-[350px] hover:rounded-none group">
              <div>
                <p className="lg:ps-5 lg:mr-5 text-lg">Finance</p>
                <div className="hidden group-hover:block text-sm lg:ps-5">
                  Fintech and insurance services
                </div>
              </div>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/finance.svg"
                alt="Finance"
                className="w-12 h-12"
              />
            </div>

            <div className="absolute w-[230px] text-left p-4 bg-[#D2E2DF] rounded-3xl flex items-center font-semibold text-black top-[60%] right-[94%]">
              <p className="lg:ps-5 text-lg">Manpower & Staffing</p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/manpower.svg"
                alt="Manpower & Staffing"
                className="w-12 h-12"
              />
            </div>
            <div className="absolute w-[230px] text-left p-4 bg-[#D2E2DF] rounded-3xl flex items-center font-semibold text-black bottom-[0%] left-[-19%]">
              <p className="lg:ps-5 lg:mr-5 text-lg">Maintenance Services</p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/maintenance.svg"
                alt="Maintenance Services"
                className="w-12 h-12"
              />
            </div>
            <div className="absolute w-[230px] text-left p-4 bg-[#D2E2DF] rounded-3xl flex items-center font-semibold text-black bottom-[-25%] left-[5%] transform translate-x-[-50%]">
              <p className="lg:ps-5 lg:mr-5 text-lg">Logistics</p>
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/logistics.svg"
                alt="Logistics"
                className="w-12 h-12"
              />
            </div>

            {/*right*/}
            <div className="absolute w-[230px] text-left p-4 bg-[#D2E2DF] rounded-3xl flex items-center font-semibold text-black bottom-[-25%] right-[-12%]">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/medical-waste.svg"
                alt="Medical Waste Management"
                className="w-12 h-12"
              />
              <p className="lg:ps-2 lg:mr-5 text-lg">
                Medical Waste Management
              </p>
            </div>
            <div className="absolute w-[230px] text-left p-4 bg-[#D2E2DF] rounded-3xl flex items-center font-semibold text-black bottom-[0%] right-[-23%]">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/diagnostics.svg"
                alt="Diagnostics"
                className="w-12 h-12"
              />
              <p className="lg:ps-5 lg:mr-5 text-lg">Diagnostics</p>
            </div>
            <div className="absolute w-[230px] text-left p-4 bg-[#D2E2DF] rounded-3xl flex items-center font-semibold text-black bottom-[25%] left-[94%]">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/legal.svg"
                alt="Legal"
                className="w-12 h-12"
              />
              <p className="lg:ps-5 lg:mr-5 text-lg">Legal</p>
            </div>
            <div className="absolute w-[230px] text-left p-4 bg-[#7F3F98] rounded-3xl flex items-center font-semibold text-white top-[35%] right-[-23%] transform translate-x-0 group hover:w-[350px] hover:translate-x-[120px] hover:rounded-none ease-in-out">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/advisory.svg"
                alt="Advisory"
                className="w-12 h-12"
              />
              <div>
                <p className="lg:ps-5 lg:mr-5 text-lg">Advisory</p>
                <div className="hidden group-hover:block lg:ps-5 text-sm">
                  Training, Capacity Building & Certification
                </div>
              </div>
            </div>

            <div className="absolute w-[230px] text-left p-4 bg-[#7F3F98] rounded-3xl flex items-center font-semibold text-white top-[12%] right-[-18%] transform translate-x-0 group hover:w-[350px] hover:translate-x-[120px] hover:rounded-none ease-in-out">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services/tech.svg"
                alt="Tech-Enabled Services"
                className="w-12 h-12"
              />
              <div>
                <p className="lg:ps-5 lg:mr-5 text-lg">Tech-Enabled Services</p>
                <div className="hidden group-hover:block lg:ps-5 text-sm">
                  Fintech and insurance services
                </div>
              </div>
            </div>

            <img
              className="lg:w-[600px] h-auto flex mx-auto"
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/scope_of_services.png"
              alt="patient_care_and_outcomes"
            />
          </div>
        </div>
      </div>
      {/* Scope of Services For Mobile */}
      <div className="sm:hidden">
        <img
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/ship.png"
          alt="SHIP image"
        />
      </div>
      {/* We strive to provide hospitals  */}
      <div className="rounded-2xl border border-[#00AE8E] p-8 mb-5 mx-auto lg:mt-48 mt-5 w-full lg:w-[1140px]">
        <p className="lg:text-xl text-center text-lg " data-aos="zoom-in">
          We strive to provide hospitals and other healthcare facilities with a
          portfolio of services that ultimately impact overall hospital
          profitability and patient outcomes.
        </p>
      </div>
      <div></div>

      {/* How Hospitals Benefit from SHIP */}

      <div className="relative w-full lg:h-[65vh] flex items-center justify-center bg-cover bg-center bg-[url('/images/ship/hospitals_benefits_from_ship.png')]">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div
          className="relative z-10 text-center text-white"
          data-aos="fade-down"
        >
          <p className="lg:text-4xl font-bold mb-8 mt-5 text-lg">
            How Hospitals Benefit from SHIP
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 justify-items-center px-4 container mx-auto">
            <div className="p-4 text-center max-w-xs">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/hospitals_benefits_from_ship/reducing_cost.svg"
                alt="Reducing costs"
                className="mx-auto mb-4 w-[80px] lg:w-[120px]"
              />
              <p className="text-lg">
                Reducing costs, increasing margins and improving operational
                efficiencies
              </p>
            </div>
            <div className="p-4 text-center max-w-xs">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/hospitals_benefits_from_ship/benefits_of_demand.svg"
                alt="Demand aggregation"
                className="mx-auto mb-4 w-[80px] lg:w-[120px]"
              />
              <p className="text-lg">
                Benefits of demand aggregation — lower prices against larger
                orders
              </p>
            </div>
            <div className="p-4 text-center max-w-xs">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/hospitals_benefits_from_ship/better_market.svg"
                alt="Market access"
                className="mx-auto mb-4 w-[80px] lg:w-[120px]"
              />
              <p className="text-lg">Better market access and discovery</p>
            </div>
            <div className="p-4 text-center max-w-xs">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/hospitals_benefits_from_ship/improved_staff.svg"
                alt="Staff satisfaction"
                className="mx-auto mb-4 w-[80px] lg:w-[120px]"
              />
              <p className="text-lg">Improved staff satisfaction & retention</p>
            </div>
            <div className="p-4 text-center max-w-xs">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/hospitals_benefits_from_ship/better_quality.svg"
                alt="Quality care"
                className="mx-auto mb-4 w-[80px] lg:w-[120px]"
              />
              <p className="text-lg">
                Better quality of care & patient outcomes at lower costs
              </p>
            </div>
            <div className="p-4 text-center max-w-xs">
              <img
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/hospitals_benefits_from_ship/access.svg"
                alt="Innovative solutions"
                className="mx-auto mb-4 w-[80px] lg:w-[120px]"
              />
              <p className="text-lg">Access to innovative solutions</p>
            </div>
          </div>
          <div className="flex justify-center items-center text-center h-full py-5">
            <button
              onClick={handleJoinUsClick}
              className="border border-[#00AE8E] text-white font-bold py-2 px-8 rounded-full hover:bg-[#00AE8E] text-center"
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/* Impact on the Healthcare Sector */}
      <div className="w-full lg:h-auto flex justify-center bg-[#00AE8E] p-5">
        <div className="text-center text-white">
          <p
            className="lg:text-4xl font-bold py-10 text-lg"
            data-aos="fade-down"
          >
            Impact on the Healthcare Sector
          </p>
          <p className="lg:text-2xl pb-5 text-lg" data-aos="fade-up">
            Profitability gains from network effects contribute to strengthening the health systems across the country.
          </p>
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/SHE+WEbsite-01.jpg"
            alt=""
            className="lg:h-auto lg:w-[1200px] mx-auto py-5 hidden lg:block"
            data-aos="zoom-in"
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/big_basket/SHE+WEbsite-02.jpg"
            alt=""
            className="mx-auto py-5 block lg:hidden"
            data-aos="zoom-in"
          />
        </div>
      </div>

      {/* Fill the form below to get started! */}
      <div ref={formRef} data-aos="fade-down">
        <Contact />
      </div>
      {/* footer */}
      <div className="w-full bg-[#D8D8D8]">
        <div className="flex lg:flex-row justify-between items-center lg:w-[1140px] p-5 mx-auto">
          <p className="text-center mx-auto">Copyright © 2024, Inc.</p>
          {/* <div className="flex space-x-4">
            <i class="bi bi-twitter"></i>
            <div className="rounded-full bg-gray-100 p-3">
              <img
                className="h-auto w-7"
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/twitter.svg"
                alt="Twitter Logo"
              />
            </div>
            <div className="rounded-full bg-gray-100 p-3">
              <img
                className="h-auto w-7 "
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/ship/linkedin.svg"
                alt="LinkedIn Logo"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Ship
