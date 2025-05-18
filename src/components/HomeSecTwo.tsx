import { Link } from "react-router-dom"

export default function HomeSecTwo() {
  return (
    <section className="py-20 bg-[#f5f0eb]">
      {/* Heading and Description */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl font-light text-gray-800 mb-8">Mastering the art of you</h2>

        <div className="max-w-3xl mx-auto space-y-4 text-gray-600">
          <p>
            This is the moment. It is here, in the outstanding surroundings of your private Ultima Collection property,
            that you've found it. A new level of enjoyment.
          </p>
          <p>
            It is these moments that set Ultima Collection apart: moments of joy in your own personal world, where
            relaxation and revelry know no bounds.
          </p>
          <p>It's what we do best: Mastering the art of you.</p>
        </div>

        {/* Collection Button */}
        <div className="mt-10">
          <Link
            to="/collection"
            className="inline-block border border-gray-400 px-8 py-3 text-sm uppercase tracking-wider text-gray-600 hover:bg-gray-100 transition"
          >
            Our Collection
          </Link>
        </div>
      </div>

      {/* Property Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Villas & Chalets */}
          <div className="group">
            <div className="relative h-[400px] overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043534/DSC00115_x4b7or.jpg"
                alt="Luxury villa on a coastal cliff"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-2">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Private Homes</p>
              <h3 className="text-2xl font-light text-gray-800 mb-2">Villas & Chalets</h3>
              <p className="text-gray-600">
                Spellbinding properties in Europe's most astonishing locations, from Mediterranean coastlines to Alpine
                peaks.
              </p>
            </div>
          </div>

          {/* Residences */}
          <div className="group">
            <div className="relative h-[400px] overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043531/DSC00121_wpg8y4.jpg"
                alt="Luxury terrace with seating and ocean view"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-2">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Private Homes</p>
              <h3 className="text-2xl font-light text-gray-800 mb-2">Residences</h3>
              <p className="text-gray-600">
                Our awe-inspiring, fully-serviced residences let you kick back and enjoy the ultimate in luxury living.
              </p>
            </div>
          </div>

          {/* Boutique Hotels */}
          <div className="group">
            <div className="relative h-[400px] overflow-hidden mb-4">
              <img
                src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043556/DSC00057_yjhh1z.jpg"
                alt="Luxury chalet hotel in the mountains"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="px-2">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Hotels</p>
              <h3 className="text-2xl font-light text-gray-800 mb-2">Boutique Hotels</h3>
              <p className="text-gray-600">
                Our beautiful hotels in Gstaad and Courchevel, defined by exceptional service and unparalleled
                amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
