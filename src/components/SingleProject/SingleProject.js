import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

const SingleProject = (props) => {
    console.log(props.project);
    const {name, img, live, client, server, technologies, features,id} = props.project;

        useEffect(()=>{
            Aos.init({duration: 1000});
        },[])
    return (
        <>
          <div data-aos="fade-left" className="p-7 flex flex-col md:flex-row justify-around md:text-left md:space-x-8 space-y-4 items-center">
              {/* image div */}
              <div className="md:w-3/5 ">
                  <img className="border-2 rounded-xl border-green-300 shadow-xl w-full h-48 object-cover transform md:hover:scale-125 duration-500" src={img} alt="" />
              </div>
              {/* description */}
              <div data-aos="fade-right" className="md:w-2/6 text-center space-y-4 md:text-right">
                  <h1 className="font-bold text-2xl text-gray-700">{name}</h1>
                  <div className="mt-2">   
                    <Link to={`/projects/${id}`}>
                    <button className="btn-green">Details</button>
                    </Link>
                  </div>
              </div>
          </div>
        </>
    );
};

export default SingleProject;