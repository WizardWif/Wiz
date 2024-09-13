// import React from "react";
import HexaGoan from "../shared/HexaGoan";
export default function BannerSection() {
  return (
    <div className={`bg-[url('/images/paste-background.png')] md:py-0 pt-10`}>
      <div className="container mx-auto">
        <div className="grid  grid-cols-12 w-full  p-0">
          <div className="md:col-span-3   hidden lg:flex items-center">
            <HexaGoan customCss={"w-[220px]"}>
              <h1 className="text-4xl text-center font-bold leading-10">
                <a href="https://dexscreener.com/solana/hrazc2arvekhdgpevmvbqhxkvbgfnllxvyndg1g4t5dd" target="_blank">
                  BUY $BUZZY NOW
                </a>
              </h1>
            </HexaGoan>
          </div>
          {/* // eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full md:col-span-8 lg:col-span-6 col-span-12  md:scale-125 mt-14"
            src="/images/banner-cat.png"
            alt=""
          />
          <div className="md:col-span-4 lg:col-span-3 col-span-12 flex items-center md:justify-center  lg:justify-center  justify-end md:mt-0 -mt-14">
            <div className="md:scale-100 scale-50">
              <HexaGoan customCss={"w-[220px]"}>
                <h1 className="text-4xl text-center font-bold font-soggy leading-10">
                  <a href="https://dexscreener.com/solana/hrazc2arvekhdgpevmvbqhxkvbgfnllxvyndg1g4t5dd" target="_blank">
                    BUY $BUZZY NOW
                  </a>
                </h1>
              </HexaGoan>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
