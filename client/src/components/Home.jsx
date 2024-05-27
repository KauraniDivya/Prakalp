import React, { useContext, useEffect, useState } from "react";
import HomeHeader from "./Home-Header";
import { useNavigate } from 'react-router-dom';
import bgimage from "./images/dd.jpg";
import Autosuggest from 'react-autosuggest';
import ribbon from "./images/ribbon.svg";
import HomeTrendProject from "./Home-Trend.jsx";
import Eventbar from "./Home-Eventbar.jsx"
import HomeProjectCategory from "./Home-ProjectCategories.jsx";
import HomeProjectJourney from "./Home-ProjectJourney.jsx";
// import HomeFooter from "./Home-Footer.jsx";
import HomeExploreProject from "./Home-ExploreProjects";
import event from "./images/event.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { Pagination, EffectCoverflow } from "swiper/modules";

const Home = () => {
  // useEffect(() => {
  //   const backTopBtn = document.querySelector("[data-back-top-btn]");

  //   window.addEventListener("scroll", function () {
  //     if (window.scrollY >= 100) {
  //       backTopBtn.classList.add("active");
  //     } else {
  //       backTopBtn.classList.remove("active");
  //     }
  //   });
  //   // Select all elements with class 'counter-count'
  //   var counters = document.querySelectorAll(".counter-count");

  //   counters.forEach(function (counter) {
  //     var currentValue = 0; // Starting value
  //     var targetValue = parseInt(counter.textContent, 10); // Target value

  //     var duration = 4000; // Animation duration in milliseconds
  //     var startTime = null;

  //     function animateCounter(timestamp) {
  //       if (!startTime) {
  //         startTime = timestamp;
  //       }

  //       // Calculate time elapsed since the animation started
  //       var elapsedTime = timestamp - startTime;

  //       // Calculate the new value for the counter based on time elapsed
  //       var newValue = Math.min(
  //         Math.ceil((elapsedTime / duration) * targetValue),
  //         targetValue
  //       );

  //       // Update the counter text content
  //       counter.textContent = newValue;

  //       // Continue the animation until the target value is reached
  //       if (newValue < targetValue) {
  //         requestAnimationFrame(animateCounter);
  //       }
  //     }

  //     // Start the animation
  //     requestAnimationFrame(animateCounter);
  //   });
  // }, []);

  const [totalVisits, setTotalVisits] = useState(0);
  const [totalProjects, setTotalProjects] = useState(0);
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const [suggestionsList, setSuggestions] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-sankalp.vercel.app/home-stats');
        const data = await response.json();

        setTotalVisits(data.Students); // Assuming Students represent total visits
        setTotalProjects(data.Projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleKeyDown = (event) => {
    // Handle Enter key
    if (event.key === 'Enter') {
      // Redirect to the top suggestion (if available)
      if (suggestionsList.length > 0) {
        navigate(suggestionsList[0].route);
      }
    }
  };
  const suggestions = [
    { name: 'Home', route: '/' },
    { name: 'Project', route: '/projectlist' },
    { name: 'Dashboard', route: '/dashboard' },
    { name: 'Profile', route: '/dashboard' },
    { name: 'Explore Projects', route: '/projectlist' },
    { name: 'About', route: '/about' },
    { name: 'Upload Project', route: '/uploadproject' },
    // Add more suggestions as needed
  ];

  const getSuggestions = (inputValue) => {
    const inputValueLowerCase = inputValue.toLowerCase();
    return suggestions.filter(
      (suggestion) => suggestion.name.toLowerCase().includes(inputValueLowerCase)
    );
  };

  // Autosuggest will call this function every time you need to update suggestions.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // Render suggestion
  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;
  const renderSuggestionsContainer = ({ containerProps, children, query }) => {
    return (
      <div {...containerProps}>
        <div className="suggestions-container">
          {children}
          {query && suggestionsList.length === 0 && (
            <div className="no-suggestions">
              No matching results found. Please refine your search.
            </div>
          )}
        </div>
      </div>
    );
  };
  // When suggestion is selected, this function will be called
  const onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    // Use the navigate function to redirect to the selected suggestion's page
    navigate(suggestion.route);

    // Prevent the default behavior to avoid the suggestion being inserted into the input
    event.preventDefault();
  };
  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };
  const inputProps = {
    placeholder: '🔍 What do you want to explore today?',
    value,
    onChange: (_, { newValue }) => setValue(newValue),
    onKeyDown: handleKeyDown,
  };

  return (
    <>
      <HomeHeader />
      <Eventbar />
      <div
        style={{
          width: "100px", // Set the width as needed
          height: "100px", // Set the height as needed
        }}
      ></div>
      <div>
<div className="container flex flex-col items-center justify-center gap-14 w-[100%] h-[30rem] mt-28" style={{marginTop:"0rem"}}>
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            // depth: 100,
                            // modifier: 1,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        pagination={{
                            clickable: true,
                        }}
                        className="mySwiper landingPageSwiper w-full overflow-hidden md:h-[500px] h-auto  flex md:flex-row flex-col items-center justify-center rounded-xl"
                    >
                            return (
                              <>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={event} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={event} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={event} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={event} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={event} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                <SwiperSlide  className="w-full h-full">
                                    <img src={event} alt="img" className="w-full h-full object-cover object-center" />
                                </SwiperSlide>
                                </>
                            );
                    </Swiper>

                   
                             
                            </div>
                            </div>
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
          height:"50%",
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
