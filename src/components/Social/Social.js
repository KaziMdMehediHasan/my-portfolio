import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Social = () => {
    // icons
    const copyright = <FontAwesomeIcon icon={faCopyright}/>
    const linkedIn = <FontAwesomeIcon icon={faLinkedin}/>
    const gitHub = <FontAwesomeIcon icon={faGithub}/>
    return (
      <div className="bg-gray-100">
        <div className="w-11/12 md:w-9/12 mx-auto py-8">
            <h1 className="mb-14 md:m-0 text-2xl md:text-3xl md:text-left md:p-5 text-center font-bold text-gray-800">Find Me</h1>
            <div className="flex bg-white rounded-3xl items-center justify-center space-x-4 p-8">
                <div className="transform md:hover:scale-105 duration-500">
                    <a href="https://www.linkedin.com/in/kazi-md-mehedi-hasan-9a02a2112/" className="text-7xl text-blue-500 ">{linkedIn}</a>
                </div>
                <div className="transform md:hover:scale-105 duration-500">
                    <a href="https://github.com/KaziMdMehediHasan" className="text-7xl ">{gitHub}</a>
                </div>
            </div>
        </div>

        <p className="text-gray-500 font-bold text-center py-4">{copyright} 2021 All rights reserved. KaziMdMehediHasan</p>
        </div>

    );
};

export default Social;