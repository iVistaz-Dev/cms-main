"use client"

import { uploadIcon } from "@/utils/icon"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import axios from "axios"

const CareersForm = () => {
  const [formData, setFormData] = useState({
    your_name: "",
    position: "",
    email: "",
    file: null,
    consent: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false) // New state for submission status

  const validateForm = () => {
    let formErrors = {}
    if (!formData.your_name) formErrors.your_name = "Name is required"
    if (!formData.position) formErrors.position = "Position is required"
    if (!formData.email) {
      formErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid"
    }
    if (!formData.file) formErrors.file = "File is required"
    if (!formData.consent) formErrors.consent = "Consent is required"
    return formErrors
  }

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formErrors = validateForm()
    if (Object.keys(formErrors).length === 0) {
      try {
        const data = new FormData()
        data.append("your_name", formData.your_name)
        data.append("position", formData.position)
        data.append("email", formData.email)
        data.append("file", formData.file)
        data.append("consent", formData.consent)

        const response = await axios.post(
          "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10230/feedback",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )

        console.log("Form Data Submitted:", response.data)
        setFormData({
          your_name: "",
          position: "",
          email: "",
          file: null,
          consent: false,
        })
        setErrors({})
        setIsSubmitted(true) // Set to true on successful submission
      } catch (error) {
        console.error("There was an error submitting the form:", error)
        setErrors({
          submit:
            "There was an error submitting the form. Please try again later.",
        })
      }
    } else {
      setErrors(formErrors)
    }
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row w-full h-auto mt-10">
        <div className="w-full lg:w-1/4">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/careers/image01.png"
            width={399}
            height={500}
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="bg-cms-secondary-green w-full flex flex-col text-white py-12 lg:py-5 px-6 lg:px-10 justify-center">
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-cms-primary">
                Thank You!
              </h3>
              <p className="text-lg text-[#404040] mt-4">
                Your application has been submitted successfully. We will get
                back to you soon.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-xl lg:text-2xl font-semibold text-cms-primary">
                Apply Now
              </h3>
              <p className="text-lg text-[#404040]">
                We will get back to you as soon as we have any suitable openings
                that might arise at CMS.
              </p>

              <form
                className="max-w-screen-lg mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-[#404040]"
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    type="text"
                    name="your_name"
                    placeholder="Name"
                    className="p-2 border border-gray-300 rounded w-full"
                    value={formData.your_name}
                    onChange={handleChange}
                  />
                  {errors.your_name && (
                    <p className="text-red-500 text-sm">{errors.your_name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="p-2 border border-gray-300 rounded w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                <div>
                  <select
                    name="position"
                    className="p-2 border border-gray-300 rounded w-full"
                    value={formData.position}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select Department
                    </option>
                    <option value="livelihood">Livelihood</option>
                    <option value="health">Health</option>
                    <option value="climateChange">Climate Change</option>
                    <option value="wellbeingForWorkforce">
                      Wellbeing for Workforce
                    </option>
                    <option value="esg">ESG</option>
                    <option value="designForSuccess">Design for Success</option>
                    <option value="evidenceForChange">
                      Evidence for Change
                    </option>
                    <option value="implementForScale">
                      Implement for Scale
                    </option>
                    <option value="catalystLivelihoodVentures">
                      Catalyst Livelihood Ventures
                    </option>
                    <option value="businessCatalyst">Business Catalyst</option>
                    <option value="shoonya">Shoonya</option>
                    <option value="ship">SHIP</option>
                    <option value="marketingAndCommunication">
                      Marketing and Communication
                    </option>
                    <option value="mealAssociate">MEAL Associate</option>
                  </select>
                  {errors.position && (
                    <p className="text-red-500 text-sm">{errors.position}</p>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="absolute inset-0 w-full h-full opacity-0 z-50"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <div className="border border-gray-300 bg-white rounded w-full text-[#404040]">
                    <p className="flex items-center gap-2 p-2">
                      {formData.file ? formData.file.name : "Upload CV"}
                      {!formData.file && uploadIcon}
                    </p>
                  </div>
                  {errors.file && (
                    <p className="text-red-500 text-sm">{errors.file}</p>
                  )}
                </div>

                <div className="col-span-full flex items-start mt-4">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-1 mr-2"
                    checked={formData.consent}
                    onChange={handleChange}
                  />
                  <div>
                    <label className="text-sm">
                      I consent to having this website store my submitted
                      information so they can respond to my inquiry. See our{" "}
                      <Link href="/privacy-policy" className="text-blue-500">
                        privacy policy
                      </Link>{" "}
                      to learn more about how we use data.
                    </label>
                    {errors.consent && (
                      <p className="text-red-500 text-sm">{errors.consent}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-cms-primary-green text-white py-2 rounded mt-4"
                >
                  Send
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default CareersForm
