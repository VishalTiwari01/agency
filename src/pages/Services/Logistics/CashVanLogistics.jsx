import React from 'react'
import { FaTruck } from "react-icons/fa";

const CashVanLogistics=()=> {
  const section = {
    title: "CASH VAN LOGISTICS",
    subtitle: "THE MODIFIED CASH VAN PROVIDED BY US SHOULD CONFORM TO THE FOLLOWING STANDARDS:-",
    description: [
      "Cash Logistics is the actual transfer and storage on behalf of banks and the replenishment of the ATM of money and other valuables. We provide updated cash van according to RBI Rule.",
      "Our cash vans are installed with vehicle tracking system and are monitored and tracked by highly professional staff.",
      "Each cash van is provided with Driver, Armed Security Guards one or two depending on cash carrying limit with single/double barrel guns with valid licenses and ATM Officer/Custodians."
    ],
    standards: [
      "Make: LMV.",
      "Cash Van have three independent compartments. The compartment for storing cash is physically separated and locked from the other compartments in our cash van.",
      "Security Monitoring is done with the help of GPS installed and also the controlling technology for immobilizing the cash van whenever required.",
      "Cash Compartment specially reinforced with steel, having only one door, each cash boxes are secured to the floor with separate chains and provided with 2 padlocks for opening and closing with different keys.",
      "A hooter, portable fire extinguishers for quick reaction are provided in the cash van.",
      "Each cash van is provided with Driver, Armed Security Guards one or two depending on cash carrying limit with single/double barrel guns with valid licenses and ATM Officer/Custodians.",
      "All employees are properly screened and their antecedent checked before engaging on duty.",
      "We provide the best cash van services and the cash van provided by us is well equipped and modified. The driver accompanying our cash van is professionally trained and highly skillful."
    ]
  };

  return (
    <div className="p-6 bg-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-blue-900 border-l-4 border-orange-500 pl-2 flex items-center"><FaTruck className="mr-2" /> {section.title}</h2>
        {section.description.map((para, idx) => (
          <p key={idx} className="mt-4 text-gray-700">{para}</p>
        ))}
        <h3 className="mt-6 text-xl font-bold text-blue-900 border-l-4 border-orange-500 pl-2">
          {section.subtitle}
        </h3>
        <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
          {section.standards.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default CashVanLogistics;