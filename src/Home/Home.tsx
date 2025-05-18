"use client"

import { useState } from "react"

import HomeSecTwo from "../components/HomeSecTwo";
import HomeSecThree from "../components/HomeSecThree";
import HomeSecFour from "../components/HomeSecFour";

export default function Home() {
 
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "SPACIOUS ROOMS AND SUITES",
      description:
        "Unlock the captivating secrets of South Africa from One&Only Cape Town, our cosmopolitan hideaway with the city's most generous rooms and suites.",
      image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043531/DSC00121_wpg8y4.jpg",
    },
    {
      title: "EXCEPTIONAL DINING EXPERIENCES",
      description:
        "Indulge in world-class cuisine crafted by renowned chefs using the finest local ingredients in our signature restaurants.",
      image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043534/DSC00115_x4b7or.jpg",
    },
    {
      title: "UNFORGETTABLE MOMENTS",
      description:
        "Create lasting memories with curated experiences that showcase the beauty and culture of Cape Town and its surroundings.",
      image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043556/DSC00057_yjhh1z.jpg",
    },
  ]

  return (
    <div className="relative w-full">
      {/* Fixed Header */}


      {/* Rest of your component remains the same */}
      {/* Hero Banner */}
      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover grayscale"
        >
          <source src="https://res.cloudinary.com/drs7gt4vm/video/upload/v1747382516/LANKA_VALLEY_MASTER_cfavxt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="absolute bottom-1/4 left-0 z-20 container mx-auto px-4">
          <div className="max-w-lg">
            <h2 className="text-white text-4xl font-light mb-4">{slides[activeSlide].title}</h2>
            <p className="text-white mb-8">{slides[activeSlide].description}</p>
            <button className="border border-white text-white px-12 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition">
              Reserve
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${activeSlide === index ? "bg-white" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Captivating Stage Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-light mb-8">A CAPTIVATING STAGE FOR ESCAPISM</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Situated on the vibrant Victoria & Alfred Waterfront, One&Only Cape Town places you in the beating heart of
          the Mother City. Our exceptional one-off resort blends a rare sense of seclusion with cosmopolitan energy and
          the city's most iconic sights right on your doorstep.
        </p>
      </div>
      <HomeSecTwo/>
      <HomeSecThree/>
      <HomeSecFour/>
    </div>
  )
}