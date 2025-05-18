"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BsArrowRight } from "react-icons/bs"

export default function HomeSecFour() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const experiences = [
    {
      title: "WILDERNESS",
      image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043554/DSC00227_liiaer.jpg",
      description: "Discover untouched landscapes where mountains meet the ocean. Explore hiking trails and pristine beaches that showcase nature's finest artistry.",
    },
    {
      title: "HERITAGE",
      image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043561/DSC00210_amjigv.jpg",
      description: "Immerse yourself in centuries of history through architecture, museums, and vibrant local communities that tell stories of resilience and triumph.",
    },
    {
      title: "GASTRONOMY",
      image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044970/DSC00155_fth1r2.jpg",
      description: "Embark on a sensory journey through award-winning restaurants, local markets, and vineyards that celebrate the region's diverse culinary traditions.",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-center md:text-left mb-6">
            JOURNEY BEYOND
            <br />
            THE ORDINARY
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto md:mx-0 mb-6"></div>
          <p className="text-gray-700 text-center md:text-left max-w-md">
            We invite you to experience the extraordinary blend of natural wonders, 
            rich cultural heritage, and exquisite flavors that define our coastal paradise. 
            Each moment crafted with intention and authenticity.
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-black px-10 py-3 font-light tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
          >
            DISCOVER
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <motion.div 
            key={index}
            className="flex flex-col"
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="relative overflow-hidden mb-6 aspect-[3/4]">
              <img 
                src={experience.image || "/placeholder.svg"} 
                alt={experience.title}
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-xl tracking-widest mb-4">{experience.title}</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{experience.description}</p>
            <motion.div 
              className="flex items-center text-sm font-light tracking-wider cursor-pointer group"
              animate={{ 
                x: hoveredIndex === index ? 5 : 0 
              }}
            >
              EXPLORE
              <BsArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
