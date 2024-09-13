// import React from 'react'

export default function Footer() {
  return (
    <div className="bg-yellow">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-10 gap-y-5 w-full mt-10 p-0">
          <div className="token flex justify-center items-center">
            <img src="/images/trangaleCard1.png" className="w-full" alt="" />
          </div>
          <div className="token flex justify-center items-center">
            <img src="/images/trangaleCard2.png" className="w-full" alt="" />
          </div>
          <div className="token flex justify-center items-center">
            <img src="/images/trangaleCard3.png" className="w-full" alt="" />
          </div>
        </div>
        <div id="footer" className="py-5 gap-4 flex flex-col lg:flex-row justify-evenly ">
          <a href="https://x.com/BUZZY_OG" target="_blank" className="md:text-6xl text-3xl color-coffee text-center">
            <span className="font-soggy text-2xl md:text-5xl">FOLLOW ON X</span>{" "}
            <br />
            @BUZZY_OG
          </a>
          <h1 className="font-soggy text-xl md:text-4xl color-coffee text-center">
            <a href="https://t.me/savebuzzy" target="_blank">
              JOIN OUR <br /> TELEGRAM <br /> GROUP
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
}
