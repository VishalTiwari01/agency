import React, { useState } from "react";
import Logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronUp, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(null); // State for nested dropdown

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    setOpenNestedDropdown(null); // Close nested dropdown when parent dropdown is toggled
  };

  const toggleNestedDropdown = (dropdown) => {
    setOpenNestedDropdown(openNestedDropdown === dropdown ? null : dropdown);
  };

  const handleMenuClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenNestedDropdown(null);
  };

  return (
    <nav className="bg-[#0d1321] text-white  top-0 left-0 right-0 z-50 mb-2">
      <div className="container md:flex md:justify-between mx-auto px-4 md:px-12 py-4 items-center ">
        {/* Logo */}

        <div className="left flex justify-between">
          <Link to="/" className="text-2xl font-bold" onClick={handleMenuClick}>
            <img src={Logo} alt="Logo" className="h-10 inline" />
          </Link>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="right flex">
          {/* Menu */}

          <ul
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } md:flex md:space-x-8 md:items-center mt-4 md:mt-0`}
          >
            {/* Regular Links */}
            <li className="relative group">
              <Link
                to="/"
                className="block px-12 py-2 hover:bg-gray-700"
                onClick={handleMenuClick}
              >
                Home
              </Link>
            </li>

            {/* Dropdown - Company */}
            <li className="relative group">
              <button
                className="flex justify-between items-center w-full px-12 py-2 hover:bg-gray-700 md:hover:bg-transparent"
                onClick={() => toggleDropdown("company")}
              >
                Company
                <span className="ml-2">
                  {openDropdown === "company" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </span>
              </button>
              <ul
                className={`${
                  openDropdown === "company" ? "block" : "hidden"
                } w-48 md:absolute md:top-full md:left-0 md:bg-[#0d1321] md:shadow-lg space-y-2 md:space-y-0`}
              >
                <li>
                  <Link
                    to="/Company"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={handleMenuClick}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages/Company/certification"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={handleMenuClick}
                  >
                    Certification
                  </Link>
                  <Link
                    to="/pages/Company/director-message"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={handleMenuClick}
                  >
                    Director Message
                  </Link>
                  <Link
                    to="/pages/Company/organizationStructure"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={handleMenuClick}
                  >
                    Organization Structure
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown - Services */}
            <li className="relative group">
              <button
                className="flex justify-between items-center w-full px-12 py-2 hover:bg-gray-700 md:hover:bg-transparent"
                onClick={() => toggleDropdown("services")}
              >
                Services
                <span className="ml-2">
                  {openDropdown === "services" ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </span>
              </button>
              <ul
                className={`${
                  openDropdown === "services" ? "block" : "hidden"
                } md:absolute md:top-full md:left-0 md:bg-[#0d1321] md:shadow-lg space-y-2 md:space-y-0`}
              >
                <li>
                  <Link
                    to="/services/scaffolding"
                    className="w-52 block px-4 py-2 hover:bg-gray-700"
                    onClick={handleMenuClick}
                  >
                    Scaffolding
                  </Link>
                </li>
                {/* Nested Dropdown - Consulting */}
                <li className="relative group">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                    onClick={() => toggleNestedDropdown("consulting")}
                  >
                    Consulting
                    <span className="ml-2">
                      {openNestedDropdown === "consulting" ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </button>
                  <ul
                    className={`${
                      openNestedDropdown === "consulting" ? "block" : "hidden"
                    } md:absolute md:top-full md:left-full md:bg-[#0d1321] space-y-2`}
                  >
                    <li>
                      <Link
                        to="/services/consulting/it-non-it"
                        className="w-48 block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        IT & Non IT
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/consulting/bpo"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        BPO
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/consulting/technical-sales"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Technical Sales
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/consulting/travel-tourism"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Travels and Tourism
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/consulting/realestate"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        RealEstate
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/consulting/agriculture"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Agriculture
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Nested Dropdown - Services */}
                <li className="relative group">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                    onClick={() => toggleNestedDropdown("Security")}
                  >
                    Security Sercice
                    <span className="ml-2">
                      {openNestedDropdown === "Security" ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </button>
                  <ul
                    className={`${
                      openNestedDropdown === "Security" ? "block" : "hidden"
                    } md:absolute md:top-full md:left-full md:bg-[#0d1321] space-y-2`}
                  >
                    <li>
                      <Link
                        to="/services/SecurityServices/security-guard"
                        onClick={handleMenuClick}
                        className="w-52 block px-4 py-1 hover:bg-gray-700"
                      >
                        Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/personal-security-guard"
                        onClick={handleMenuClick}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Personal Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/event-security-guard"
                        onClick={handleMenuClick}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Event Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/bankatm-security-guard"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Bank/Atm Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/commercial-security-guard"
                        onClick={handleMenuClick}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Commercial Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/healthcare-security-guard"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Healthcare Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/hotel-security-guard"
                        onClick={handleMenuClick}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Hotel Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/metro-rail-security-guard"
                        onClick={handleMenuClick}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Metro/Rail Security Guard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/SecurityServices/education-institutions-security"
                        onClick={handleMenuClick}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Education Institutions Security
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/services/electronic-surveillance"
                    className="block px-4 py-2 hover:bg-gray-700"
                    onClick={handleMenuClick}
                  >
                    Electronic Surveillance
                  </Link>
                </li>
                <li className="relative group">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                    onClick={() => toggleNestedDropdown("Facility")}
                  >
                    Facility Management
                    <span className="ml-2">
                      {openNestedDropdown === "Facility" ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </button>
                  <ul
                    className={`${
                      openNestedDropdown === "Facility" ? "block" : "hidden"
                    } md:absolute md:top-full md:left-full md:bg-[#0d1321] space-y-2`}
                  >
                    <li>
                      <Link
                        to="/services/FacilityManagement/houskeeping"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Housekeeping
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/FacilityManagement/Pantry-Services"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Pantry Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/FacilityManagement/Waste-Management"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Waste Management
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/FacilityManagement/PestControl-Services"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Pest Control Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/FacilityManagement/Plumbing-Services"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Plumbing Services
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="relative group">
                  <button
                    className="flex justify-between items-center w-full px-4 py-2 hover:bg-gray-700"
                    onClick={() => toggleNestedDropdown("Logistics")}
                  >
                    Logistics
                    <span className="ml-2">
                      {openNestedDropdown === "Logistics" ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </span>
                  </button>
                  <ul
                    className={`${
                      openNestedDropdown === "Logistics" ? "block" : "hidden"
                    } md:absolute md:top-full md:left-full md:bg-[#0d1321] space-y-2`}
                  >
                    <li>
                      <Link
                        to="/services/logistics/cash-van-logistics"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Cash Van Logistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/Logistics/delivery-boy-logistics"
                        className="block px-4 py-2 hover:bg-gray-700"
                        onClick={handleMenuClick}
                      >
                        Delivery Boy Logistics
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/career"
                className="block px-12 py-2 hover:bg-gray-700"
                onClick={handleMenuClick}
              >
                Career
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
