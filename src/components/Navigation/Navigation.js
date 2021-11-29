import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const handleHam =()=>{
        console.log('clicked');
        const ham = document.getElementById("mobile-menu");
        ham.classList.toggle("hidden");
    }
    return (
        <>
        <nav className="bg-transparent shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
        
              <div className="flex space-x-4">
                {/* <!-- logo --> */}
                <div>
                  <Link to="" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900" >
                    <svg className="h-6 w-6 mr-1 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span className="font-bold">Better Dev</span>
                  </Link>
                </div>
        
                {/* <!-- primary nav --> */}
                <div className="hidden md:flex items-center space-x-1">
                  <Link to="" className="py-5 px-3 text-gray-700 hover:text-gray-900">Features</Link>
                  <Link to="" className="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing</Link>
                </div>
              </div>
        
              {/* <!-- secondary nav --> */}
              <div className="hidden md:flex items-center space-x-1">
                <Link to="" className="py-5 px-3">Login</Link>
                <Link to="" className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">Signup</Link>
              </div>
        
              {/* <!-- mobile button goes here --> */}
              <div className="md:hidden flex items-center">
                <button onClick={handleHam} className="mobile-menu-button">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
        
            </div>
          </div>
        
          {/* <!-- mobile menu --> */}
          <div id="mobile-menu" className="mobile-menu hidden md:hidden">
            <Link to="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</Link>
            <Link to="" className="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</Link>
          </div>
        </nav>
        </>
    );
};

export default Navigation;