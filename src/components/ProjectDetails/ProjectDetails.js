import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const [projects, setProjects] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        fetch("/fakeData2.json")
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            setProjects(data);
        })
    },[])

    const selectedProject = projects.find(project => project.id == id)

    console.log(selectedProject);
    const copyright = <FontAwesomeIcon icon={faCopyright}/>
    return (
        <div className="bg-gray-100">
            <div className="w-11/12 md:w-9/12 mx-auto py-8 md:py-12">
                {/* image div */}
                <h1 className="text-center text-4xl md:text-5xl font-bold text-gray-600 pb-8 md:pb-12">Contingents</h1>
                <div className="grid justify-items-center lg:grid-cols-3 md:grid-cols-2 gap-y-6 md:gap-x-4 lg:gap-y-0 lg:gap-x-0">

                    <div className="">
                        <img className="w-96 border-2 rounded-xl border-green-300 transform md:hover:scale-125 shadow-xl duration-500" src={selectedProject?.img_1} alt=""/>
                    </div>
                    <div className="">
                        <img className="w-96 border-2 rounded-xl border-green-300 transform md:hover:scale-125 shadow-xl duration-500" src={selectedProject?.img_2} alt=""/>
                    </div>
                    <div className="">
                        <img className="w-96 border-2 rounded-xl border-green-300 transform md:hover:scale-125 shadow-xl duration-500" src={selectedProject?.img_3} alt=""/>
                    </div>
                </div>
                {/* info div */}
                <div className="bg-white mt-20 py-8 rounded-3xl">
                <h1 className="text-2xl text-center md:text-3xl font-bold text-gray-600">{selectedProject?.name}</h1>
                <p className="p-8 md:text-xl text-gray-500 ">
                    {selectedProject?.description}
                </p>
                <p className="px-8 md:text-xl font-bold text-gray-600 ">
                    Technologies Used
                </p>
                {/* technologies used */}
                <div className="px-8">
                {
                      selectedProject?.technologies.map(tech=><p className="inline text-md md:text-sm text-gray-500">{tech} </p>)
                  }
                </div>

                {/* features */}
                <div className="p-8">
                <p className="md:text-xl font-bold text-gray-600 ">
                    Key Features
                </p>
                {
                      selectedProject?.features.map(feature=><li><p className="inline text-md md:text-sm text-gray-500">{feature}</p></li>)
                  }
                </div>
                {/* buttons */}
                <div className="px-8 space-x-4 flex md:flex-row">
                  <a href={selectedProject?.live}>
                        <button className="btn-green">Live Site</button>
                 </a>
                  <a href={selectedProject?.client}>
                        <button className="btn-github">Client Repo</button>
                 </a>
                 {
                     selectedProject?.server &&                   
                     <a href={selectedProject?.server}>
                         <button className="btn-github">Server Repo</button>
                     </a>
                 }
                  </div>
                </div>
            </div>
            <p className="text-gray-500 font-bold text-center py-4">{copyright} 2021 All rights reserved. KaziMdMehediHasan</p>
        </div>
    );
};

export default ProjectDetails;