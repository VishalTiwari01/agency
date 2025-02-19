import React from "react";
import Logo from "../assets/logo/logo.png";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0d1321] text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Contact Information */}
        <div>
          <img
            src={Logo} // Replace with the logo's path
            alt="Khyati Shield Logo"
            className="mb-4 w-32 mx-auto sm:mx-0"
          />
          <p className="mb-4 text-sm text-center sm:text-left">
            We believe in commitment to quality with its potential team that
            brings on board their expertise from security and surveillance
            industry with our trained security personnel. We ensure the safety
            of your land, property, assets, and you.
          </p>
          <div className="space-y-2 text-sm text-center sm:text-left">
            <p>
              <span className="font-bold">📍</span> G-84, Sector 63 Noida Uttar
              Pradesh India-201301
            </p>
            <p>
              <span className="font-bold">📞</span> +91-9599186595,
              +91-9599186598, +91-120 313 0555
            </p>
            <p>
              <span className="font-bold">✉️</span> Info@khyatishield.com
            </p>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-center sm:text-left">
            OUR IMPORTANT LINKS
          </h3>
          <ul className="space-y-2 text-sm text-center sm:text-left">
            <li className="cursor-pointer hover:text-orange-500 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              <Link to="/services">Services</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              <Link to="/about">About Us</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              <Link to="/career">Career</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-500 transition">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-center sm:text-left">
            NEWSLETTER
          </h3>
          <p className="text-sm mb-4 text-center sm:text-left">
            Subscribe to our latest newsletter.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <input
              type="email"
              placeholder="Enter email"
              className="p-2 rounded-l-md text-black outline-none"
            />
            <button className="bg-orange-500 text-white h-10 px-4 rounded-r-md hover:bg-orange-600 transition">
              SEND
            </button>
          </div>

          <h3 className="font-bold text-lg mt-6 text-center sm:text-left">
            FIND US IN
          </h3>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4">
            <Link
              href="#"
              className="text-3xl hover:text-orange-500 transition"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="#"
              className="text-3xl hover:text-orange-500 transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="text-3xl hover:text-orange-500 transition"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="text-3xl hover:text-orange-500 transition"
            >
              <CiLinkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-400">
        © 2025 Khyati Shield. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
