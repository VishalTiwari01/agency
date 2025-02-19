import React from "react";

const PantyServices = () => {
  const Panty = [
    {
      items: [
        "We make sure all etiquettes associated with such events are fully observed and maintained",
        "We deploy professionals with expertise in specific pantry service tasks",
        "We draw up customized plans to ensure smooth handling of events of any size",
      ],
    },
  ];
  return (
    <div className="pt-4  mx-auto">
      <h2 className="text-2xl font-bold border-b-4 border-orange-500 pb-2 mb-4">
        Some Of The Unique Features Of Our Pantry Service Are:
      </h2>
      {Panty.map((service, index) => (
        <div key={index} className="mb-4">
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {service.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PantyServices;
