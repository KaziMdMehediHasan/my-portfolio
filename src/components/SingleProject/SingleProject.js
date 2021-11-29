import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = (props) => {
    console.log(props.project);
    const {name, img, live, client, server, technologies, features} = props.project;
    return (
        <>
          <div className="p-7 flex flex-col md:flex-row justify-center text-center md:text-left md:space-x-8 space-y-4 items-center">
              {/* image div */}
              <div className="md:w-2/5 ">
                  <img className="border-2 rounded-xl border-green-300 shadow-xl w-60 h-40 object-cover transform md:hover:scale-125 duration-500" src={img} alt="" />
              </div>
              {/* description */}
              <div className="md:w-2/5">
                  <h1 className="font-bold text-2xl text-gray-700">{name}</h1>
                  <p className="text-gray-500 font-bold">Technologies Used</p>
                  {
                      technologies.map(tech=><p className="inline text-md md:text-sm text-gray-500">{tech} ,</p>)
                  }
                   <p className="text-gray-500 font-bold">Features</p>
                  {
                      features.map(feature=><li><p className="inline text-md md:text-sm text-gray-500">{feature}</p></li>)
                  }
                  <div className="mt-2 space-x-4 flex md:flex-row">
                  <a href={live}>
                        <button className="btn-green">Live Site</button>
                 </a>
                  <a href={client}>
                        <button className="btn-github">Client Repo</button>
                 </a>
                 {
                     server &&                   
                     <a href={server}>
                         <button className="btn-github">Server Repo</button>
                     </a>
                 }

                  </div>
              </div>
          </div>
        </>
    );
};

export default SingleProject;