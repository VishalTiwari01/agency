import React from "react";
import cctv from "../../assets/electronic/cctv.png";
import fire from "../../assets/electronic/fire.png"
import gps from "../../assets/electronic/gps.png"
import Cantiliver from "../../assets/scraffolding/cantiliver.jpg";

const ElectronicSurveillance = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Main Content */}
      <div className="w-full md:w-3/4 p-6">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Electonic Surveillance</h1>
        <p className="text-gray-600 mb-4">
        Wireless monitoring is one of the most advanced security technologies in the world today. Electronic cameras such as CCTVs have proven to be excellent in tracing crime and curbing threats. Electronic Surveillance is necessary in many businesses and industries where physical or human injury is increasingly threatened.
        </p>
        <p className="text-gray-600 mb-4">
        Our security team tracks alien activities for customers by electronic means and for future assistance everything goes on record. We recommend trapunethical actions in MNCs, conferences, marriages, gatherings, releases, homes, etc. with electronic security systems.
        </p>

        {/* Services Section */}
        <h2 className="text-xl font-bold mb-4 text-gray-800">
        Our Some Electronic Surveillance Equipments are:        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {/* Service Cards */}
          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={fire}
              alt="Standard Hanging Scaffolding"
              className="rounded-md mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">
              Standard Hanging Scaffolding
            </h3>
          </div>

          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={cctv}
              alt="Cup-Lock Scaffolding"
              className="rounded-md mb-4"
            />
            <h3 className="font-bold text-lg text-gray-800">
              Cup-Lock Scaffolding
            </h3>
          </div>

          <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
            <img
              src={gps}
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

export default ElectronicSurveillance;
