import React, { useState } from 'react'

const EventSecurityGuard = () => {
  const menuItems = [
    {
      id: 1,
      name: "Security Guard",
      content1:
        "We provide our security guards with professional on-the-job training and our best practices make us a special security agency.",
      content2:'Khyati Shield is a popular address for hiring security guards for houses, apartments, hospitals, colleges, and other commercial and non-commercial properties. From our range of services, we have appeared as a security guard specialist in Delhi NCR and PAN India.'
    },
    {
      id: 2,
      name: "Personal Security Guard",
      content1:
        '"Bodyguard" has become a popular phrase in "Hollywood & Bollywood," but in fact they are Personal Security Officers who are skilled, physically fit, extremely clever, well-educated and trained to handle potential threats, regardless of type.',
      content2:' Khyati Shield offers much more than bodyguard celebrity facilities. We strongly believe that the protection of the highest quality is focused on preparedness & preparation, alertness, time action & ready to keep you safe in all possible adverse situations. We look after the style and specific needs of the people we protect.'
    },
    {
      id: 3,
      name: "Event Security Guard",
      content1: "We provide the best security for different events in the city with advanced equipment, trained professionals, and fast response to situations.",
      content2: "Khyati Shield Security Services is the best choice to make if you're looking for the top security guard companies in Delhi/NCR andPAN India, particularly to organize an event in the city.",
      content3: "Our special event security services provide comprehensive security and workforce solutions for corporate events such as conferences, seminars, trade shows and family events such as weddings and parties. It doesn't matter how big or small our agency will assist you with proper security arrangements. Customized service is offered to meet your needs perfectly.",
    },
    {
      id: 4,
      name: "Bank/ATM Security Guard",
      content1: "Bank security is a top concern for everyone at all times. We can provide executive protection for both armed and unarmed dark suits. Khyati Shield has security guards fully trained in the fight against any attack. Bank security is a top concern, and Khyati Shield is willing to solve the issue.",
      content2: "Our commitment to making the environment as safe as possible has earned us a reputation for excellence and long-term customer relationships. To be constructive and highly professional, our customers know they can rely on us. Khyati Shield provides security services for all forms of banking sectors across PAN India. Khyati Shield security guards are at the top of their class when it comes to protecting bankers and staff, and guarding against robbery and burglary.",
    },
    {
      id: 5,
      name: "Commercial Security Guard",
      content1: "We recognize that there is an increasing need for industrial and business safety guards across the country. In many situations, the only choice is to approach private security contractors with the necessary experience and expertise to provide reliable protection for the company.",
      content2: "From complete development of access control to loss prevention training and integration, Khyati Shield is able to provide your business needs with the services and security. While we serve any commercial property in need, our commercial security guards are also specialized in niche protection, including building front lobbies security, building site security, nightclub security consulting, security at the front gate, local security, and more.",
    },
    {
      id: 6,
      name: "Healthcare Security Guard",
      content1: "Staff members and patients will feel more at ease when they see our security guards, because the presence of these individuals will let them know that their valuables and their persons are in secure and capable hands when they are at the premises. Although hospital security guards may not always be in plain sight, such as when actively patrolling the hospital grounds, they will always be close by and able to respond if a security issue occurs.",
      content2: "Our hospital security staff can protect your staff and patients from potential risks, including arguments in waiting areas for patients, individuals in unauthorized locations, health concerns, and even theft of properties. Because of the high level of knowledge and training our security staff have, in any situation that may occur, they know how to act orderly and quickly.",
      content3: "Our Khyati Shield security advisors in every situation are both professional and friendly, making them an invaluable asset for your hospital facilities, employees, and patients.",
    },
    {
      id: 7,
      name: "Hotel Security Guard",
      content1: "Security is of utmost importance when it comes to the safety of your guests, staff and property and it is our top priority at Khyati Shield. Our highly trained security consultants will provide you with the protection you need, and always with the professional attitude and courteous manner expected in the hospitality sector.",
      content2: "Security staff protect the guests from a variety of threats, including unwelcome visitors, in-room altercations, property theft, and even health issues if someone is needed with First Aid / CPR experience. Our security consultants know how to act quickly and effectively in any given situation, because of their high level of training and expertise.",
    },
    {
      id: 8,
      name: "Metro/Rail Security Guard",
      content1: "Efficient transport is a critical component of global and national economic development. The Khyati Shield developed tailor-made solutions to protect public transit systems. From metro rail networks to road transport, we work with clients and local bodies to improve passengers, staff and the public's safety and security. The Khyati Shield has thus extended its services beyond the cleaning domain (through our facility management services) and the cash pick-up and delivery services (through our cash logistics arm).",
    },
    {
      id: 9,
      name: "Education Institutions Security",
      content1: "Developing a safe and secure atmosphere in a higher education institution is the responsibility of the community at large. Colleges and universities on their campuses need to be vigilant regarding security. Campus community members expect the highest level of personal safety, access control, and physical safety-related security services. Because of the economic struggles facing many educational institutions, administrators may find it challenging to provide students, faculty/staff and their facilities with fair security.",
      content2:"Khyati Shield brings an integrated security approach to its higher education clients that provides a range of services and a proven track record of reliability."
    },
  ];

  const [selectedItem, setSelectedItem] = useState(menuItems[2]);

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
            <br/>
            <p className="text-gray-700 leading-relaxed">
              {selectedItem.content2}
            </p><br/>
            <p className="text-gray-700 leading-relaxed">
              {selectedItem.content3}
            </p>

            {/* Services Section */}
            {selectedItem.id === 1 && (
              <>
                <h2 className="mt-6 text-xl font-bold text-orange-500">
                  We Offer the Following Security Guarding Services:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                  <div className="group bg-gray-100 p-4 rounded-md shadow hover:bg-orange-500 transition duration-300 ease-in-out">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition duration-300">
                      Armed Security Guards
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition duration-300">
                      Armed personnel are well equipped for professionally
                      trained use of armaments in emergencies.
                    </p>
                  </div>
                  <div className="group bg-gray-100 p-4 rounded-md shadow hover:bg-orange-500 transition duration-300 ease-in-out">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition duration-300">
                      Well Trained Security Guards
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition duration-300">
                      The guards are trained in discipline, apt uniforms, and
                      well-trained tactics.
                    </p>
                  </div>
                  <div className="group bg-gray-100 p-4 rounded-md shadow hover:bg-orange-500 transition duration-300 ease-in-out">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition duration-300">
                      Trained Lady Guards
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition duration-300">
                      Our lady security guards are attentive and engaged in
                      carrying out personal checks.
                    </p>
                  </div>
                  <div className="group bg-gray-100 p-4 rounded-md shadow hover:bg-orange-500 transition duration-300 ease-in-out">
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition duration-300">
                      Bouncer
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-100 transition duration-300">
                      Our bouncers are trained to deal with critical situations
                      using both practical and theoretical training.
                    </p>
                  </div>
                </div>

                {/* Physique Standards Section */}
                <h2 className="mt-6 text-xl font-bold text-orange-500">
                  Our All Manned Guards Are Having Industry Best Physique
                  Standard:
                </h2>
                <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
                  <li>Eye Sight: 6x6.</li>
                  <li>Physique: Robust physique.</li>
                  <li>
                    Education: Matriculate, able to read and write in English
                    and Hindi.
                  </li>
                  <li>Age Limit: 21 to 40 years.</li>
                  <li>Experience: 2 to 3 years.</li>
                </ul>
              </>
            )}
            {selectedItem.id === 2 && (
              <>
                <h2 className="px-6 mt-6 text-xl font-bold text-orange-500">
                  Khyati Shield have got special training to provide reliable
                  protection to all kinds of people in the spotlight:
                </h2>
                <ul className="px-6 list-disc list-inside mt-4 text-gray-600 space-y-2">
                  <li>Celebrities- Film Stars & Known Persons</li>
                  <li>Athletes</li>
                  <li>News Correspondents</li>
                  <li>Officers</li>
                  <li>Diplomats</li>
                  <li>To All Who Need High-End Security</li>
                </ul>
              </>
            )}
            {selectedItem.id === 3 && (
              <>
                <h2 className="px-6 mt-6 text-xl font-bold text-orange-500">
                  Khyati Shield have got special training to provide reliable
                  protection to all kinds of people in the spotlight:
                </h2>
                <ul className="px-6 list-disc list-inside mt-4 text-gray-600 space-y-2">
                  <li>Celebrities- Film Stars & Known Persons</li>
                  <li>Athletes</li>
                  <li>News Correspondents</li>
                  <li>Officers</li>
                  <li>Diplomats</li>
                  <li>To All Who Need High-End Security</li>
                </ul>
              </>
            )}
            {selectedItem.id === 4 && (
              <>
                <h2 className="px-6 mt-6 text-xl font-bold text-orange-500">
                  Khyati Shield have got special training to provide reliable
                  protection to all kinds of people in the spotlight:
                </h2>
                <ul className="px-6 list-disc list-inside mt-4 text-gray-600 space-y-2">
                  <li>Celebrities- Film Stars & Known Persons</li>
                  <li>Athletes</li>
                  <li>News Correspondents</li>
                  <li>Officers</li>
                  <li>Diplomats</li>
                  <li>To All Who Need High-End Security</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default EventSecurityGuard