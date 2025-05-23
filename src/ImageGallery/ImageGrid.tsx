import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ImageData {
  imgelink: string;
  title: string;
  description: string;
}

export function ImageGrid() {
  const data: ImageData[] = [
    // 1. Artificial Waterfalls
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044971/DSC00156_ddojgo.jpg",
      title: "Serene Waterfalls",
      description:
        "Our beautifully crafted artificial waterfalls create a tranquil resort ambiance",
    },
    // 2. Kids playground near waterfalls
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044970/DSC00155_fth1r2.jpg",
      title: "Children's Play Area",
      description: "Safe and fun playground nestled near our scenic waterfalls",
    },
    // 3-4. Resort photos
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044970/DSC00143_yy52zt.jpg",
      title: "Lanka Valley Resort",
      description:
        "Aerial view of our lakeside paradise surrounded by lush greenery",
    },
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044970/DSC00061_tzxusc.jpg",
      title: "Resort Landscape",
      description:
        "Traditional Kerala architecture blending with natural beauty",
    },
    // 5. Dining section
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044968/DSC00090_ei3583.jpg",
      title: "Multi-Cuisine Restaurant",
      description:
        "Savor authentic Kerala flavors and international dishes with lake views",
    },
    // 6-8. Room photos
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043500/DSC00006_fkwuco.jpg",
      title: "Pool Suite Villa",
      description: "Luxurious accommodation with private pool and balcony",
    },
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043502/DSC00043_j5l7rq.jpg",
      title: "Garden Villa",
      description: "Charming cottage surrounded by tropical greenery",
    },
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044967/DSC00043_ugzehz.jpg",
      title: "Riviera Villa",
      description: "Waterfront suite with panoramic lake views",
    },
    // 9. Bathroom
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044968/DSC00012_ktnlk3.jpg",
      title: "Luxury Bathroom",
      description:
        "Elegant bathroom with modern amenities and natural elements",
    },
    // 10. Room
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747044967/DSC00002_dzxwdj.jpg",
      title: "Deluxe Room",
      description: "Comfortable retreat with traditional Kerala decor",
    },
    // 11. Aesthetic resort view
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043566/DSC00056_xpsdml.jpg",
      title: "Resort Ambience",
      description: "Evening view showcasing our tranquil lakeside setting",
    },
    // 12. Waterfalls
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043561/DSC00210_amjigv.jpg",
      title: "Water Feature",
      description: "Soothing waterfall enhancing our tropical landscape",
    },
    // 13-14. Kids play tools
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043555/DSC00204_mlwj0y.jpg",
      title: "Children's Activities",
      description: "Fun playground equipment for our youngest guests",
    },
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043548/DSC00221_e9uubk.jpg",
      title: "Kids Zone",
      description: "Safe play area with engaging activities",
    },
    // 15. Outdoor dining hall
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043541/DSC00230_oedib7.jpg",
      title: "Al Fresco Dining",
      description: "Open-air restaurant with lake breezes and scenic views",
    },
    // 16. Play tool
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043537/DSC00200_g7biqv.jpg",
      title: "Playground Equipment",
      description: "Recreational facilities for children's enjoyment",
    },
    // 17-18. Reception
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043536/DSC00125_h7xtgf.jpg",
      title: "Welcome Lounge",
      description: "Our reception area with traditional Kerala hospitality",
    },
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043533/DSC00123_dzaxji.jpg",
      title: "Resort Reception",
      description: "Friendly staff ready to assist you throughout your stay",
    },
    // 19-20. Meeting halls
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043532/DSC00268_z6x5jn.jpg",
      title: "Conference Hall",
      description: "Spacious venue for corporate events and meetings",
    },
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043530/DSC00265_v0okp3.jpg",
      title: "Banquet Facility",
      description: "Elegant space for weddings and special occasions",
    },
    // 21-22. Room furniture
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043525/DSC00008_xphrmb.jpg",
      title: "Luxury Furnishings",
      description:
        "Handcrafted furniture blending modern comfort with local artistry",
    },
    {
      imgelink:
        "https://res.cloudinary.com/drs7gt4vm/image/upload/v1747043510/DSC00005_msnwff.jpg",
      title: "Room Interior",
      description:
        "Elegantly appointed accommodations with Kerala-inspired decor",
    },
  ];

  const [active, setActive] = useState<ImageData>(data[0]);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

      useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    let interval: number;

    if (autoPlay) {
      interval = setInterval(() => {
        setActive((prevActive) => {
          const currentIndex = data.findIndex(
            (item) => item.imgelink === prevActive.imgelink
          );
          const nextIndex = (currentIndex + 1) % data.length;
          return data[nextIndex];
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay, data]);

  const handleThumbnailClick = (item: ImageData) => {
    setActive(item);
    // Reset autoplay timer when user manually selects an image
    setAutoPlay(false);
    const timeout = setTimeout(() => setAutoPlay(true), 5000); // Resume autoplay after 5 seconds

    return () => clearTimeout(timeout);
  };

  return (
    <>
      <div className="flex flex-col bg-[#333333] min-h-screen">
        {/* Main Image with Overlay Text */}
        <div className="flex-1 relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={active.imgelink}
            alt={active.title}
          />

          {/* Text Overlay */}
          <div className="absolute inset-0  flex items-center p-4 md:p-8 lg:p-12">
            <div className="max-w-2xl text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 md:mb-4">
                {active.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mb-4 md:mb-6">
                {active.description}
              </p>
              <button className="bg-transparent border border-white text-white px-4 py-2 md:px-6 md:py-3 uppercase text-xs md:text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="h-24 bg-[#333333] flex justify-center items-center p-2 overflow-x-auto">
          <div className="flex space-x-2 h-full">
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(item)}
                className={`h-full transition-all duration-300 flex-shrink-0 ${
                  active.imgelink === item.imgelink
                    ? "ring-4 ring-white"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={item.imgelink}
                  className="h-full w-auto object-cover"
                  alt={`Thumbnail ${item.title}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16 px-4 bg-[#f5f0eb] text-[#333333]">
        <div className="max-w-4xl mx-auto border border-gray-600 p-6 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-8">
            Exceptional Accommodations
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-sm md:text-base leading-relaxed">
              Our cottage-style villas - Pool Suite, Garden, and Riviera
              categories - are designed with unhindered balcony views to keep
              you connected with nature throughout your stay. Each combines
              traditional Kerala charm with modern comforts.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Wake to morning ragas of cooing birds and sleep gazing at stars
              reflecting on pristine waters. From luxurious pool villas to
              charming garden cottages, every space offers a unique way to
              experience Kerala's natural beauty.
            </p>
          </div>
          <Link to="/about">
          
          <button className="mt-8 md:mt-10 bg-[#333333] border border-white text-white px-6 py-2 md:px-8 md:py-3 uppercase text-xs md:text-sm tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
            About Villas
          </button>
          </Link>
        </div>
      </section>
    </>
  );
}
