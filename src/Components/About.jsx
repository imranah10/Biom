import React from 'react';
import { MapPin, Target, Eye, Briefcase, BadgeCheck, Lightbulb, UserCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* About us  */}
      <div className="rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-500 p-8 md:p-12 text-center relative">
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              About Biom Business Consultants Pvt. Ltd.
            </h1>
            <div className="inline-block bg-yellow-300 rounded-full px-6 py-2 mb-6">
              <span className="text-xl font-bold text-gray-800">ऋण Samadhan</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6 sm:p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Who We Are</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-700">
            <div className="space-y-6">
              <p>
                <span className="font-bold text-gray-800">Biom Business Consultants Pvt. Ltd.</span> is a professionally managed financial consultancy firm having brand name
                <span className="text-xl mx-2 font-semibold text-yellow-600">'ऋण Samadhan'</span>,
                founded by <span className="font-bold text-gray-800">CA Sourabh Maini</span>, a seasoned expert in banking, finance, and credit underwriting.
              </p>
              <div className="flex items-start space-x-4 bg-blue-50 p-6 rounded-xl shadow-md">
                <MapPin className="text-blue-600 w-6 h-6 flex-shrink-0 mt-1" />
                <p>
                  Headquartered in <span className="font-semibold">Ludhiana</span>, BBC empowers individuals and businesses across India by providing strategic funding solutions, financial consulting, and investment advisory services.
                </p>
              </div>
            </div>

            <div className="text-white bg-indigo-500 p-6 rounded-xl shadow-md border-l-4 border-yellow-300 hover:bg-blue-700 cursor-pointer transition transform duration-300 hover:scale-105">
              <p>
                With deep roots in the banking ecosystem and unmatched domain expertise, we bridge the gap between borrowers and lenders by offering seamless, reliable, and personalized loan facilitation services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission & Vision */}
      <div className="mt-16 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-500 p-8 md:p-12 text-center relative">
          <div className="relative z-10">
            <div className="flex flex-col items-center justify-center mb-4">
              <Target className="w-12 h-12 text-yellow-300 mb-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-white">🎯 Our Mission & Vision</h1>
            </div>
            <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white p-6 sm:p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-lg border-t-4">
              <div className="flex items-center mb-6">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver tailored financial solutions through professional expertise, enabling individuals and MSMEs to thrive and grow.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Briefcase className="text-blue-500 w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Tailored Solutions</span>
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="text-blue-500 w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Professional Expertise</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-yellow-50 rounded-xl p-6 shadow-lg border-t-4 border-yellow-500">
              <div className="flex items-center mb-6">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 ml-4">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be India's most trusted financial consultancy firm — transforming the borrowing experience through innovation, transparency, and customer-first service.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Lightbulb className="text-yellow-500 w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Innovation</span>
                </div>
                <div className="flex items-center">
                  <UserCheck className="text-yellow-500 w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">Customer-First</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="mt-12 bg-gray-50 rounded-xl p-6 shadow-md">
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <span className="mt-2 font-medium text-sm">Mission</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-gray-300"></div>
                <div className="w-12 h-1 bg-gray-300"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-yellow-600" />
                </div>
                <span className="mt-2 font-medium text-sm">Vision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-gray-300"></div>
                <div className="w-12 h-1 bg-gray-300"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <span className="mt-2 font-medium text-sm">Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
