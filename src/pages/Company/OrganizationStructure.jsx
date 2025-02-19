import React from "react";
import Org from '../../assets/certification/org-struct.png'
const OrganizationStructure = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Organization Structure
        </h2>

        {/* image */}
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <img src={Org} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default OrganizationStructure;
