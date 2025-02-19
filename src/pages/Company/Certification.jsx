import React from "react";
import Asso1 from '../../assets/certification/asso-2.jpg'
import Asso2 from '../../assets/certification/asso-3.jpg'
import Capsi from '../../assets/certification/capsi.jpg'
import Pasara from '../../assets/certification/pasara.jpg'
const Certification = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Certification
        </h2>
        <p className="text-gray-700 text-center leading-relaxed mb-8">
          We are a certified security agency with recognition from national & international bodies. 
          We follow all the security norms & guidelines set as per the Indian law.
          <br />
          Khyati Shield is under the Private Security Agencies (Regulation) Act, 2005, a licensed security agency. 
          We are a professional security agency with national and international recognition. 
          In accordance with the Indian Laws, we are strictly following all the safety standards and guidelines.
        </p>

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <img
            src={Asso1}
            alt="CAPSI"
            className="h-20 object-contain"
          />
          <img
            src={Asso2}
            alt="PSARA"
            className="h-20 object-contain"
          />
          <img
            src={Capsi}
            alt="APDI"
            className="h-20 object-contain"
          />
          <img
            src={Pasara}
            alt="WAD"
            className="h-20 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
