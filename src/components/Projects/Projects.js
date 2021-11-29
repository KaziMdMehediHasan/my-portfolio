import React, { useEffect, useState } from 'react';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("/fakeData.json")
        .then(res=>res.json())
        .then(data=> {console.log(data)
        setProjects(data)
       });
    },[])
    return (
        <div className="bg-gray-100">
             <div className="w-11/12 md:w-9/12 mx-auto py-8">
                <h1 className="mb-14 md:m-0 text-2xl md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">Recent Projects</h1>
                <div className="bg-white rounded-3xl">
                    {
                        projects.map(project=><SingleProject key={project.name} project={project}></SingleProject>)
                    }
                </div>
             </div>
        </div>
    );
};

export default Projects;