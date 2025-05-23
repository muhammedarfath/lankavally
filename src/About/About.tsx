import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='w-full'>
      {/* Hero Image Section */}
      <div className='relative w-full h-[60vh] md:h-[80vh] overflow-hidden'>
        <img 
          src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043531/DSC00121_wpg8y4.jpg" 
          alt="Lanka Valley Resort lakeside view" 
          className='w-full h-full object-cover object-center'
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#f5f0eb] text-[#333333]">
        {/* Hero Text Section */}
        <section className="py-12 md:py-20 px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 md:mb-8">
            An Oasis of Contentment by Kerala's Largest Freshwater Lake
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Nestled along the pristine shores of Sasthamcotta Lake, Lanka Valley Resort offers an idyllic escape where lush greenery meets tranquil waters. Our resort blends traditional Kerala hospitality with modern comforts, creating unforgettable experiences in one of South India's most scenic locations.
          </p>
        </section>

        {/* Illustrious Locations Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className='order-2 md:order-1'>
            <h2 className="text-2xl md:text-3xl font-light mb-6">Discover Our Scenic Surroundings</h2>
            <div className="space-y-4">
              <p className="text-sm md:text-base leading-relaxed">
                Perfectly located near Sasthamcotta's freshwater lake, our resort serves as an ideal base to explore Kerala's natural wonders. Visit nearby attractions including Mundrothuruthu (12km), Ashtamudi Lake (20km), and the adventurous Jatayupara (44km).
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Each destination around us showcases Kerala's unique blend of natural beauty, cultural heritage, and spiritual significance, offering diverse experiences for every traveler.
              </p>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] order-1 md:order-2">
            <img
              src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043544/DSC00217_f6m2o2.jpg"
              alt="Scenic view of Lanka Valley Resort surroundings"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        </section>

        {/* Moments of Joy Section */}
        <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px]">
            <img
              src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043550/DSC00214_codohp.jpg"
              alt="Guests enjoying Lanka Valley Resort"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-light mb-6">Creating Happy Memories</h2>
            <div className="space-y-4">
              <p className="text-sm md:text-base leading-relaxed">
                Our dedicated team ensures every moment at Lanka Valley Resort becomes a cherished memory. From scenic boat rides on the lake to cultural experiences, we curate authentic Kerala moments.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Whether it's gathering around for outdoor events, trying your hand at fish catching, or simply relaxing by the water's edge, we foster connections with nature and loved ones.
              </p>
            </div>
          </div>
        </section>

        {/* Outstanding Spaces Section */}
        <section className="py-12 md:py-16 px-4 bg-[#333333] text-white">
          <div className="max-w-4xl mx-auto border border-gray-600 p-6 md:p-12 lg:p-16 text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-8">Exceptional Accommodations</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-sm md:text-base leading-relaxed">
                Our cottage-style villas - Pool Suite, Garden, and Riviera categories - are designed to offer unhindered balcony views, keeping you connected with nature throughout your stay.
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                Each villa combines traditional Kerala architecture with modern amenities, creating private sanctuaries where you can sleep gazing at stars reflected on the lake and wake to morning birdsong.
              </p>
            </div>
            <Link to="/imagegrid">
            
            <button className="mt-8 md:mt-10 bg-transparent border border-white text-white px-6 py-2 md:px-8 md:py-3 uppercase text-xs md:text-sm tracking-wider hover:bg-white hover:text-[#333333] transition-colors duration-300">
              Our Villas
            </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About