import React, { useEffect } from 'react';
import logo from '../assets/images/logo.png';

function Footer() {
  useEffect(() => {
    
    const script = document.createElement('script');
    script.src = "https://counter11.optistats.ovh/private/counter.js?c=34zkyln4j6j3gx9bs64tx7jcms21g9wc&down=async&FCS_coef=0.7";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);



  return (
    <div className="footer">
      <footer className="p-4 bg-gray-800 border-t-2 border-t-gold sm:p-6 relative">
      <div className="flex flex-row lg:justify-end sm:flex-row sm:justify-start items-center  mt-4 pr-5">
    <p className="text-2xl uppercase mb-2 sm:mb-0 sm:mr-3 sm:text-base"><pre className='text-2xl'>Visit Count : </pre></p>
    <div className="sm:flex items-center">
      <div className="sm:w-auto sm:h-auto sm:text-base" id="sfc34zkyln4j6j3gx9bs64tx7jcms21g9wc"></div>
    </div>
  </div>
        <div className="md:flex md:justify-between lg:px-52 sm:m-10">
          <div className="Address md:mb-6">
            <h1 className="mb-2 text-2xl text-white uppercase">ADDRESS</h1>
            <p className="text-sm text-white uppercase">Pune Institute of Computer Technology,</p>
            <p className="text-sm text-white uppercase">Sr. No 27, Near Trimurti Chowk,</p>
            <p className="text-sm text-white uppercase">Dhankawadi, Pune, Maharashtra-411043</p>
          </div>

          <div className="my-8 md:mb-0 lg:pr-14">
            <a href="#/home" className="flex items-center">
              <img src={logo} className="h-20 w-20 mr-3" alt="INC logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                InC <span className="self-center text-xs font-semibold whitespace-nowrap">Impetus and Concepts</span>
              </span>
            </a>
          </div>

          <div className="Email lg:mt-8">
            <h1 className="mb-2 text-2xl text-white uppercase">EMAIL</h1>
            <p className="text-md text-white">pictinc2024@gmail.com</p>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between lg:px-52">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            ©PICT InC 2024 All Rights Reserved | Developed by WEB TEAM of InC
          </span>

          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/groups/226545634202520/user/100054611612171/" target='_blank' className="text-white hover:text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Facebook icon */}
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/pict_inc_2024/" target='_blank' className="text-white hover:text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Instagram icon */}
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://twitter.com/punepict?lang=en" target='_blank' className="text-white hover:text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Twitter icon */}
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
