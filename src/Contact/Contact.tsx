"use client"

import { useState } from "react"

export default function Contact() {
  const [selectedTab, setSelectedTab] = useState("feedback")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: "+91",
    phone: "",
    date: "",
    hotel: "",
    comments: "",
    terms: false
  })

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        <div className="">
            <img src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043507/DSC00075_ogsnnv.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-8">CONTACT</h1>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide relative flex items-center">
              <span className="inline-block w-12 h-px bg-amber-700 mr-4"></span>
              GET IN TOUCH
              <span className="inline-block w-12 h-px bg-amber-700 ml-4"></span>
            </h2>
          </div>

          {/* Contact Form Section */}
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                  <h3 className="text-2xl md:text-3xl text-gray-800 font-light tracking-wide mb-6 relative flex items-center">
                    <span className="inline-block w-8 h-px bg-amber-700 mr-3"></span>
                    CONTACT LANKA VALLEY RESORTS
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Peruvelikkara, Punnamoodu, Sasthamcotta, Kollam<br />
                    Pin-690521 Kerala, India
                  </p>
                  <p className="text-gray-600 mb-4">
                    Phone: 0476 2080101, 2080202, 2080303<br />
                    Mobile: +91 9746007947
                  </p>
                  <p className="text-gray-600">
                    Email: info@lankavalleyresorts.com<br />
                    reservations@lankavalleyresorts.com
                  </p>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full">
                    <div className="flex border-b border-gray-200 mb-8">
                      <button
                        className={`py-2 px-4 font-medium ${selectedTab === "feedback" ? "text-amber-700 border-b-2 border-amber-700" : "text-gray-500"}`}
                        onClick={() => setSelectedTab("feedback")}
                      >
                        FEEDBACK
                      </button>
                      <button
                        className={`py-2 px-4 font-medium ${selectedTab === "suggestion" ? "text-amber-700 border-b-2 border-amber-700" : "text-gray-500"}`}
                        onClick={() => setSelectedTab("suggestion")}
                      >
                        SUGGESTION
                      </button>
                    </div>

                    {selectedTab === "feedback" && (
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name*"
                              className="w-full border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email*"
                              className="w-full border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex">
                            <select
                              name="phoneCode"
                              className="w-[80px] border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2 mr-2"
                              value={formData.phoneCode}
                              onChange={handleChange}
                            >
                              <option value="+91">+91</option>
                              <option value="+1">+1</option>
                              <option value="+44">+44</option>
                              <option value="+61">+61</option>
                            </select>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Mobile number*"
                              className="flex-1 border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2 relative">
                            <input
                              type="text"
                              name="date"
                              placeholder="Date of Stay"
                              className="w-full border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2 pr-8"
                              value={formData.date}
                              onChange={handleChange}
                            />
                            <svg 
                              className="absolute right-2 top-2 h-5 w-5 text-gray-500" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-2 relative">
                          <input
                            type="text"
                            name="hotel"
                            placeholder="Hotel"
                            className="w-full border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2 pl-8"
                            value={formData.hotel}
                            onChange={handleChange}
                          />
                          <svg 
                            className="absolute left-0 top-2 h-5 w-5 text-gray-500" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>

                        <div className="space-y-2">
                          <textarea
                            name="comments"
                            placeholder="Comments"
                            className="w-full min-h-[100px] border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                            value={formData.comments}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="h-4 w-4 text-amber-700 focus:ring-amber-700 border-gray-300 rounded"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="terms" className="text-sm text-gray-700">
                            I have read and agree to the{" "}
                            <a href="#" className="text-amber-700 hover:underline">
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-amber-700 hover:underline">
                              Terms & Conditions
                            </a>
                          </label>
                        </div>

                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-3 rounded-md transition duration-300"
                          >
                            SUBMIT
                          </button>
                        </div>
                      </form>
                    )}

                    {selectedTab === "suggestion" && (
                      <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <input
                              type="text"
                              name="name"
                              placeholder="Name*"
                              className="w-full border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                              required
                              value={formData.name}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2">
                            <input
                              type="email"
                              name="email"
                              placeholder="Email*"
                              className="w-full border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                              required
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="flex">
                            <select
                              name="phoneCode"
                              className="w-[80px] border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2 mr-2"
                              value={formData.phoneCode}
                              onChange={handleChange}
                            >
                              <option value="+91">+91</option>
                              <option value="+1">+1</option>
                              <option value="+44">+44</option>
                              <option value="+61">+61</option>
                            </select>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="Mobile number*"
                              className="flex-1 border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                              required
                              value={formData.phone}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="space-y-2 relative">
                            <input
                              type="text"
                              name="hotel"
                              placeholder="Hotel"
                              className="w-full border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2 pl-8"
                              value={formData.hotel}
                              onChange={handleChange}
                            />
                            <svg 
                              className="absolute left-0 top-2 h-5 w-5 text-gray-500" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <textarea
                            name="comments"
                            placeholder="Your Suggestion"
                            className="w-full min-h-[100px] border-0 border-b border-gray-300 focus:border-amber-700 focus:outline-none px-0 py-2"
                            value={formData.comments}
                            onChange={handleChange}
                          ></textarea>
                        </div>

                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="terms2"
                            name="terms"
                            className="h-4 w-4 text-amber-700 focus:ring-amber-700 border-gray-300 rounded"
                            checked={formData.terms}
                            onChange={handleChange}
                            required
                          />
                          <label htmlFor="terms2" className="text-sm text-gray-700">
                            I have read and agree to the{" "}
                            <a href="#" className="text-amber-700 hover:underline">
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-amber-700 hover:underline">
                              Terms & Conditions
                            </a>
                          </label>
                        </div>

                        <div className="flex justify-center">
                          <button
                            type="submit"
                            className="bg-amber-700 hover:bg-amber-800 text-white px-12 py-3 rounded-md transition duration-300"
                          >
                            SUBMIT
                          </button>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Worldwide Reservation Section */}
      <div className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-light tracking-wide relative flex items-center">
              <span className="inline-block w-12 h-px bg-amber-700 mr-4"></span>
              CONTACT DETAILS
              <span className="inline-block w-12 h-px bg-amber-700 ml-4"></span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-200">
                <div className="font-medium text-gray-700 mb-2 md:mb-0">Address</div>
                <div className="text-gray-700 text-right">
                  Peruvelikkara, Punnamoodu, Sasthamcotta,<br />
                  Kollam - 690521, Kerala, India
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-200">
                <div className="font-medium text-gray-700 mb-2 md:mb-0">Phone</div>
                <div className="text-gray-700">
                  0476 2080101<br />
                  0476 2080202<br />
                  0476 2080303
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-200">
                <div className="font-medium text-gray-700 mb-2 md:mb-0">Mobile</div>
                <div className="text-gray-700">+91 9746007947</div>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-200">
                <div className="font-medium text-gray-700 mb-2 md:mb-0">Email</div>
                <div className="text-gray-700">
                  info@lankavalleyresorts.com<br />
                  reservations@lankavalleyresorts.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}