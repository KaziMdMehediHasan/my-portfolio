import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import dp from '../../images/myAvatar.svg';
import "../../index.css";
import Aos from "aos";
import "aos/dist/aos.css";

const TopSection = () => {
    useEffect(()=>{
        Aos.init({duration: 1000});
    },[])
    return (
        <div className="bg-gray-100">
            <div className=" py-10 md:py-20 mx-auto w-9/12 flex flex-col justify-center items-center md:flex-row">
            {/* image div */}
                <div  data-aos="fade-in" className="">
                    <img className="shadow-xl ring-8 ring-green-300 rounded-full md:w-9/12 transform hover:scale-105 duration-500 animate-wiggle" src={dp} alt=""/>
                </div>
            {/* description div */}
            <div className="">
            <div data-aos="fade-left" className="space-y-4 text-sm mt-7 md:p-0">
                    <p className="font-bold text-gray-500 text-xl md:text-3xl">Front-end Developer</p>
                    <h1 className="text-2xl md:text-5xl font-bold text-gray-800">Kazi Md. Mehedi Hasan</h1>
                    <p className="text-gray-500 md:text-md lg:text-lg">A Front-End Web Developer passionate about creating interactive applications and experiences on the web.</p>
                    <div>
                        <Link to={{pathname:"https://drive.google.com/file/d/1eHT95LK0cAFG_ThW3QFP-ZcqvJLJhdbT/view?usp=sharing"}} target="_blank">
                        <button className="btn-green">Resume</button>
                        </Link>
                    </div>
                </div>
            </div>

            </div>
        </div>
    );
};

export default TopSection;