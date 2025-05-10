import React from "react";
import {
  FaFacebookF,
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#121829] text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Name */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                alt="Logo"
                className="h-8 mr-3"
              />
              <span className="text-2xl font-semibold">ऋण Samadhan</span>
            </a>
            <p className="text-sm text-gray-400">
              Your trusted partner for financial consultation and loan guidance.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-yellow-500">
              About Us
            </h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Samadhan</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">How to get loan</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-yellow-500">
              Follow Us
            </h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Youtube</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-yellow-500">
              Legal
            </h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-yellow-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-white font-medium">ऋण Samadhan</span>. All rights reserved.
          </span>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-yellow-400"><FaDiscord /></a>
            <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
            <a href="#" className="hover:text-yellow-400"><FaInstagram /></a>
            <a href="#" className="hover:text-yellow-400"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
