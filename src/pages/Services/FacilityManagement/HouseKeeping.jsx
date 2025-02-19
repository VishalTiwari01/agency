import React, { useState } from "react";
import PantyServices from "../FacilityManagement/PantyServices";
import WasteManegment from "../FacilityManagement/WasteManegment";
import PestControlServices from "../FacilityManagement/PestControlServices";
import PlumbingServices from "../FacilityManagement/PlumbingServices";
const HouseKeeping = () => {
  const menuItems = [
    {
      id: 1,
      name: "Housekeeping",
      content1:
        "We provide our security guards with professional on-the-job training and our best practices make us a special security agency.",
      content2:
        "Khyati Shield is a popular address for hiring security guards for houses, apartments, hospitals, colleges, and other commercial and non-commercial properties. From our range of services, we have appeared as a security guard specialist in Delhi NCR and PAN India.",
    },
    {
      id: 2,
      name: "Pantry Services",
      content1:
        "Our professional pantry service providers have unparalleled experience and are trained in different service dimensions. While performing routines like tending to VIPs, they are at absolute ease. Vending machine service, photocopier operator handling, messenger/errand boys handling. I understand the operating systems of time management and hospitality very well. We are trained in the establishment of pantry service areas in meetings and conferences.",
    },
    {
      id: 3,
      name: "Waste Management",
      content1:
        "We include extensive recycling, industry-specific waste management, sector and corporate sustainability solutions.",
      content2:
        "As an end-to-end solution provider, we provide our services for compliant waste segregation, storage, processing, recycling, and approved disposal.",
    },
    {
      id: 4,
      name: "Pest Control Servies",
      content1:
        "In order to nip the problem in the bud, we have priority pest control services. We are also able to address deep-rooted pest problems that require a comprehensive and specialized approach. We have the experience, resources, and ability to remove termites and pests in your office or business premises, no matter how severe and extensive their spread.",
      content2:
        "It is guaranteed that our pest control measures are effective against all types of pests. You can be sure of prompt and comprehensive protection when choosing MSG. Our experienced pest control technicians provide insured and guaranteed solutions for pest control that are designed to harm only pests, not humans, plants or animals.",
    },
    {
      id: 5,
      name: "Plumbing Services",
      content1:
        "Plumbing is a very important service for providing timely, courteous and professional service to your commercial plumbing needs. Overall, our mission is to ensure that our plumbers properly analyze a situation and treat it with the most up-to-date technology, equipment, and products available and provide customers with a level of plumbing service satisfaction.",
    },
  ];

  const services = [
    {
      category: "Daily cleaning",
      items: [
        "Interior and floor cleaning",
        "Washroom cleaning",
        "Dust control",
        "Removal of garbage",
        "Vacuum cleaning",
      ],
    },
    {
      category: "Periodical cleaning",
      items: [
        "Carpet cleaning",
        "Maintenance of floor",
        "Window glass cleaning",
        "Cobweb cleaning",
        "Cleaning of wall cladding",
        "Cleaning of fixture & fitting",
      ],
    },
    {
      category: "Special cleaning",
      items: [
        "Floor polishing",
        "Carpet/Sofa shampooing",
        "Façade/Glass cleaning",
        "High pressure cleaning of outside area",
        "Steam cleaning",
      ],
    },
    {
      category: "Segment cleaning",
      items: [
        "Post construction cleaning",
        "Marble crystallization and grinding polishing",
        "Industrial cleaning",
        "Spring cleaning",
      ],
    },
  ];

  const [selectedItem, setSelectedItem] = useState(menuItems[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu / Content Selector */}
          <div className="md:col-span-1 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Select Service</h2>
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer px-4 py-3 text-gray-800 hover:bg-orange-100 rounded-md transition ${
                    selectedItem.id === item.id
                      ? "bg-orange-500 text-white"
                      : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Display */}
          <div className="md:col-span-3">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {selectedItem.name}
            </h1>
            <p className="text-gray-700 leading-relaxed">
              {selectedItem.content1}
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              {selectedItem.content2}
            </p>

            {/* Services Section */}
            {selectedItem.id === 1 && (
              <>
                
                <div className="pt-4  mx-auto">
                  <h2 className="text-2xl font-bold border-b-4 border-orange-500 pb-2 mb-4">
                    KHYATI SHIELD HOUSEKEEPING SERVICE INCLUDE:
                  </h2>
                  {services.map((service, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {service.category}
                      </h3>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        {service.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            )}
            {selectedItem.id === 2 && (
              <>
                <PantyServices />
              </>
            )}
            {selectedItem.id === 3 && (
              <>
                <WasteManegment />
              </>
            )}
            {selectedItem.id === 4 && (
              <>
                <PestControlServices />
              </>
            )}
            {selectedItem.id === 5 && (
              <>
                <PlumbingServices />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HouseKeeping;
