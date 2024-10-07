'use client'
import React, { useState } from 'react'

// AccordionPanel component definition
const AccordionPanel = ({ title, children, isOpen, onClick }) => (
  <div>
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 bg-gray-200 dark:bg-gray-700"
    >
      {title}
    </button>
    {isOpen && (
      <div className="px-4 py-2 border-t border-gray-300 dark:border-gray-600">
        {children}
      </div>
    )}
  </div>
)

// Accordion component definition
const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onClick: () => handleToggle(index),
        })
      )}
    </div>
  )
}

// Export the Accordion and AccordionPanel components
export { Accordion, AccordionPanel }
