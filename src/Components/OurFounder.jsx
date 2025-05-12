import React from "react";

const OurFounder = () => {
  return (
    <section className="bg-[#15201d] rounded-md shadow-xl py-10 px-5 m-6 mt-0">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center ">
        {/* Founder Image */}
        <div className="flex justify-center ">
          <img
            src="https://images.pexels.com/photos/6325979/pexels-photo-6325979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Founder"
            className="border-1 border-white rounded-2xl shadow-2xl h-[350px] w-[500px] object-cover"
          />
        </div>

        {/* Founder Details */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 text-white shadow-lg border-1 border-white hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <h2 className="text-3xl font-bold text-yellow-600 mb-2">
            Our Founder
          </h2>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            {" "}
            CA Sourabh Maini
          </h3>
          <p className="leading-relaxed text-black text-md">
            A qualified <b> Chartered Accountant</b> and a{" "}
            <b>Certified Valuer </b>, CA Sourabh Maini brings over
            <b> 13 years of leadership experience</b> in the finance and banking
            sector. He has held senior credit roles at major institutions like
            HDFC Bank, Shriram Finance (as State Credit Head – DVP), Tata
            Capital, and more.
          </p>{" "}
          <br />
          <p className="leading-relaxed text-black">
            He is also the author of the Amazon bestseller “Corporate Stress
            Management”, a transformative book addressing corporate burnout and
            personal well-being. His unique blend of technical mastery and human
            insight sets the foundation for ‘Biom Business Consultants’ values
            and client-centric approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFounder;
