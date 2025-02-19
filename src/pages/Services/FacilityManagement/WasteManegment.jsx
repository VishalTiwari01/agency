import React from 'react'
import { FaBuilding, FaIndustry, FaHome, FaFileAlt, FaGift, FaUtensils } from "react-icons/fa";

const WasteManegment = () => {
  const services = [
    {
      icon: <FaBuilding />,
      title: "COMMERCIAL WASTE COLLECTION",
      description: "Eco Wise provides quality collection, recycling, and disposal services to both large and small businesses.",
    },
    {
      icon: <FaIndustry />,
      title: "INDUSTRIAL WASTE COLLECTION",
      description: "Eco Wise customizes its services to meet your needs and assists you in managing your waste.",
      highlight: true,
    },
    {
      icon: <FaHome />,
      title: "RESIDENTIAL WASTE COLLECTION",
      description: "Eco Wise provides Door-to-Door collection of MSW in Delhi/NCR.",
    },
    {
      icon: <FaFileAlt />,
      title: "DOCUMENT DESTRUCTION",
      description: "Eco Wise provides secure & confidential On-site / Off-site Document destruction Services.",
    },
    {
      icon: <FaGift />,
      title: "PRODUCT DESTRUCTION",
      description: 'Eco Wise introduces “Product Destruction & Recycling Services”.',
    },
    {
      icon: <FaUtensils />,
      title: "FOOD WASTE PROCESSING",
      description: "Specialized recycling services to help lessen your environmental impact.",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl shadow-lg flex items-start gap-4 bg-gray-100 transition duration-300 hover:bg-orange-500 hover:text-white"
        >
          <div className="text-4xl">{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="mt-2">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default WasteManegment