import Link from "next/link"

const AccordionMenu = ({
  title,
  content1,
  content2,
  content3,
  content4,
  content5,
  content6,
  content7,
  id,
  isExpanded,
  toggleExpand,
}) => {
  return (
    <div>
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between text-start border border-[#98D5C5] w-full bg-white px-5 py-2 font-medium text-[#454545] gap-3 ${
            isExpanded ? "rounded-b-none" : ""
          }`}
          onClick={() => toggleExpand(id)}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${id}`}
        >
          <span className="text-cms-primary text-lg">{title}</span>
          <div className="bg-gray-300 text-cms-primary-green rounded-full flex justify-center items-center p-2">
            <svg
              data-accordion-icon
              className={`w-3 h-3 shrink-0 transition-transform duration-300 ${
                isExpanded ? "rotate-0" : "-rotate-180"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </div>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={`bg-white border-b border-x border-[#98D5C5] ${
          isExpanded ? "block" : "hidden"
        }`}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        <div className="p-5">
          <p
            className="mb-2 text-[#454545]"
            dangerouslySetInnerHTML={{ __html: content1 }}
          ></p>
          <p
            className="mb-2 text-[#454545]"
            dangerouslySetInnerHTML={{ __html: content2 }}
          ></p>

          <p className="mb-2 text-[#454545]">{content3}</p>
          <p className="mb-2 text-[#454545]">{content4}</p>
          <p className="mb-2 text-[#454545]">{content5}</p>
          <p className="mb-2 text-[#454545]">{content6}</p>
          <p className="mb-2 text-[#454545]">{content7}</p>
        </div>
      </div>
    </div>
  )
}

export default AccordionMenu
