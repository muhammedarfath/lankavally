import { Link } from "react-router-dom";

export default function HomeSecThree() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-serif tracking-wider">ONE&ONLY SPA</h2>
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
              
              className="object-cover filter grayscale"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-800">
              Indulge in pampering wellness on our Spa Island. A destination in its own right, it is the only spa in
              Africa to use ESPA products and have a Bastien Gonzalez Mani:Pedi:Cure Studio and carries French luxury
              brand Biologique Recherche.
            </p>

            <div>
              <Link
                to="/spa"
                className="inline-block border border-gray-800 px-12 py-3 text-center text-gray-800 hover:bg-gray-100 transition-colors duration-300"
              >
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
