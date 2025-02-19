import React from "react";
import AboutUS from "./Company/AboutUS";
import PhotoGallery from "../components/PhotoGallery";
import consulting from "../assets/logo/consulting-jobs.png";
import Services from "../components/Services";
import Different from "../components/Different";

const Home = () => {
  
  return (
    <>
      <main>
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <img src={consulting} alt="" />
        </div>
      </main>
      <AboutUS />
      <Services />
      <Different />
      <PhotoGallery />
      
    </>
  );
};

export default Home;
