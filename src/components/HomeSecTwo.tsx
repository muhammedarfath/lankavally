import { Link } from "react-router-dom"

export default function HomeSecTwo() {
  return (
    <section className="py-20 bg-[#f5f0eb]">
      {/* Heading and Description */}
      <div className="container mx-auto px-4 text-center mb-16">
      <h2 className="text-4xl font-light text-gray-800 mb-8">An Oasis of Contentment and Recreation</h2>

      <div className="max-w-3xl mx-auto space-y-4 text-gray-600">
        <p>
          Nestled by breathtaking serenity at Sasthamcotta Lake, Lanka Valley Resort takes you on a restful getaway where you can truly relax and unwind.
        </p>
        <p>
          Wake up to morning ragas of cooing birds, sleep gazing at stars reflecting on pristine waters, and experience authentic Kerala hospitality.
        </p>
        <p>Your idyllic escape by Kerala's largest freshwater lake awaits.</p>
      </div>

        {/* Collection Button */}
        <div className="mt-10">
          <Link
            to="/imagegrid"
            className="border border-black px-10 py-3 font-light tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
          >
Explore Resort          </Link>
        </div>
      </div>

      {/* Property Grid */}
<div className="container mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Dining Experience */}
    <div className="group">
      <div className="relative h-[400px] overflow-hidden mb-4">
        <img
          src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043534/DSC00115_x4b7or.jpg"
          alt="Lanka Valley Resort multi-cuisine restaurant"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Culinary Delights</p>
        <h3 className="text-2xl font-light text-gray-800 mb-2">Dining Experience</h3>
        <p className="text-gray-600">
          Savor authentic Kerala cuisine and global flavors at our exotic restaurants, where every meal is a gastronomic journey.
        </p>
      </div>
    </div>

    {/* Warm Hospitality */}
    <div className="group">
      <div className="relative h-[400px] overflow-hidden mb-4">
        <img
          src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043531/DSC00121_wpg8y4.jpg"
          alt="Friendly reception at Lanka Valley Resort"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Our Service</p>
        <h3 className="text-2xl font-light text-gray-800 mb-2">Warm Hospitality</h3>
        <p className="text-gray-600">
          Experience genuine Kerala hospitality from our friendly staff, dedicated to making your stay memorable and comfortable.
        </p>
      </div>
    </div>

    {/* Architectural Beauty */}
    <div className="group">
      <div className="relative h-[400px] overflow-hidden mb-4">
        <img
          src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043556/DSC00057_yjhh1z.jpg"
          alt="Aesthetic architecture of Lanka Valley Resort"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="px-2">
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Design</p>
        <h3 className="text-2xl font-light text-gray-800 mb-2">Architectural Beauty</h3>
        <p className="text-gray-600">
          Discover our resort's stunning architecture that blends traditional Kerala elements with modern aesthetics.
        </p>
      </div>
    </div>
  </div>
</div>
    </section>
  )
}
