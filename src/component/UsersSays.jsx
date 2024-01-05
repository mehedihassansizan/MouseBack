import React, { useEffect, useState } from "react";

const UsersSays = () => {
 
  return (
    <div className="mx-auto font-mono mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
      <div className="relative sm:left-5 -m-2 rounded-xl bg-yellow-400/20 lg:ring-1 lg:ring-yellow-500/50 lg:-m-4 ">
        <div className="relative sm:top-5 sm:right-5 bg-gray-900 dark:bg-boxdark px-8 py-20 shadow-xl sm:rounded-xl sm:px-10 sm:py-16 md:px-12 lg:px-20">
          <h2 className="text-left text-xl font-semibold tracking-wide leading-7 text-gray-500 dark:text-white">
            What Our Users Say
          </h2>
          <div className="relative flex flex-wrap gap-6 w-full mt-6 z-10 justify-between lg:mx-0">
            <figure className="w-full lg:w-1/4 box-content flex flex-col justify-between p-8 rounded-xl bg-gray-500/5 ">
              <blockquote className="text-lg text-white sm:text-md sm:leading-8">
                <p>
                  I used Wasp to build and sell my AI-augmented SaaS app for
                  marketplace vendors within two months!
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-white">
                <a
                  href="https://twitter.com/maksim36ua"
                  className="flex items-center gap-x-2"
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/1719397191205179392/V_QrGPSO_400x400.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold hover:underline">
                      Max Khamrovskyi
                    </div>
                    <div className="mt-1">Senior Eng @ Red Hat</div>
                  </div>
                </a>
              </figcaption>
            </figure>
            <figure className="w-full lg:w-1/4 box-content flex flex-col justify-between p-8 rounded-xl bg-gray-500/5 ">
              <blockquote className="text-lg text-white sm:text-md sm:leading-8">
                <p>
                  Nearly done with a MVP in 3 days of part-time work... and
                  deployed on Fly.io in 10 minutes.
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-white">
                <a
                  href="https://twitter.com/tskaggs"
                  className="flex items-center gap-x-2"
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/1486119226771480577/VptdEo6A_400x400.png"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold hover:underline">Tim Skaggs</div>
                    <div className="mt-1">Founder @ Antler US</div>
                  </div>
                </a>
              </figcaption>
            </figure>
            <figure className="w-full lg:w-1/4 box-content flex flex-col justify-between p-8 rounded-xl bg-gray-500/5 ">
              <blockquote className="text-lg text-white sm:text-md sm:leading-8">
                <p>
                  In just 6 nights... my SaaS app is live 🎉! Huge thanks to the
                  amazing @wasplang community 🙌 for their guidance along the
                  way. These tools are incredibly efficient 🤯!
                </p>
              </blockquote>
              <figcaption className="mt-6 text-base text-white">
                <a
                  href="https://twitter.com/jonathancocharan"
                  className="flex items-center gap-x-2"
                >
                  <img
                    src="https://pbs.twimg.com/profile_images/926142421653753857/o6Hmcbr7_400x400.jpg"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold hover:underline">
                      Jonathan Cocharan
                    </div>
                    <div className="mt-1">Entrepreneur</div>
                  </div>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSays;
