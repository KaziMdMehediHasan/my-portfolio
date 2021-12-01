import React from 'react';
import { Link,useLocation } from 'react-router-dom';


const Navigation = () => {

    const handleHam =()=>{
        console.log('clicked');
        const ham = document.getElementById("mobile-menu");
        ham.classList.toggle("hidden");
    }
    const location = useLocation();
    console.log('came from' ,location.pathname);
    return (
        <>
        <nav className="bg-gray-100 shadow-lg p-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex md:justify-center justify-end">
              <div className="flex space-x-4">        
                {/* <!-- primary nav --> */}
                <div className="hidden md:flex items-center space-x-1">
                  <Link to="/home" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">Home</Link>
                  
                   { 
                      location.pathname !== "/" ? "" :
                      <div>
                      <a href="#about" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                        About Me
                      </a>
                      <a href="#contact" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                        Contact
                      </a>
                      </div>
                  }
                   { 
                      location.pathname !== "/home" ? "" :
                      <div>
                      <a href="#about" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                        About Me
                      </a>
                      <a href="#contact" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                        Contact
                      </a>
                      </div>
                  }

                  

                  <Link to="/blogs" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                    Blogs
                  </Link>
                </div>
              </div>
              {/* <!-- mobile button goes here --> */}
              <div className="md:hidden flex flex-col items-center">
                  <button onClick={handleHam} className="mobile-menu-button">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

            </div>
          </div>
          {/* <!-- mobile menu --> */}
          <div id="mobile-menu" className="mobile-menu hidden flex flex-col md:hidden items-center">
                    <Link to="/home" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">Home</Link>
                    {
                    location.pathname !== "/home" ? "" : 
                        <div className="flex flex-col items-center justify-center">
                            <a href="#about" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                              About Me
                            </a>
                            <a href="#contact" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                              Contact
                            </a>
                        </div>
                    }
                    { 
                      location.pathname !== "/" ? "" :
                      <div className="flex flex-col items-center justify-center">
                      <a href="#about" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                        About Me
                      </a>
                      <a href="#contact" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                        Contact
                      </a>
                      </div>
                  }
                    <Link to="/blogs" className="py-5 px-3 text-gray-700 font-bold hover:text-gray-900">
                        Blogs
                    </Link>
            </div>
        </nav>
        </>
    );
};

export default Navigation;