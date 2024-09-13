// import React from 'react'

import HexaGoan from "../shared/HexaGoan";

export default function TokenomicsSection() {
  return (
    <div
      id="tokenomics"
      className={`bg-[url('/images/paste-background.png')] py-20`}
    >
      <div className="container mx-auto">
        <h1 className="lg:text-7xl text-[44px] font-soggy color-coffee text-center uppercase">
          tokenomics
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 md:gap-10 gap-5 w-full mt-10 p-0">
          <div className="token flex justify-center items-center">
            <HexaGoan customCss={"max-w-[320px] w-full"}>
              <div className=" text-center font-bold leading-10">
                <span className="lg:text-7xl text-5xl "> 10％</span> <br />
                <span className="lg:text-4xl text-3xl">
                  LP fees <br />
                  to buzz
                </span>
              </div>
            </HexaGoan>
          </div>
          <div className="token flex justify-center items-center">
            <HexaGoan customCss={"max-w-[320px] w-full"}>
              <div className=" text-center font-bold leading-10">
                <span className="lg:text-7xl text-5xl"> 100％</span> <br />
                <span className="lg:text-4xl text-3xl">
                  FAIR <br />
                  Lunch
                </span>
              </div>
            </HexaGoan>
          </div>
          <div className="token flex justify-center items-center">
            <HexaGoan customCss={"max-w-[320px] w-full"}>
              <div className=" text-center font-bold leading-10">
                <span className="lg:text-7xl text-5xl"> 10％</span> <br />
                <span className="lg:text-4xl text-3xl">
                  LP fees <br />
                  to bees
                </span>
              </div>
            </HexaGoan>
          </div>
        </div>
        <div className="mt-5 token-gide bg-yellow py-4 md:px-20 px-5">
          <p className="md:text-4xl text-2xl md:text-start text-center">
            100% fair launch, only 3.5% dev allocation. Meteora pool. Top 50
            wallets collect fees from trading.. Dev fees allocation (20%) goes
            10% to charity and 10% to marketing.
          </p>
        </div>
      </div>
    </div>
  );
}
