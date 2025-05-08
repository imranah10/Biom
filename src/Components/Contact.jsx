import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { PiBuildingOfficeLight } from "react-icons/pi";

function Contact() {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Contact Info Section */}
        <div className="lg:w-1/2 flex flex-col gap-10">
          {/* Heading */}
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-bold text-indigo-700">
              <FaPhoneAlt className="text-indigo-600" /> Contact Us
            </h1>
            <p className="mt-3 text-gray-700 text-base leading-relaxed">
              We’re here to help with all your loan and financial consultancy needs. 
              Reach out to us — our expert team will get back to you promptly.
            </p>
          </div>

          {/* Office Address */}
          <div>
            <h2 className="flex items-center gap-3 text-xl font-semibold text-indigo-700">
              <PiBuildingOfficeLight className="text-indigo-600" /> Office Address
            </h2>
            <p className="text-gray-700 mt-2 leading-relaxed">
              <span className="font-medium">Biom Business Consultants Pvt. Ltd.</span><br />
              207, IInd Floor, K-10 Tower,<br />
              Feroze Gandhi Market, Ludhiana – 141001, Punjab
            </p>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-3">📱 Phone & Email</h2>
            <p className="flex items-center gap-3 text-gray-700 mb-2">
              <FaPhoneAlt className="text-indigo-600" /> +91 99883 14040
            </p>
            <p className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-indigo-600" /> bbc.businessconsultants@gmail.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg max-w-full lg:max-w-xl w-full">
          <form className="flex flex-col gap-6 w-full">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                required
                className="w-full mt-2 rounded-md bg-gray-50 px-4 py-2.5 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 transition"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="w-full mt-2 rounded-md bg-gray-50 px-4 py-2.5 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 transition"
                placeholder="Your Email"
              />
            </div>

            {/* Mobile */}
            <div>
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-900">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                autoComplete="tel"
                className="w-full mt-2 rounded-md bg-gray-50 px-4 py-2.5 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 transition"
                placeholder="Your Mobile Number"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-900">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full mt-2 rounded-md bg-gray-50 px-4 py-2.5 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 transition"
                placeholder="Subject"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full mt-2 rounded-md bg-gray-50 px-4 py-2.5 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-500 transition"
                placeholder="Your Message"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 transition border border-transparent hover:border-indigo-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
