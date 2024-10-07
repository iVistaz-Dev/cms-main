"use client"

import React, { useState } from "react"
import { faqData } from "@/utils/data"
import AccordionMenu from "../AccordionMenu/AccordionMenu"

const Inclusive = () => {
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleExpand = (id) => {
    setExpandedItem(expandedItem === id ? null : id)
  }
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="w-full">
          <div
            id="accordion-collapse"
            data-accordion="collapse"
            className="space-y-2"
            data-aos="zoom-in"
          >
            {faqData.map((item) => (
              <AccordionMenu
                key={item.id}
                id={item.id}
                title={item.title}
                content1={item.content1}
                content2={item.content2}
                content3={item.content3}
                content4={item.content4}
                content5={item.content5}
                content6={item.content6}
                isExpanded={expandedItem === item.id}
                toggleExpand={toggleExpand}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inclusive
