// import React from "react";

import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="container header sticky">
        <div className="rid items-center grid grid-cols-12 mx-auto  gap-2">
          <h1 className="text-5xl lg:col-span-4 col-span-6 w-full md:w-auto md:text-start text-center font-bold logo">
            $BUZZY
          </h1>
          <div className="lg:col-span-8 col-span-6">
            <div className="w-full lg:flex hidden justify-between ">
              <li className="lg:mt-0 my-4 md:text-lg">
                <a href="#buzzy">What is Buzzy?</a>
              </li>
              <li className="lg:mt-0 my-4 md:text-lg">
                <a href="#tokenomics">Tokenomics</a>
              </li>
              <li className="lg:mt-0 my-4 md:text-lg">
                <a href="#trade">TRADE</a>
              </li>
              <li className="lg:mt-0 my-4 md:text-lg">
              <a href="#footer" onClick={() => setIsSidebarOpen(false)}>
                Socials
              </a>
            </li>
            </div>
            <div className="manuBar flex justify-end lg:hidden ">
              <button className="toggle-button" onClick={toggleSidebar}>
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="sidebar-container">
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <button
            className="toggle-button text-3xl p-0 text-black"
            onClick={toggleSidebar}
          >
            {"✖"}
          </button>
          <ul>
            <li className="lg:mt-0 my-4 md:text-lg">
              <a href="#buzzy" onClick={() => setIsSidebarOpen(false)}>
                What is Buzzy?
              </a>
            </li>
            <li className="lg:mt-0 my-4 md:text-lg">
              <a href="#tokenomics" onClick={() => setIsSidebarOpen(false)}>
                Tokenomics
              </a>
            </li>
            <li className="lg:mt-0 my-4 md:text-lg">
              <a href="#trade" onClick={() => setIsSidebarOpen(false)}>
                TRADE
              </a>
            </li>            
            <li className="lg:mt-0 my-4 md:text-lg">
              <a href="#footer" onClick={() => setIsSidebarOpen(false)}>
                Socials
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
