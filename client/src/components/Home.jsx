import React, { useContext, useEffect, useState } from "react";
import HomeHeader from "./Home-Header";
import { useNavigate } from "react-router-dom";
import ribbon from "./images/ribbon.svg";
import HomeTrendProject from "./Home-Trend.jsx";
import Eventbar from "./Home-Eventbar.jsx";
import HomeProjectCategory from "./Home-ProjectCategories.jsx";
import HomeProjectJourney from "./Home-ProjectJourney.jsx";
// import HomeFooter from "./Home-Footer.jsx";
import HomeExploreProject from "./Home-ExploreProjects";
import hero from "./images/hero.jpg"

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Eventbar />
      <section class="hero-title bg-white dark:bg-gray-900 min-h-screen mt-40">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-md bg-primary-600 rounded-full text-white px-3 py-1 mr-3 bg-blue-500 border-r-5">New</span> <span class="text-sm font-medium">PRAKALP is Live!🚀</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <p class="mb-4 text-[6.5rem] font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">PRAKALP</p>
        <p class="mb-8 text-xl font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Platform for Research, Knowledge, and Advanced Learning Projects - Driving excellence in education and research with advanced learning projects.</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
           
            <a href="#exploreproject" class="inline-flex justify-center items-center py-2 px-3 text-base font-medium text-center bg-blue-700 text-gray-100 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Explore more
            </a>  
        </div>
       
    </div>
</section>
{/* 
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-6 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-6">
            <h1 class="max-w-[40rem] mb-4 text-5xl font-extrabold tracking-tight leading-none dark:text-white">
            Platform for Research, Knowledge, and Advanced Learning Projects
            </h1>
            <p class="max-w-[35rem] mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Driving excellence in education and research with advanced learning projects.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="hidden lg:mt-5 lg:col-span-6 lg:flex">
            <img
              src={hero}
              alt="mockup"
            />
          </div>
        </div>
      </section> */}
      <br />
      <br />
      <HomeTrendProject />
      {/* <img
       src={bgimage2}
       alt="Idea SVG"
       className="team-image"
       style={{
         width: '1520px',
         height: '700px',
         marginTop: '-800px',
         zIndex: '25000',
         position: 'relative', // Add this line to set position to relative
       }}
     /> */}
      <img
        src={ribbon}
        style={{
          width: "100%",
          height: "50%",
          marginTop: "-900px",
          opacity: "0.05",
          zIndex: "0",
        }}
      />
      <HomeProjectCategory />
      {/* <img
        src={arrow}
        style={{ width: "500px", marginTop: "-200px", opacity: "0.4" }}
      />{" "}
      <img
        src={arrow}
        style={{ width: "500px", marginTop: "-200px", opacity: "0.8" }}
      />
      <img
        src={arrow}
        style={{ width: "500px", marginTop: "-200px", opacity: "0.4" }}
      /> */}
      <HomeExploreProject />
      <HomeProjectJourney />
      {/* <HomeFooter /> */}
      {/* <a
        href="#top"
        class="back-top-btn"
        aria-label="Back to top"
        data-back-top-btn
      >
        <i class='fas fa-arrow-up'></i>
      </a> */}
    </>
  );
};

export default Home;
