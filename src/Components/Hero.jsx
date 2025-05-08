import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    experience: "",
    gst: "",
    gstVintage: "",
    turnover: "",
    profit: "",
    capital: "",
    cibil: "",
    properties: "",
    loans: "",
    bouncing12: "",
    bouncing6: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  const content = (
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent flex items-center justify-center z-10 px-4 sm:px-8 text-center">
      <div className="max-w-2xl text-white space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
          "Find the Right Lender with Ease."
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl">
          At{" "}
          <span className="text-yellow-400 font-semibold">
            Biom Business Consultants Pvt Ltd
          </span>
          , we simplify your funding journey by matching you with the best-fit loan options from top Banks and NBFCs across India.
        </p>
      </div>
    </div>
  );
  

  return (
    <>
      {/* Hero Carousel */}
      <div className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          {[
            "https://images.pexels.com/photos/5816307/pexels-photo-5816307.jpeg",
            "https://images.pexels.com/photos/7731323/pexels-photo-7731323.jpeg",
            "https://images.pexels.com/photos/3831185/pexels-photo-3831185.jpeg",
          ].map((src, i) => (
            <div key={i} className="relative">
              <img
                className="h-[60vh] sm:h-[70vh] md:h-[90vh] w-full object-cover"
                src={src}
                alt={`Slide ${i + 1}`}
              />
              {content}
            </div>
          ))}
        </Carousel>
      </div>

      {/* Calculator Button */}
      <div className="flex items-center justify-center py-5 bg-gray-100">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-semibold"
        >
          BI Rating Calculator
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto py-10">
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl mx-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-2xl text-gray-600 hover:text-black"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-4">
                BI Rating Calculator
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Age", name: "age" },
                  { label: "Business Experience (Years)", name: "experience" },
                  { label: "GST Registered?", name: "gst" },
                  { label: "GST Vintage (Years)", name: "gstVintage" },
                  { label: "Turnover", name: "turnover" },
                  { label: "Net Profit", name: "profit" },
                  { label: "Capital Invested", name: "capital" },
                  { label: "CIBIL Score", name: "cibil" },
                  { label: "Number of Properties", name: "properties" },
                  { label: "Number of Loans", name: "loans" },
                  { label: "Cheque Bounce (Last 12 Months)", name: "bouncing12" },
                  { label: "Cheque Bounce (Last 6 Months)", name: "bouncing6" },
                ].map(({ label, name }) => (
                  <div key={name}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {label}
                    </label>
                    <input
                      type="text"
                      name={name}
                      value={formData[name]}
                      onChange={handleChange}
                      className="w-full border rounded-md px-3 py-2"
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
