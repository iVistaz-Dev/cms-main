'use client'
import React, { useState } from 'react'
import { FaTimes, FaArrowDown } from 'react-icons/fa' // Importing icons

const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full max-w-4xl mx-auto ">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => toggleOpen(index),
          })
        }
        return child
      })}
    </div>
  )
}

const AccordionPanel = ({ title, children, isOpen, onToggle }) => {
  return (
<div className="border-b border-gray-200 py-3">
  <button
    className="w-full p-6 flex justify-between items-center text-2xl bg-[#E1D0E8] text-[#7F3F97] hover:text-[#1C1C1C] focus:outline-none text-left"
    onClick={onToggle}
  >
    <span className="flex-grow">{title}</span>
    <span className="flex items-center justify-center w-6 h-6 bg-[#7F3F97] hover:bg-[#1C1C1C] rounded-full text-white text-xs p-2 m-2">
      {isOpen ? <FaTimes /> : <FaArrowDown />}
    </span>
  </button>
  <div
    className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
      isOpen ? 'max-h-screen' : 'max-h-0'
    }`}
  >
    <div className="p-4 bg-white text-gray-700 text-lg">{children}</div>
  </div>
</div>

  )
}

const AccordionPage = () => {
  return (
    <div className="bg-[#EDE5F1] py-14" data-aos="zoom-in">
      <p className="lg:text-[34px] font-semibold text-center py-5 text-xl">
        FAQs - Your Questions Answered:
      </p>
      <div className="lg:w-[923px] container mx-auto">
        <Accordion className="text-xl text-start">
          <AccordionPanel title="How are trees planted?" className="text-xl">
            <ul className="mb-2 list-disc pl-5 text-xl">
              <li className="text-xl">
                We collaborate with local communities and environmental experts
                for strategic and sustainable tree planting
              </li>
              <li>
                We carefully curate the farmers and individuals we choose to
                work together with
              </li>
              <li>
                Basis the land - topography and soil features, we select the
                most appropriate native saplings that can be planted, which fit
                the local ecology and contribute to biodiversity
              </li>
            </ul>
          </AccordionPanel>
          <AccordionPanel
            title="Can I track the impact of my redeemed stars?"
            className="text-start"
          >
            <ul className="mb-2 list-disc pl-5 text-xl">
              <li>
                Absolutely! Our Impact Tracker provides real-time updates on
                trees planted and environmental impact.
              </li>
            </ul>
          </AccordionPanel>
          <AccordionPanel title="What if I prefer other rewards over trees?">
            <ul className="mb-2 list-disc pl-5 text-xl">
              <li>
                While you can redeem stars for various rewards, choosing trees
                contributes to our shared commitment to sustainability.
              </li>
              <li>
                It is our collective commitment to improve the very planet that
                we live on, giving back to the environment can start with as
                simple and as pure an action as planting a tree!
              </li>
              <li>
                This reward also provides you with a unique access to be PART of
                the planting process as well! Be involved, engaged and improve
                the planet with your very own hands - our team of agri
                scientists provide you with free in person sessions on different
                native varieties and how they can benefit our ecology as a
                whole.
              </li>
            </ul>
          </AccordionPanel>
        </Accordion>
      </div>
    </div>
  )
}

export default AccordionPage
