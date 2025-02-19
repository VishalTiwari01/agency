import React from 'react'

const TrustedManpower = () => {
  return (
    <div className="mt-12 p-6 bg-orange-400 text-center flex flex-col items-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 ">
          "WE PROVIDE THE MOST EFFECTIVE AND TRUSTED MANPOWER SERVICE"
          <br />
          <br />
          You can call us on +91-9599186595, +91-9599186598, +91-1203130555 to discuss your manpower requirement.
        </h1>
        <div className="flex justify-center w-full mt-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center justify-center hover:bg-orange-600 hover:text-white hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
            Send Enquiry
          </button>
        </div>
      </div>
  )
}

export default TrustedManpower