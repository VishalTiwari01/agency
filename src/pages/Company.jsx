import React, { useState } from "react";
import CompanyImage from "../assets/service/consulting.gif";
import MissionImage from "../assets/service/delivery-boy.jpg";
import VisionImage from "../assets/service/recruitment.jpeg";
import QualityImage from "../assets/service/security-guard.jpg";

const CompanyIntro = () => {
  // Dynamic data for the sections
  const [sections] = useState([
    {
      title: "OUR MISSION",
      description:
        "Our mission is to achieve and sustain a leadership position in the industry by providing unmatched services to our customers and ensuring a secure, healthy, and productive environment.",
      image: MissionImage,
      details:
        "We aim to provide consistent, high-quality services while maintaining ethical and professional standards. Customer satisfaction is at the heart of our mission.",
    },
    {
      title: "OUR VISION",
      description:
        "We believe in security with a human touch. Our aim is to provide industry-leading security solutions while promoting a business culture founded on dedication, teamwork, and trust.",
      image: VisionImage,
      details:
        "Our vision emphasizes the use of innovative technologies and strategies to meet the dynamic needs of our clients and ensure safety and trust at every level.",
    },
    {
      title: "COMMITMENT TO QUALITY",
      description:
        "We are proud to mention that we are 100% compliant with PSARA and ISO 9001:2015. We deliver world-class solutions with a 99.9% customer retention rate.",
      image: QualityImage,
      details:
        "Our focus on quality management ensures that we consistently deliver superior solutions to meet evolving customer demands. Certification reflects our high standards.",
    },
  ]);

  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="bg-gray-100">
      {/* Company Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">COMPANY INTRO</h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Khyati Shield is one of today’s leading licensed security organizations providing a large number of corporate and personal services to a security consultancy, guarding, facility management, investigations, and intelligence.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              We are committed to providing solutions that solve the problems our customers face on a daily basis by offering a wide range of service solutions designed to meet their needs through specialized security services and facility management.
            </p>
          </div>
          {/* Image */}
          <div>
            <img
              src={CompanyImage}
              alt="Company Introduction"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Quality Section */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="text-center border rounded-lg p-4 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={section.image}
                alt={section.title}
                className="mx-auto w-24 h-24 mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {section.description}
              </p>

              {selectedSection === index && (
                <p className="mt-4 text-gray-600 text-sm sm:text-base">{section.details}</p>
              )}
              <button
                className="mt-4 text-orange-500 font-semibold hover:underline"
                onClick={() =>
                  setSelectedSection(selectedSection === index ? null : index)
                }
              >
                {selectedSection === index ? "Less" : "Learn More"}
              </button>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default CompanyIntro;
