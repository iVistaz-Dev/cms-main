"use client"

import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import Link from "next/link"
import React, { useState } from "react"
import axios from "axios"
import NextSeo from "@/components/Seo/Seo"

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validate = () => {
    let formErrors = {}

    if (!formData.name) formErrors.name = "Name is required"
    if (!formData.email) {
      formErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid"
    }
    if (!formData.message) formErrors.message = "Message is required"
    if (!formData.consent) formErrors.consent = "Consent is required"

    setErrors(formErrors)
    return Object.keys(formErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    try {
      const response = await axios.post(
        "https://docs.cms.org.in/wp-json/contact-form-7/v1/contact-forms/10427/feedback",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      setSubmitMessage(
        "Thank you for your message. We will get back to you soon."
      )
      setFormData({
        name: "",
        email: "",
        message: "",
        consent: false,
      })
      setErrors({})
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <NextSeo
        title="Contact Us"
        description="Contact us through message and email"
        path="https://cms.org.in/contact-us"
        metaImage=""
      />
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/cms-origin/cms-website/public/contactUs/banner.png')] flex flex-col justify-center md:justify-end h-[420px] md:h-[480px] bg-cover bg-center py-10 md:py-16">
        <Header />
        <div className="ps-2 md:ps-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-center sm:text-left">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full h-auto lg:h-[700px]">
        <div className="bg-cms-primary w-full lg:w-1/2 flex flex-col text-white py-12 lg:py-24 px-6 lg:px-20">
          <h3 className="text-xl lg:text-2xl font-semibold">Head Office</h3>
          <p className="text-base lg:text-lg mt-8">
            Catalyst Management Services Pvt. Ltd., #25, 4th Floor, AECS Layout,
            RMV 2nd Stage, Ashwathnagar, Bangalore – 560 094
          </p>
        </div>

        <div className="bg-cms-secondary-green w-full lg:w-1/2 flex flex-col text-white py-12 lg:py-24 px-6 lg:px-20">
          <h3 className="text-xl lg:text-2xl font-semibold text-cms-primary">
            Leave us a message <br /> and we’ll get in touch with you
          </h3>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mt-8 lg:mt-10 text-black"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
                rows="4"
              />
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>
            <div className="mb-4 flex items-start">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2 mt-2"
              />
              <label className="text-base lg:text-lg text-[#404040]">
                I consent to having this website store my submitted information
                so they can respond to my enquiry.
                <br />
                See our{" "}
                <Link href="/privacy-policy" className="text-cms-primary">
                  privacy policy
                </Link>{" "}
                to learn more about how we use data.
              </label>
              {errors.consent && (
                <p className="text-red-500">{errors.consent}</p>
              )}
            </div>
            <button
              type="submit"
              className="border border-cms-primary text-[#1A1A1A] text-base sm:text-lg rounded px-4 sm:px-6 py-2 transition duration-300 ease-in-out hover:bg-cms-primary hover:text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            {submitMessage && <p className="mt-4">{submitMessage}</p>}
          </form>
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </>
  )
}

export default page
