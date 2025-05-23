"use client"

import { useState, useEffect } from "react"
import HomeSecTwo from "../components/HomeSecTwo";
import HomeSecThree from "../components/HomeSecThree";
import HomeSecFour from "../components/HomeSecFour";
import { Link } from "react-router-dom";

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)

  const slides = [
    {
      title: "An Abode of Happiness Awaits at the Water's Edge",
      description: "Experience serene lakeside living at Lanka Valley Resort, nestled by Kerala's largest freshwater lake.",
    },
    {
      title: "Greenery Outside, Comfort Inside",
      description: "Cottage-style accommodations with unhindered balcony views connecting you with nature throughout your stay.",
    },
    {
      title: "Gathering Happiness Together",
      description: "Ideal venue for events and celebrations, with outdoor spaces for DJ parties, campfires, and scenic boat rides.",
    },
  ]

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 2000) // Change slide every 5 seconds

    return () => clearInterval(interval) // Clean up on component unmount
  }, [slides.length])

  return (
    <div className="relative w-full">
      {/* Fixed Header */}

      <div className="relative h-[70vh] w-full">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/drs7gt4vm/video/upload/v1747382516/LANKA_VALLEY_MASTER_cfavxt.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content */}
        <div className="absolute bottom-1/4 left-0 z-20 container mx-auto px-4">
          <div className="max-w-2xl">
            <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-light mb-4 leading-tight">
              {slides[activeSlide].title}
            </h2>
            <p className="text-white text-sm md:text-base lg:text-lg mb-8">
              {slides[activeSlide].description}
            </p>
            <Link to="/contact">
              <button className="border cursor-pointer border-white text-white px-8 md:px-12 py-2 md:py-3 uppercase tracking-wider hover:bg-white hover:text-black transition text-sm md:text-base">
                Book Now
              </button>
            </Link>
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
        <h2 className="text-3xl font-light mb-8">
          AN ABODE OF HAPPINESS AT THE WATER'S EDGE
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          Nestled by the serene shores of Kerala's largest freshwater lake, Lanka Valley Resort offers an idyllic escape where lush greenery meets tranquil waters. Located just a short drive from the Kollam-Theni National Highway in Peruvelikkara, our resort blends peaceful relaxation with authentic Kerala experiences and warm hospitality.
        </p>
      </div>
      <HomeSecTwo/>
      <HomeSecThree/>
      <HomeSecFour/>
    </div>
  )
}