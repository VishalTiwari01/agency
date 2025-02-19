import React, { useState } from 'react'

const BPO = () => {
  const menuItems = [
     {
       id: 1,
       name: "IT Recruitment",
       content1:
         "Recruitment of information technology is unlike other recruitment which requires a great deal of experience and expertise. The recruiter must have a deep understanding of complete SDLC and various IT skill terms. We provide our expert IT recruitment services at a competitive rate for our clients.",
       name1: "Non IT Recruitment",
       content2:
         "It requires a lot of knowledge in different fields and recruiting experience when it comes to hiring for Non-IT area. We cater for a wide array of Non-IT industries. We have Domain Recruiters who work on your recruitment.",
     },
     {
       id: 2,
       name: "BPO Recruitment",
       content1:
         "The job of experts in management at BPO is never completed. In addition to our own database, we offer well-researched resumes that are processed from various portals. Once a resume that best fits the job description has been sorted, our consultants will call the professional and arrange an interview with your organization. The experts will also look at the paper preparation aspect so that there's nothing to think about in your company. We're going to do everything for you running around. Our experience as a well-known BPO Recruitment Agency makes us the first preference of our customers.",
     },
     {
       id: 3,
       name: "Technical Sales Recruitment",
       content1:
         "Specialists in technological sales, also called manufacturing engineers, concentrate on specific technical and scientific goods for businesses. They typically work for wholesale trade, technical and scientific providers, and computer and electronic device manufacturers.",
     },
     {
       id: 4,
       name: "Travel & Tourism Recruitment",
       content1:
         "To effectively advise your customers on the best travel choices, research famous tourism destinations and develop your sales skills. Learn how to design and create complex travel itineraries, acquire specialized knowledge of travel products and gain the ability to manage exchanges and reissues of tickets. Improve your sales skills so that prospects and existing customers can successfully turn into returning customers and learn how to understand how industry regulations affect your travel operations.",
     },
     {
       id: 5,
       name: "Banking & Finance Recruitment",
       content1:
         "The financial consulting services are the head of all other finance-related services such as banking, insurance and retail administration. It industry looks at all other economic activities and aims to control the risks within the economic sector.",
     },
     {
       id: 6,
       name: "Real Estate Recruitment",
       content1:
         "The primary responsibility of a real estate consultant is to assist clients throughout the process of buying or selling to help them achieve their goals. Such assistance may include conducting analyzes of current trends in the industry and possible investments, including diverse financial portfolios. Whenever a customer is interested in a property, the consultant may also assess its current condition and comparisons to determine its value.",
     },
     {
       id: 7,
       name: "Agriculture Recruitment",
       content1:
         "Agricultural consultants provide advice on the agricultural land use and management. Usually they specialize in either business or technical expertise; former area specialists advise farm landowners on financial issues and business strategy, while technical experts determine how to make the most productive use of the land. Technical specialists often focus on a particular area, such as pollution control, forestry consultancy, or crop rotation.",
     },
   ];
  const [selectedItem, setSelectedItem] = useState(menuItems[1]);
    return (
      <div className="min-h-screen bg-gray-50">
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 space-y-4">
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
            <div className="md:col-span-3 md:mr-24 ">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedItem.name}
              </h1>
              <p className="text-gray-700 leading-relaxed">
                {selectedItem.content1}
              </p>
              <br />
              <br />
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedItem.name1}
              </h1>
  
              <p className="text-gray-700 leading-relaxed">
                {selectedItem.content2}
              </p>
              
            </div>
          </div>
        </main>
      </div>
    )
}

export default BPO