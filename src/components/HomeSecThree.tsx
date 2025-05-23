import { Link } from "react-router-dom";

export default function HomeSecThree() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif tracking-wider">
            {" "}
            Sleep Under Stars, Wake to Birdsong
          </h2>
          <div className="relative h-[550px] w-full overflow-hidden">
            <img
              src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043509/DSC00050_qnk85w.jpg"
              alt="One&Only Spa entrance with stone walls and modern architecture"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between">
          <div className="relative h-[350px] w-full overflow-hidden mb-8">
            <img
              src="https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043519/DSC00044_gsa25i.jpg"
              alt="Relaxing spa shower experience"
              className="object-cover filter "
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-800">
              Experience serene comfort in our thoughtfully designed
              accommodations. Lanka Valley Resort offers charming cottage-style
              villas with private balconies overlooking the pristine
              Sasthamcotta Lake. Choose from our Pool Suite Villas, Garden
              Villas, or Riviera Villas - each featuring top-notch amenities and
              designed to keep you connected with nature throughout your stay.
            </p>

            <div>
              <Link
                to="/imagegrid"
                className="border border-black px-10 py-3 font-light tracking-widest text-sm hover:bg-black hover:text-white transition-colors duration-300"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
