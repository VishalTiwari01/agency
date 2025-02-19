import React from "react";
import Director from '../../assets/service/director.jpg'
const DirectorMessage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      
      <main className="container mx-auto px-12 py-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">Director Message</h2>
        </section>

        <div className="flex flex-col md:flex-row mt-8 items-center">
          {/* Text Section */}
          <div className="md:w-2/3 text-gray-700 leading-relaxed">
            <p className="mb-4">
              Khyati Shield Group stands for excellence and professionalism. Our source
              of inspiration is our valued clients' faith in the Khyati Shield brand
              name. Since its inception in 2017, Khyati Shield has experienced
              exponential development and diversification, moving from manpower security
              to a wide range of services in the Facility Management sector.
            </p>
            <p className="mb-4">
              Khyati Shield currently offers a wide range of manpower resources to
              factories, workshops, offices, universities, corporate offices, banks,
              and private residences. The quality and dependability of our strong and
              competent management hierarchy have always been the cornerstone of our
              success.
            </p>
            <p className="mb-4">
              It will be our endeavor to be the leader in the Indian Security Industry
              in terms of products/service range, service quality, operations network,
              brand value, customer retention, and business growth.
            </p>
            <p>
              We are committed to achieving 100% customer satisfaction by providing
              services based on effective and efficient quality management systems.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3 flex justify-center mt-8 md:mt-0">
            <img
              src={Director}
              alt="Director at desk"
              className="rounded shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DirectorMessage;
