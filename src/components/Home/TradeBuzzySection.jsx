// import React from 'react'

import HexaGoan from "../shared/HexaGoan";

export default function TradeBuzzySection() {
  return (
    <div id="trade" className={`bg-yellow pt-20`}>
      <div className="container mx-auto">
        <h1 className="lg:text-7xl text-5xl font-soggy color-coffee text-center">
          TRADE $BUZZY!
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-20 gap-10 w-full mt-14 p-0">
          <div className="token flex justify-center items-center">
            <a href="https://dexscreener.com/solana/hrazc2arvekhdgpevmvbqhxkvbgfnllxvyndg1g4t5dd" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo1.png" className="w-full" alt="" /></a>
          </div>
          <div className="token flex justify-center items-center">
            <a href="https://dexscreener.com/solana/hrazc2arvekhdgpevmvbqhxkvbgfnllxvyndg1g4t5dd" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo2.jpeg" className="w-full  " alt="" /></a>
          </div>
          <div className="token flex justify-center items-center">
            <a href="https://solscan.io/token/CgQ44kxXi4VeK668TfoNkdB6KUYJmxBHAPsJhmWYsSt3" target="_blank" rel="noopener noreferrer">
            <img src="/images/logo3.png" className="w-full" alt="" /></a>
          </div>
        </div>
        <div className="flex justify-center  translate-y-12">
          <HexaGoan customCss={"w-[220px]"}>
            <h1 className="text-4xl text-center font-bold leading-10">
              <a href="https://dexscreener.com/solana/hrazc2arvekhdgpevmvbqhxkvbgfnllxvyndg1g4t5dd" target="_blank">
                BUY $BUZZY NOW
              </a>
            </h1>
          </HexaGoan>
        </div>
      </div>
    </div>
  );
}
