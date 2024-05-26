import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeTrendProject = () => {
  const [topProjects, setTopProjects] = useState([]);

  useEffect(() => {
    const fetchTopProjects = async () => {
      try {
        const response = await fetch('https://api-sankalp.vercel.app/top-liked-projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const projects = await response.json();

        setTopProjects(projects);
      } catch (error) {
        console.error('Error fetching top projects:', error);
      }
    };

    fetchTopProjects();
  }, []);

  return (
    <>
      <h1 className="topPicks" style={{ color: 'rgb(190, 51, 0)',
  textAlign: 'center',
  fontWeight: 500,
  fontFamily: 'Montserrat',
  fontSize: '40px',
  marginLeft: '500px',
  marginBottom: '2rem',
  marginTop: '-1rem',
  boxShadow: '1rem solid black',
  border: '1rem solid #ffd4ba',
  borderRadius: '2rem',
  BoxShadow: 'inset 3px 2px rgb(179 158 145)',
  backdropFilter: 'blur(16px)',
   background: '#cbbeb724',}}>Trending</h1>
      <section className="flex justify-center space-x-6 p-4">
        {topProjects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 w-full"
          >
            <div
              className="absolute top-2 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-orange-400 via-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md border-2 border-orange-400"
            >
              {index + 1}
            </div>
            <div className="relative">
              <img
                src={project?.images?.length > 0 ? project?.images[0] : 'https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/Screenshot%202023-09-13%20001323.png?alt=media&token=a29363df-f374-4ae3-ae24-d66956dbfdf7'}
                alt={project?.projectTitle}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-blue-800 bg-opacity-0 hover:bg-opacity-50 transition-opacity flex justify-center items-center">
                <div className="text-white space-x-4 opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex items-center space-x-1">
                    <i className="fa-solid fa-eye"></i>
                    <p>{project?.views.length} views</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <i className="fa-solid fa-thumbs-up"></i>
                    <p>{project?.likes.length} likes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 h-10">{project?.projectTitle}</h3>
              <p className="text-gray-500 line-clamp-1 mb-2">{project?.postedBy.name}</p>
              <div className="text-center mt-4">
                <Link
                  to={`/viewproject/${project?._id}`}
                  className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-md hover:shadow-xl transition"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default HomeTrendProject;
