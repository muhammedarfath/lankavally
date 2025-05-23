"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomeSecFour() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

const experiences = [
  {
    title: "KIDS PARADISE",
    image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043554/DSC00227_liiaer.jpg",
    description: "A dedicated play area where children can enjoy safe and fun activities amidst nature, creating joyful vacation memories for the whole family.",
  },
  {
    title: "SERENE WATERFALLS",
    image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043561/DSC00210_amjigv.jpg",
    description: "Our beautifully crafted artificial waterfalls create a tranquil ambiance, offering perfect spots for relaxation and picturesque moments.",
  },
  {
    title: "RESORT AMBIENCE",
    image: "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044970/DSC00155_fth1r2.jpg",
    description: "Experience the unique charm of Lanka Valley - where traditional Kerala hospitality meets modern comforts in a breathtaking lakeside setting.",
  },
];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="flex flex-col justify-center">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide text-center md:text-left mb-6">
            AN IDYLLIC ESCAPE
            <br />
            BY THE WATERS
          </h2>
          <div className="w-16 h-0.5 bg-black mx-auto md:mx-0 mb-6"></div>
          <p className="text-gray-700 text-center md:text-left max-w-md">
            Discover a peaceful retreat nestled along Kerala's largest
            freshwater lake. Wake to birdsong, sleep under starlit skies
            reflected on pristine waters, and experience authentic Kerala
            hospitality amidst lush greenery.
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="border border-black px-10 py-3 font-light tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
          >
            EXPLORE RESORT
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
            <div className="relative overflow-hidden mb-6 ">
              <img
                src={experience.image || "/placeholder.svg"}
                alt={experience.title}
                className="object-cover"
              />
            </div>
            <h3 className="font-serif text-xl tracking-widest mb-4">
              {experience.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              {experience.description}
            </p>
            <Link to="/imagegrid">
              <motion.div
                className="flex items-center text-sm font-light tracking-wider cursor-pointer group"
                animate={{
                  x: hoveredIndex === index ? 5 : 0,
                }}
              >
                EXPLORE
                <BsArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
