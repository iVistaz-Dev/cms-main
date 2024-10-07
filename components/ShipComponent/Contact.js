import React from 'react'
import ContactForm from '../../utils/commonContact'

const Contact = React.forwardRef((props, ref) => {
  const fields = {
    formid: '2',
    formType: 'shipfrom',
    formBtn: 'text-[#05AC8D]',
    formBtnBg: 'bg-white',
    fields: [
      { id: 'firstname', label: 'First Name', type: 'text' },
      { id: 'lastname', label: 'Last Name', type: 'text' },
      { id: 'email', label: 'Email ID', type: 'email' },
      { id: 'organisationName', label: 'Organisation', type: 'text' },
      { id: 'messageBox', label: 'Message', type: 'textarea' },
    ],
  }

  return (
    <div className=" bg-[#05AC8D] py-8 my-4" ref={ref}>
      <div className="flex flex-col">
        <div className="text-center">
          <h3 className="text-white lg:text-3xl mb-4 text-lg">
            Fill the form below to get started!
          </h3>
        </div>
        <div className="mx-auto p-4 lg:w-8/12">
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
