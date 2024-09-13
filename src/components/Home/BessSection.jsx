/* eslint-disable react/no-unescaped-entities */
// import React from 'react'

export default function BessSection() {
  return (
    <div className="container mx-auto my-5">
      <div className="grid md:gap-10 items-center grid-cols-12">
        <div className="md:col-span-5 col-span-12">
          <img src="/images/honey.png" className="w-full" alt="" />
        </div>
        <div className="md:col-span-7 md:mt-0 mt-10 col-span-12">
          <h1 className="lg:text-7xl text-5xl md:text-start text-center color-paste uppercase font-soggy ">
            save the bees!
          </h1>
          <p className="mt-3 md:text-start text-center color-paste text-2xl max-w-3xl mx-auto leading-[40px]">
            AirBeenBee enhances scientific research and supports biodiversity by
            conserving solitary bees through a network of "smart hotels"
            equipped with automated sensors that collect environmental data.
            This open data platform invites citizen scientists to contribute and
            engage, creating a collaborative community of environmental
            advocates. The platform’s analytics tools provide valuable insights
            into bee behavior and conservation, while also serving as an
            educational resource to raise awareness about the importance of
            solitary bees in ecosystems. Check out
          </p>
        </div>
      </div>
    </div>
  );
}
