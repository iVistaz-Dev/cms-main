import React from "react"
import ContactForm from "../../utils/commonContact"

const Contact = React.forwardRef((props, ref) => {
  const fields = {
    formid: "2",
    formType: "noblePlasticfrom",
    formBtn: "text-[#05AC8D]",
    formBtnBg: "bg-white",
    fields: [
      { id: "firstname", label: "First Name", type: "text" },
      { id: "lastname", label: "Last Name", type: "text" },
      { id: "email", label: "Email ID", type: "email" },
      { id: "organisationName", label: "Organisation", type: "text" },
      { id: "messageBox", label: "Message", type: "textarea" },
    ],
  }

  return (
    <div className=" bg-[#05AC8D] py-8 my-4 rounded-lg" ref={ref}>
      <div className="flex flex-col">
        <div className="text-start ml-4">
          <p className="text-white text-2xl">Send us a message</p>
        </div>
        <div className="p-4 text-start">
          <ContactForm
            fields={fields.fields}
            form={fields.formid}
            type={fields.formType}
            btn={fields.formBtn}
            bg={fields.formBtnBg}
          />
        </div>
      </div>
    </div>
  )
})

export default Contact
