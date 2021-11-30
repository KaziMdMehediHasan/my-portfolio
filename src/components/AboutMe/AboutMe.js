import React from 'react';

const AboutMe = () => {
    return (
        <div id="about" className="bg-gray-100">
            <div className="w-11/12 md:w-9/12 mx-auto py-8">
                <h1 className="mb-14 md:m-0 text-2xl md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">About Me</h1>
                <div className="bg-white rounded-3xl transform md:hover:scale-105 duration-500">
                    <p className="p-8 md:text-xl text-gray-500 ">
                    I'm a front-end web developer.Having the skills and training made me confident enough to call myself a Junior front-end web developer/Junior web developer. Ready to take on challenges and responsibility to grow as a full-fledged web developer. Recently, I graduated from the <span className="text-green-400">Complete Web Development with Jhankar Mahbub by Programming Hero</span>. I am passionate about coding and solving problems through code, and I am excited to work alongside other amazing programmers and learn so much more!
                    </p>
                </div>
            </div>
          
        </div>
    );
};

export default AboutMe;