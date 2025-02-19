import React from 'react'

const PlumbingServices = () => {
  const Plumbing = [
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
  ]
  return (
    <div className="pt-4  mx-auto">
                  
                  {Plumbing.map((service, index) => (
                    <div key={index} className="mb-4">
                      <h2 className="text-2xl font-bold border-b-4 border-orange-500 pb-2 mb-4">
                      {service.category}
                  </h2>
                      <ul className="list-disc list-inside text-gray-600 mt-2">
                        {service.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
  )
}

export default PlumbingServices