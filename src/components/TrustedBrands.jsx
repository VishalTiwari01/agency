import React, { useEffect } from "react";
import no1 from "../assets/brands/1.png";
import no2 from "../assets/brands/2.png";
import no3 from "../assets/brands/3.png";
import no4 from "../assets/brands/4.png";
import no5 from "../assets/brands/5.png";
import no6 from "../assets/brands/6.jpg";
import no7 from "../assets/brands/7.jpg";
import no8 from "../assets/brands/8.jpg";
import no9 from "../assets/brands/9.jpg";
import no10 from "../assets/brands/10.jpg";
import no11 from "../assets/brands/11.jpg";
import no12 from "../assets/brands/12.jpg";
import no13 from "../assets/brands/13.png";
import no14 from "../assets/brands/14.png";
import no15 from "../assets/brands/15.jpg";
import no16 from "../assets/brands/16.jpg";
import no17 from "../assets/brands/17.jpg";
import no18 from "../assets/brands/18.png";
import no19 from "../assets/brands/19.jpg";
import no20 from "../assets/brands/20.jpg";
import no21 from "../assets/brands/21.jpg";
import no22 from "../assets/brands/22.png";
import no23 from "../assets/brands/23.jpg";
import no24 from "../assets/brands/24.jpg";
import no25 from "../assets/brands/25.jpg";
import no26 from "../assets/brands/26.png";
import no27 from "../assets/brands/27.jpg";

const TrustedBrands = () => {
  const brands = [
    { id: 1, logo: no1 },
    { id: 2, logo: no2 },
    { id: 3, logo: no3 },
    { id: 4, logo: no4 },
    { id: 5, logo: no5 },
    { id: 6, logo: no6 },
    { id: 7, logo: no7 },
    { id: 8, logo: no8 },
    { id: 9, logo: no9 },
    { id: 10, logo: no10 },
    { id: 11, logo: no11 },
    { id: 12, logo: no12 },
    { id: 13, logo: no13 },
    { id: 14, logo: no14 },
    { id: 15, logo: no15 },
    { id: 16, logo: no16 },
    { id: 17, logo: no17 },
    { id: 18, logo: no18 },
    { id: 19, logo: no19 },
    { id: 20, logo: no20 },
    { id: 21, logo: no21 },
    { id: 22, logo: no22 },
    { id: 23, logo: no23 },
    { id: 24, logo: no24 },
    { id: 25, logo: no25 },
    { id: 26, logo: no26 },
    { id: 27, logo: no27 },
  ];

  useEffect(() => {
    const scrollContainer = document.getElementById("brands-container");
    let scrollPosition = 0;

    const scroll = () => {
      const scrollWidth = scrollContainer.scrollWidth;
      const containerWidth = scrollContainer.offsetWidth;
      
      if (scrollPosition + containerWidth >= scrollWidth) {
        scrollPosition = 0; // Reset to start position
      }
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      
      scrollPosition += 1;
    };

    const interval = setInterval(scroll, 30); // Adjust speed here

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">Who Trusts Us</h2>
      <div>
        <div
          id="brands-container"
          className="flex w-full overflow-hidden space-x-6 px-4 py-2"
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-md"
            >
              <img
                src={brand.logo}
                alt={`Brand ${brand.id}`}
                className="w-auto h-auto max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
