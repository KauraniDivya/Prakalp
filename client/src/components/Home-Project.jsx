import React from "react";


const HomeProject = () => {
  const Rating = 4;

  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < Rating) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    } else {
      stars.push(<i key={i} className="fa-regular fa-star"></i>);
    }
  }

  return (
    <>
      <h1>Trending Projects</h1>
      
    </>
  );
};

export default HomeProject;
