import React from "react";
import Hanging from "../../assets/scraffolding/hanging.jpg";
import CupLock from "../../assets/scraffolding/cuplock-scaffolding.jpg";
import Tube from "../../assets/scraffolding/tube-fitting.jpg";
import Cantiliver from "../../assets/scraffolding/cantiliver.jpg";

const Scaffolding = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Scaffolding</h1>
        <p className="text-gray-600 mb-4">
          We provide the best manpower services for Erection & Dismantle
          scaffolding with safety precautions. Every project involving work at
          heights is unique. Our workers are well-trained in the installation
          and inspection of scaffolding and suspended/swing stages, in addition
          to personal fall protection.
        </p>
        <p className="text-gray-600 mb-4">
          Every job in excess of 1.8 meters presents unique challenges for the
          protection of workers, the site, and the people nearby. Beyond our
          complex training programs for various equipment, nothing is more
          valuable than experience. Khytashield Ventures Pvt. Ltd. has been
          performing work safely at moderate, high, and ultra-high elevations
          for over 7 years.
        </p>

        {/* Services Section */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Our Scaffolding Services Include:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Service Cards */}
          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={Hanging}
              alt="Standard Hanging Scaffolding"
              className="rounded-md mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">
              Standard Hanging Scaffolding
            </h3>
          </div>

          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={CupLock}
              alt="Cup-Lock Scaffolding"
              className="rounded-md mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">
              Cup-Lock Scaffolding
            </h3>
          </div>

          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={Tube}
              alt="Tube Fitting"
              className="rounded-md mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">Tube Fitting</h3>
          </div>

          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={Cantiliver}
              alt="Cantilever Scaffolding"
              className="rounded-md mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">
              Cantilever Scaffolding
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scaffolding;
