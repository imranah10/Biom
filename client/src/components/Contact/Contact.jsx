import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { PiBuildingOfficeLight } from "react-icons/pi";
function Contact() {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
       {/* Contact Info Section */}
        <div className="lg:w-1/2 flex flex-col gap-8 my-15">
          <div>
            <h1 className="flex items-center gap-2 text-xl font-semibold text-indigo-700">
              <FaPhoneAlt /> Contact Us
            </h1>
            <p className="mt-2 text-gray-700">
              We’re here to help you with all your loan and financial
              consultancy needs. Reach out to us — our expert team will get
              back to you promptly.
            </p>
          </div>

          <div>
            <h2 className="flex items-center gap-2 text-xl font-semibold text-indigo-700">
              <PiBuildingOfficeLight /> Office Address
            </h2>
            <p className="text-gray-700 mt-1">
              Biom Business Consultants Pvt. Ltd.
              <br />
              207, IInd Floor, K-10 Tower,
              <br />
              Feroze Gandhi Market, Ludhiana – 141001, Punjab
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              📱 Phone & Email
            </h2>
            <p className="flex items-center gap-2 text-gray-700">
              <FaPhoneAlt /> +91 99883 14040
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaEnvelope /> bbc.businessconsultants@gmail.com
            </p>
          </div>
          </div>

          {/* Contact Form Section */}
          <div className="lg:w-1/2 bg-zinc-100 p-8 rounded-lg shadow-md">
            <form className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 hover:outline-indigo-300 focus:outline-indigo-600"
                  placeholder="Your Name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 hover:outline-indigo-300 focus:outline-indigo-600"
                  placeholder="Your Email"
                />
              </div>

              {/* Mobile */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Mobile
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full mt-1 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 hover:outline-indigo-300 focus:outline-indigo-600"
                  placeholder="Your Mobile Number"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full mt-1 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 hover:outline-indigo-300 focus:outline-indigo-600"
                  placeholder="Subject"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full mt-1 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 shadow-sm outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 hover:outline-indigo-300 focus:outline-indigo-600"
                  placeholder="Your Message"
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-md border-2 border-indigo-600  bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-white hover:text-indigo-700 hover:border-indigo-600 transition cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
