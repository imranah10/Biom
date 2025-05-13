import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const LoanBenefits = () => {
  const benefits = [
    "Compare loan options side-by-side",
    "Instant eligibility check & personalized report",
    "Apply in minutes with minimal documentation",
    "Pan India network of Banks & NBFCs",
  ];

  return (
    <section className="w-full bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start text-lg text-gray-800 bg-white shadow-md rounded-lg p-5"
            >
              <FaCheckCircle className="text-green-600 mt-1 mr-3" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LoanBenefits;
