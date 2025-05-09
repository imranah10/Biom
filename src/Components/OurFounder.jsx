import React from "react";

const OurFounder = () => {
  return (
    <section className="bg-[#15201d] rounded-md shadow-xl py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Founder Image */}
        <div className="flex justify-center ">
          <img
            src="https://images.pexels.com/photos/6325979/pexels-photo-6325979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Founder"
            className="border-1 border-white rounded-2xl shadow-2xl h-[400px] w-[500px] object-cover"
          />
        </div>

        {/* Founder Details */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-white shadow-lg border-1 border-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold text-yellow-600 mb-2">Our Founder</h2>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Mr. XYZ</h3>
          <p className="leading-relaxed text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue,
            euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi,
            non fermentum diam nisl sit amet erat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
