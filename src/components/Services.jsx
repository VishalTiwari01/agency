import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import carvan from "../assets/service/cash-van.jpg";
import deliveryBoy from "../assets/service/delivery-boy.jpg";
import electronic from "../assets/service/electronic-surveillances.jpg";
import Facility from "../assets/service/facility-management.jpg";
import recruitment from "../assets/service/recruitment.jpeg";
import scaffolding from "../assets/service/Scaffolding.jpg";
import security from "../assets/service/security-guard.jpg";
import consulting from "../assets/service/consulting.gif";

const Services = () => {
  const cards = [
    {
      title: "Scaffolding",
      description:
        "We are into providing best manpower services for Eraction & Dismantal...",
      image: scaffolding,
      link: "/services/scaffolding", // Define link for detailed page
    },
    {
      title: "Consulting",
      description:
        "The right recruitment, we know is a treasure that will follow our values everywhere.",
      image: consulting,
      link: "/services/consulting/it-non-it", // Define link for detailed page
    },
    {
      title: "Guarding",
      description:
        "Guards, patrol and inspect property to protect gainst fire, theft, vandalism, terrorism...",
      image: security,
      link: "/services/SecurityServices/security-guard", // Define link for detailed page
    },
    {
      title: "Electronic Surveillance",
      description:
        "Electronic Surveillance enables us to monitor the behavior, activities people over...",
      image: electronic,
      link: "/services/electronic-surveillance", // Define link for detailed page
    },
    {
      title: "Facility Management",
      description:
        "Khyatishield housekeeping services create the most hygienic and healthy...",
      image: Facility,
      link: "/services/FacilityManagement/houskeeping", // Define link for detailed page
    },
    {
      title: "Cash Van Logistics",
      description:
        "Cash Logistics is the actual transfer and storage on behalf of banks and ...",
      image: carvan,
      link: "/services/logistics/cash-van-logistics", // Define link for detailed page
    },
    {
      title: "Delivery Boy Logistics",
      description:
        "We're bringing CAKE, Pizza, etc. amazing home delivery & much more to make...",
      image: deliveryBoy,
      link: "/services/Logistics/delivery-boy-logistics", // Define link for detailed page
    },
    {
      title: "Recruitment & Training",
      description:
        "The selection process consists of check and verification of education, ...",
      image: recruitment,
      link: "/services/recruitment-training", // Define link for detailed page
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div>
        <span className="flex font-bold text-orange-500">What we Offer</span>
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{card.description}</p>
              {/* Use Link to navigate to the detailed page */}
              <Link to={card.link}>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
