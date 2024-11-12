// Contact.js
import React from 'react';
import ContactForm from '../../utils/VLifeContactForm';

const Contact = React.forwardRef((props, ref) => {
  const fields = {
    formid: '2',
    formType: 'shipfrom',
    formBtn: 'text-white',
    formBtnBg: 'bg-[#7F3F97]',
    fields: [
      { id: 'firstname', label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
      { id: 'lastname', label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
      { id: 'email', label: 'Email ID', type: 'email', placeholder: 'Enter your email address' },
      { id: 'organisationName', label: 'Organisation', type: 'text', placeholder: 'Enter your organisation name' },
      { id: 'messageBox', label: 'Message', type: 'textarea', placeholder: 'Type your message' },
    ],
  };

  return (
    <div className="py-8 my-4" ref={ref}>
      <div className="flex flex-col">
        <div className="text-center" data-aos="zoom-in" data-aos-duration="">
          <h2 className="lg:text-[40px] text-[25px] text-[#7F3F97] font-bold">
            Support Lasting Change in Rural Communities
          </h2>
          <p className="text-xl text-[#7F3F97]">
            Fill out the form to discover ways you can contribute through donations, partnerships, or volunteering.
          </p>
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
  );
});

export default Contact;
