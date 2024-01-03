import React from "react";
import video from "../../../../assets/video/414109370_7237171126370790_1089872783276703605_n_2.mp4";
import bannarImg from "../../../../assets/img/open-saas-banner.png"
import BuiltShipsWith from "../../../../component/BuiltShipsWith";


const MouseBack = () => {
  return (
    <div >
        {/* <!-- Build software Together --> */}
        <div className=" body-font mb-16 bg-frame ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="text-7xl font-bold title-font mb-4">
                Build software <br /> together.
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                The quickest way to collaborate on staging and <br /> ephemeral
                environments.
              </p>
            </div>
            <div className="flex justify-center text-center">
              <div className="relative">
                {/* <!-- <label for="email" className="leading-7 text-lg text-gray-600">Email</label> --> */}
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  className="bg-gray-100 md:w-[400px] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="ml-2 text-white bg-indigo-500 border-0 md:py-2 md:px-8 px-2 text-sm focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>
      
      <div className="container mx-auto mb-20">
        <img className="rounded-lg"  src={bannarImg} alt="" />
      </div>

      {/* Built and Ships with */}
    <BuiltShipsWith></BuiltShipsWith>

      <section className="mb-16">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-4xl font-bold title-font mb-1">
              Meet Mouseback.
            </h1>
            <h1 className=" font-medium title-font text-gray-400">
              Mouseback is a tiny widget you paste into any website to <br />{" "}
              collaborate between software builders and stakeholders.
            </h1>
            <br />
            <p className="font-medium text-gray-400">
              It's installed on this website, give it a go!
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3 ">
              <div className="flex rounded-lg h-full bg-neutral  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h1 className="text-white text-lg title-font font-medium">
                    Copy-paste our script
                  </h1>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white text-base">
                    Add our script onto any website or environment you wish to
                    collaborate on.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 ">
              <div className="flex rounded-lg h-full bg-neutral p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h1 className="text-white text-lg title-font font-medium">
                    Share your URL
                  </h1>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-white text-base">
                    Mouseback embeds itself into your website or environment
                    with zero faff.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-neutral p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h1 className="text-white text-lg title-font font-medium">
                    Start iterating
                  </h1>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base text-white">
                    Your site transforms into a feedback canvas so you can start
                    building together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="body-font my-20">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <h1 className="mt-12 font-bold text-5xl">
              A better way to build. <br />
              <span className="text-gray-400">
                Reasons why we built mouseback.
              </span>
            </h1>
          </div>
          <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h1 className="text-lg title-font font-medium mb-3">
                  Great products aren't built alone
                </h1>
                <p className="leading-relaxed text-base">
                  It takes a village to build great software, Mouseback brings
                  your team together to iterate on the real product that you're
                  shipping to users.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h1 className=" text-lg title-font font-medium mb-3">
                  Less meetings, more iteration
                </h1>
                <p className="leading-relaxed text-base">
                  Mouseback is designed to enable software builders and
                  stakeholders to quickly iterate on products without the need
                  for endless meetings or long review cycles.
                </p>
              </div>
            </div>
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h1 className=" text-lg title-font font-medium mb-3">
                  For the modern development workflow
                </h1>
                <p className="leading-relaxed text-base">
                  Mouseback is designed to slot in perfectly with the modern
                  development workflow of ephemeral environments and quick
                  iteration cycles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     <div className="container mx-auto">
     <video className="mb-16 rounded-lg" controls>
        <source
          src={video}
          type="video/webm"
        />
        <p>Your browser does not support the video tag.</p>
      </video>
     </div>

      <section className="body-font mb-16">
        {/* <!-- LAnching soon --> */}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-5xl text-3xl font-medium title-font mb-4">
              Launching soon
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We're onboarding teams in Autumn 2023. Join the waitlist to be the
              first <br /> to try out mouseback.
            </p>
          </div>
          <div className="flex justify-center text-center">
            <div className="relative">
              {/* <!-- <label for="email" className="leading-7 text-lg text-gray-600">Email</label> --> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-gray-100 md:w-[400px] bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="ml-2 text-white bg-indigo-500 border-0 md:py-2 md:px-8 px-2 text-sm   focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Join waitlist
            </button>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default MouseBack;
