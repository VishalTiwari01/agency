import React from "react";
import {
  FaBox,
  FaFileAlt,
  FaPizzaSlice,
  FaShoppingCart,
  FaMoneyBillWave,
  FaGift,
  FaUtensils,
  FaTshirt,
  FaTruck,
} from "react-icons/fa";

const DeliveryBoyLogistics = () => {
  const section = {
    title: "DELIVERY BOY LOGISTICS",
    subtitle: "OUR DELIVERY SERVICES:",
    description: [
      "We value your chances & quality times, that's why we're bringing CAKE, Pizza, Money, BOUQUET's amazing home delivery & much more to make your day special.",
    ],
    services: [
      { name: "Parcel Delivery", icon: <FaBox /> },
      { name: "Document Delivery", icon: <FaFileAlt /> },
      { name: "Cake & Pizza Delivery", icon: <FaPizzaSlice /> },
      { name: "Cash Delivery", icon: <FaMoneyBillWave /> },
      { name: "Food Delivery", icon: <FaUtensils /> },
      { name: "Flower Delivery", icon: <FaGift /> },
      { name: "Grocery Delivery", icon: <FaShoppingCart /> },
      { name: "Gift Delivery", icon: <FaGift /> },
      { name: "Clothes Delivery", icon: <FaTshirt /> },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-orange-500 pl-2 flex items-center">
          <FaTruck className="mr-2" /> {section.title}
        </h2>
        {section.description.map((para, idx) => (
          <p key={idx} className="mt-4 text-gray-700">
            {para}
          </p>
        ))}
        <h3 className="mt-6 text-xl font-bold text-blue-900 border-l-4 border-orange-500 pl-2">
          {section.subtitle}
        </h3>
        <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
          {section.services.map((service, idx) => (
            <li
              key={idx}
              className="p-4 bg-gray-200 rounded-lg text-center font-semibold flex items-center justify-center space-x-2 transition-transform transform hover:scale-105 hover:bg-orange-500 hover:text-white shadow-md"
            >
              <span className="sm:text-3xl md:text-4xl">{service.icon}</span>
              <span>{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default DeliveryBoyLogistics;
