"use client"

import axios from "axios"
import { CiCircleCheck } from "react-icons/ci"
import { GiFruitTree } from "react-icons/gi"
import { useState } from "react"

const GetInvolved = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    organisation: "",
    areYou: "",
    message: "",
    other: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    organisation: false,
    areYou: false,
    message: false,
    other: false,
  })

  const validateForm = () => {
    const newErrors = {
      name: userDetails.name === "",
      email: userDetails.email === "",
      organisation: userDetails.organisation === "",
      areYou: userDetails.areYou === "",
      message: userDetails.message === "",
      other: userDetails.areYou === "Other" && userDetails.other === "",
    }
    setErrors(newErrors)

    // If any of the values are empty, return false to indicate invalid form
    return !Object.values(newErrors).includes(true)
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      const formData = new FormData()
      formData.append("name", userDetails.name)
      formData.append("email", userDetails.email)
      formData.append("organisation", userDetails.organisation)
      formData.append("areYou", userDetails.areYou)
      formData.append("message", userDetails.message)
      formData.append("other", userDetails.other)

      try {
        const response = await axios.post(
          "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10653/feedback",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )

        if (response.status === 200) {
          // If form submission is successful
          console.log("Form submitted successfully")
          setIsSubmitted(true)
          setShowMessage(true)
          setUserDetails({
            name: "",
            email: "",
            organisation: "",
            areYou: "",
            message: "",
            other: "",
          })
          setErrors({
            name: false,
            email: false,
            organisation: false,
            areYou: false,
            message: false,
            other: false,
          })
        } else {
          console.error("Form submission failed")
        }
      } catch (error) {
        console.error("Error submitting the form:", error)
      }
    }
  }

  const renderNameField = () => (
    <div
      className={`border ${
        errors.name
          ? "border-red-500 ring-2 ring-red-500 bg-red-200"
          : "border-[#95AA62] bg-[#EBEBC9]"
      } px-3 py-1.5 rounded flex items-center w-full md:w-1/2`}
    >
      <label
        htmlFor="name"
        className="w-40 border-r border-[#95AA62] text-lg text-[#374708]"
      >
        Name
      </label>
      <input
        id="name"
        type="text"
        className="border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent px-2 w-full text-[#374708]"
        value={userDetails.name}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            name: e.target.value,
          }))
        }
      />
      {/* {errors.name && <span className="text-red-500 text-sm">Required</span>} */}
    </div>
  )

  const renderEmailField = () => (
    <div
      className={`border ${
        errors.email
          ? "border-red-500 ring-2 ring-red-500 bg-red-200"
          : "border-[#95AA62] bg-[#EBEBC9]"
      } px-3 py-1.5 rounded flex items-center w-full md:w-1/2`}
    >
      <label
        htmlFor="email"
        className="w-40 border-r border-[#95AA62] text-lg text-[#374708]"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        className="border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent px-2 w-full text-[#374708]"
        value={userDetails.email}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            email: e.target.value,
          }))
        }
      />
      {/* {errors.email && <span className="text-red-500 text-sm">Required</span>} */}
    </div>
  )

  const renderOrganisationField = () => (
    <div
      className={`border ${
        errors.organisation
          ? "border-red-500 ring-2 ring-red-500 bg-red-200"
          : "border-[#95AA62] bg-[#EBEBC9]"
      } px-3 py-1.5 rounded flex items-center w-full md:w-1/2`}
    >
      <label
        htmlFor="organisation"
        className="w-40 border-r border-[#95AA62] text-lg text-[#374708]"
      >
        Organisation
      </label>
      <input
        id="organisation"
        type="text"
        className="border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent px-2 w-full text-[#374708]"
        value={userDetails.organisation}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            organisation: e.target.value,
          }))
        }
      />
      {/* {errors.organisation && (
        <span className="text-red-500 text-sm">Required</span>
      )} */}
    </div>
  )

  const renderAreYouField = () => (
    <>
      <div
        className={`border ${
          errors.areYou
            ? "border-red-500 ring-2 ring-red-500 bg-red-200"
            : "border-[#95AA62] bg-[#EBEBC9]"
        } px-3 py-1.5 rounded flex items-center w-full md:w-1/2`}
      >
        <label
          htmlFor="areYou"
          className="w-40 border-r border-[#95AA62] text-lg text-[#374708]"
        >
          Are you
        </label>
        <select
          id="areYou"
          className="border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent px-2 w-full text-[#374708]"
          value={userDetails.areYou}
          onChange={(e) =>
            setUserDetails((prevDetails) => ({
              ...prevDetails,
              areYou: e.target.value,
              other: e.target.value !== "Other" ? "" : prevDetails.other,
            }))
          }
        >
          <option value="" disabled></option>
          <option value="Government Agency">Government Agency</option>
          <option value="Civil Society Organisation">
            Civil Society Organisation
          </option>
          <option value="Faith-based institution">
            Faith-based institution
          </option>
          <option value="Private Sector Business">
            Private Sector Business
          </option>
          <option value="Corporate Organisation">Corporate Organisation</option>
          <option value="Educational Institution">
            Educational Institution
          </option>
          <option value="Individual Contributor">Individual Contributor</option>
          <option value="Other">Other</option>
        </select>
        {/* {errors.areYou && (
          <span className="text-red-500 text-sm">Required</span>
        )} */}
      </div>

      {userDetails.areYou === "Other" && (
        <div
          className={`border ${
            errors.other
              ? "border-red-500 ring-2 ring-red-500 bg-red-200"
              : "border-[#95AA62] bg-[#EBEBC9]"
          } px-3 py-1.5 rounded flex items-center w-full md:w-1/2`}
        >
          <label
            htmlFor="specify"
            className="w-40 border-r border-[#95AA62] text-lg text-[#374708]"
          >
            Specify
          </label>
          <input
            id="specify"
            type="text"
            placeholder="Please specify"
            value={userDetails.other}
            onChange={(e) =>
              setUserDetails((prevDetails) => ({
                ...prevDetails,
                other: e.target.value,
              }))
            }
            className="border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent px-2 w-full text-[#374708]"
          />
        </div>
      )}
    </>
  )

  const renderMessageField = () => (
    <div
      className={`border ${
        errors.message
          ? "border-red-500 ring-2 ring-red-500 bg-red-200"
          : "border-[#95AA62] bg-[#EBEBC9]"
      } px-3 py-1.5 rounded flex items-stretch w-full md:w-1/2`}
    >
      <div className="w-40 border-r border-[#95AA62] flex items-center">
        <span className="text-lg text-[#374708]">Message</span>
      </div>
      <textarea
        rows={5}
        cols={50}
        value={userDetails.message}
        onChange={(e) =>
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            message: e.target.value,
          }))
        }
        className="border-none outline-none focus:outline-none focus:ring-0 focus:border-transparent bg-transparent px-2 w-full text-[#374708]"
        placeholder="Enter your message here..."
      ></textarea>
      {/* {errors.message && <span className="text-red-500 text-sm">Required</span>} */}
    </div>
  )

  return (
    <div className="h-auto px-5 pt-5 pb-10 mt-5">
      <div className="flex flex-col items-center h-full gap-5 max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl md:text-4xl text-[#486601] font-semibold">
            Get Involved With Shoonya
          </h1>
          <p className="text-lg md:text-xl text-shoonya-black">
            Here’s how you can get started. Fill out the enquiry form and our
            team will get back to you shortly.
          </p>
          {isSubmitted && showMessage && (
            <p
              className={`text-lg text-shoonya-green flex items-center gap-1 transition-opacity duration-500 ease-in-out ${
                showMessage ? "opacity-100" : "opacity-0"
              }`}
            >
              <GiFruitTree className="text-green-700" />
              Thank you for reaching out! We will get back to you shortly.
              <GiFruitTree className="text-green-700" />
            </p>
          )}
        </div>

        <form
          className="flex flex-col items-center gap-2 w-full mt-5"
          onSubmit={onSubmitForm}
        >
          {renderNameField()}
          {renderEmailField()}
          {renderOrganisationField()}
          {renderAreYouField()}
          {renderMessageField()}

          <button
            type="submit"
            className="py-3 flex justify-center items-center w-full md:w-1/2 bg-[#364708] text-white rounded mt-5 hover:bg-[#486601] hover:text-[#D9D98C] transition-colors duration-300"
          >
            Root for tomorrow! Join the Movement
          </button>
        </form>
      </div>
    </div>
  )
}

export default GetInvolved
