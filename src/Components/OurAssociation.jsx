import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const association = [
  {
    url: "https://i.pinimg.com/736x/0f/f6/d5/0ff6d53477c298293576e50dd4fc0404.jpg",
    description: "RBI Certified Partner",
  },
  {
    url: "https://i.pinimg.com/736x/d8/08/50/d808507e1e4e979723c1ce4cef6a8927.jpg",
    description: "Secure Online Transactions",
  },
  {
    url: "https://i.pinimg.com/736x/f4/05/07/f40507fd7c0e2992b0e3a3556d776d43.jpg",
    description: "Insurance Company Tie-up",
  },
  {
    url: "https://i.pinimg.com/736x/26/85/72/268572f1962784e979e3bc977abb9eb9.jpg",
    description: "Top Credit Card Partner",
  },
  {
    url: "https://i.pinimg.com/736x/be/5c/75/be5c7582706652cd72993c99f5f08a5e.jpg",
    description: "Advanced Digital Banking",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const OurAssociation = () => {
  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-6">
        <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">Our Associations</h1>
      {association.length > 0 ? (
        <Slider className=" p-6 bg-indigo-500 rounded-2xl shadow-2xl" {...sliderSettings}>
          {association.map((aso, idx) => (
            <div key={idx} className="px-2 transition duration-300 hover:scale-105 ">
              <img
                src={aso.url}
                alt={aso.description}
                className="w-full h-[300px] object-cover rounded-lg shadow-md border border-gray-200"
              />
              <p className="text-center my-2 text-sm text-white font-medium">
                {aso.description}
              </p>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-center text-gray-600">Loading association...</p>
      )}
    </div>
  );
};

export default OurAssociation;
