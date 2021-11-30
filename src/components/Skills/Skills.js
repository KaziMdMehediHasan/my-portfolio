import { faBootstrap, faCss3Alt, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    //icons
    const javascript = <FontAwesomeIcon icon={faJsSquare} />
    const react = <FontAwesomeIcon icon={faReact} />
    const node = <FontAwesomeIcon icon={faNodeJs} />
    const html = <FontAwesomeIcon icon={faHtml5} />
    const css = <FontAwesomeIcon icon={faCss3Alt} />
    const bootstrap = <FontAwesomeIcon icon={faBootstrap} />
    const github = <FontAwesomeIcon icon={faGithub} />

   //  animation
    useEffect(()=>{
      Aos.init({duration: 1000});
     },[])
    return (
        <div className="bg-gray-100">
          <div className="w-11/12 md:w-9/12 mx-auto py-8">
            <h1 className="text-2xl mb-14 md:m-0 md:text-3xl md:text-right md:p-5 text-center font-bold text-gray-800">Skills</h1>
            <div className="bg-white rounded-3xl transform md:hover:scale-105 duration-500 p-5 grid grid-cols-2 md:grid-cols-4 gap-y-5 overflow-hidden">
                <div data-aos="fade-right" className="flex justify center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-5xl text-yellow-300">{javascript}</p>
                    <p className="text-gray-500 font-bold">Javascript</p>
                </div>
                <div data-aos="fade-down" className="flex justify center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-5xl text-react">{react}</p>
                    <p className="text-gray-500 font-bold">React</p>
                </div>
                 <div data-aos="fade-down" className="flex justify center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-5xl text-node">{node}</p>
                    <p className="text-gray-500 font-bold">Node.js</p>
                 </div>
                 <div data-aos="fade-left" className="flex justify center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-5xl text-html">{html}</p>
                    <p className="text-gray-500 font-bold">HTML5</p>
                 </div>
                 <div data-aos="fade-right" className="flex justify center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-5xl text-css">{css}</p>
                    <p className="text-gray-500 font-bold">CSS3</p>
                 </div>
                 <div data-aos="fade-in" className="flex justify center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-5xl text-bootstrap">{bootstrap}</p>
                    <p className="text-gray-500 font-bold">Bootstrap5</p>
                 </div>
                 <div data-aos="fade-in" className="flex justify center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-5xl">{github}</p>
                    <p className="text-gray-500 font-bold">GitHub</p>
                 </div>
                 <div data-aos="fade-left" className="flex justify-center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-gray-500 font-bold">REST API</p>
                 </div>
                 <div data-aos="fade-right" className="flex justify-center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-gray-500 font-bold">Firebase</p>
                 </div>
                 <div data-aos="fade-up" className="flex justify-center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-gray-500 font-bold">MongoDB</p>
                 </div>
                 <div data-aos="fade-up" className="flex justify-center items-center flex-col transform md:hover:scale-105 duration-500">
                    <p className="text-gray-500 font-bold">Tailwind CSS</p>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;