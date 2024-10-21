"use client";
import { useState, useEffect } from 'react';
import {
  HomeIcon,
  CalendarIcon,
  UserGroupIcon,
  BellIcon,
  ChatIcon,
  CogIcon,
  ChevronLeftIcon,
  MoonIcon,
  MenuIcon, // Import MenuIcon for the hamburger menu
} from '@heroicons/react/outline';
import Logo from '@/app/public/images/Logo.png'
import Right from '@/app/public/images/right.png'


import Image from 'next/image';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar closed by default
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode state from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  return (
    <>
      {/* Hamburger Menu */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button onClick={toggleSidebar}>
          <MenuIcon className="h-8 w-8 text-gray-500 dark:text-gray-300" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen   dark:bg-gray-800 shadow-lg transition-all duration-500 ease-in-out z-50 ${
          isOpen && "md:w-fit md:block w-full bg-white"}  ${!isOpen && 'md:w-fit lg:w-16 md:block w-0 hidden'}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <span
            className={`
              
             transition-opacity duration-700 delay-300 dark:text-white`}
          >
             <Image src={Logo} alt='alt' />
          </span>
         
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li className="flex items-center cursor-pointer">
              <HomeIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              <span
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out delay-300 dark:text-white ml-4`}
              >
                Home
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
              <CalendarIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              <span
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out delay-400 dark:text-white ml-4`}
              >
                Events
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
              <UserGroupIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              <span
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out delay-500 dark:text-white ml-4`}
              >
                Speakers
              </span>
            </li>
            <li className="relative flex items-center cursor-pointer">
              <BellIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              <span
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out delay-600 dark:text-white ml-4`}
              >
                Notifications
              </span>
              <span className={`absolute right-0 top-0 bg-red-500 text-white text-xs rounded-full ${isOpen ? "h-5 w-5" : "h-2 w-2"}  flex items-center justify-center`}>
                {isOpen && 3}
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
              <ChatIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              <span
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out delay-700 dark:text-white ml-4`}
              >
                Messages
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
             
              <CogIcon className="h-6 w-6 text-gray-500 dark:text-gray-300" />
              
              <span
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out delay-800 dark:text-white ml-4`}
              >
                Settings
              </span>
            </li>
            <li className="flex items-center cursor-pointer">
            
            <button onClick={toggleSidebar}>
            <Image src={Right}  className={`h-6 w-6 md:block dark:text-white ${
                !isOpen && "rotate-360 md:block hidden "
              } transition-transform duration-500 ease-in-out ${isOpen && "block rotate-180"} `}/>
           
            
          </button>
          <span onClick={toggleSidebar}
                className={`${
                  isOpen ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500 ease-in-out delay-800 dark:text-white ml-4`}
              >
                Collapse
              </span>
            </li>
           
          </ul>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="p-4">
        <div className="flex items-center cursor-pointer">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div className={`w-9 h-5 ${darkMode ? 'bg-blue-500' : 'bg-gray-200'} rounded-full peer-checked:after:translate-x-full peer-checked:after:bg-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600`}></div>
      </label>
      <span
        className={`${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        } transition-opacity duration-500 ease-in-out dark:text-white ml-4`}
      >
        Dark Mode
      </span>
    </div>

          <div
            className={`flex items-center mt-6 ${
              isOpen ? "opacity-100" : "opacity-0 hidden"
            } transition-opacity duration-500 ease-in-out`}
          >
            <img
              src="/path/to/avatar.jpg"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
            <div className="ml-4">
              <h4 className="font-semibold dark:text-white">Rudra Devi</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                rudra.devi@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
