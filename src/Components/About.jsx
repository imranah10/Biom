import React from 'react';
import {
  MapPin, Target, Eye, Briefcase, BadgeCheck, Lightbulb, UserCheck
} from 'lucide-react';
import { FaRocket, FaBullseye } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen bg-[#f9fafb] py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <section className="bg-[#1a1f2b] text-white rounded-2xl shadow-lg overflow-hidden mb-16">
        <div className="text-center py-12 px-6 sm:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Biom Business Consultants Pvt. Ltd.
          </h1>
          <div className="inline-block bg-yellow-400 text-[#1a1f2b] font-semibold px-6 py-2 rounded-full text-lg">
            ऋण Samadhan
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
            Financial growth made accessible, reliable, and tailored — led by experienced professionals with real banking insights.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
          <p className="text-gray-700">
            <strong>Biom Business Consultants Pvt. Ltd.</strong>, also known as <span className="text-yellow-600 font-semibold">'ऋण Samadhan'</span>, was founded by 
            <strong> CA Sourabh Maini</strong>. We are a professional financial consultancy with a deep understanding of banking, credit, and underwriting processes.
          </p>
          <div className="flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
            <MapPin className="text-blue-600 w-6 h-6 mt-1 mr-4" />
            <p>
              Based in <strong>Ludhiana</strong>, we assist individuals and businesses across India in accessing funding, investment advisory, and financial growth solutions.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-xl bg-gradient-to-tr from-[#1a1f2b] to-[#11161f] text-white shadow-md space-y-4 border-l-4 border-yellow-400">
          <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
          <p>
            We simplify the borrowing experience through expert consultation and bridge the gap between lenders and borrowers with trust and integrity.
          </p>
          <p>
            Our vision goes beyond lending — we aim to build financial confidence in every client.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <div className="text-center bg-[#1a1f2b] py-10 px-6 sm:px-12">
          <FaBullseye className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Our Mission & Vision</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12">
          {/* Mission */}
          <div className="bg-blue-50 p-6 rounded-xl border-t-4 border-blue-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="ml-4 text-xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 mb-4">
              To deliver tailored financial solutions with professional insight, empowering individuals and MSMEs to grow.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-blue-500 mr-2" />
                Tailored Solutions
              </div>
              <div className="flex items-center">
                <BadgeCheck className="w-5 h-5 text-blue-500 mr-2" />
                Expert Advisory
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-yellow-50 p-6 rounded-xl border-t-4 border-yellow-500 shadow-md">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <Eye className="text-white w-6 h-6" />
              </div>
              <h3 className="ml-4 text-xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 mb-4">
              To be India’s most trusted financial consultancy by redefining customer experience with innovation and transparency.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
              <div className="flex items-center">
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-2" />
                Innovation
              </div>
              <div className="flex items-center">
                <UserCheck className="w-5 h-5 text-yellow-500 mr-2" />
                Customer First
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Timeline */}
      <section className="mt-16">
        <div className="bg-gray-100 p-6 sm:p-10 rounded-xl shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Target className="text-blue-600 w-6 h-6" />
              </div>
              <p className="mt-2 text-sm font-medium">Mission</p>
            </div>
            <div className="hidden sm:block w-12 h-1 bg-gray-400 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 p-4 rounded-full">
                <Eye className="text-yellow-600 w-6 h-6" />
              </div>
              <p className="mt-2 text-sm font-medium">Vision</p>
            </div>
            <div className="hidden sm:block w-12 h-1 bg-gray-400 mx-2"></div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full">
                <Briefcase className="text-green-600 w-6 h-6" />
              </div>
              <p className="mt-2 text-sm font-medium">Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <div className="mt-20 bg-[#1a1f2b] text-white rounded-2xl shadow-lg p-8 sm:p-10 text-center">
        <div className="flex items-center justify-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400">Let’s Grow Together</h2>
        </div>
        <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-6">
          We don’t just provide consultancy — we partner in your financial success. With <span className="text-yellow-400 font-semibold">ऋण Samadhan</span>, you get a team that understands the credit language of banks and translates your profile into a powerful proposal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base text-gray-300">
          <span className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-yellow-400" />
            Serving PAN India
          </span>
          <span className="hidden sm:inline-block w-[1px] h-5 bg-gray-500"></span>
          <span className="flex items-center gap-2">
            <FiPhone className="w-5 h-5 text-yellow-400" />
            <a href="tel:+919988314040" className="hover:text-yellow-400 transition">+91 99883 14040</a>
          </span>
          <span className="hidden sm:inline-block w-[1px] h-5 bg-gray-500"></span>
          <span className="flex items-center gap-2">
            <FiMail className="w-5 h-5 text-yellow-400" />
            <a href="mailto:bbc.businessconsultants@gmail.com" className="hover:text-yellow-400 transition">bbc.businessconsultants@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
}
