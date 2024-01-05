import React from "react";

const Frequentlyquestions = () => {
  return (
    <div>
      <div className="mt-32 mx-auto max-w-2xl divide-y font-mono divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:py-32">
        <h2 className="text-2xl font-bold leading-10 tracking-tight">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10 dark:divide-gray-100/10">
          <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 lg:col-span-5">
              Why is this SaaS Template free and open-source?
            </dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                We believe the best product is made when the community puts
                their heads together. We also believe a quality starting point
                for a web app should be free and available to everyone. Our hope
                is that together we can create the best SaaS template out there
                and bring our ideas to customers quickly.
              </p>
            </dd>
          </div>
          <div className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 lg:col-span-5">
              What's Wasp?
            </dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base leading-7 text-gray-600 dark:text-gray-400">
                It's the fastest way to develop full-stack React + NodeJS +
                Prisma apps and it's what gives this template superpowers. Wasp
                relies on React, NodeJS, and Prisma to define web components and
                server queries and actions. Wasp's secret sauce is its compiler
                which takes the client, server code, and config file and outputs
                the client app, server app and deployment code, supercharging
                the development experience. Combined with this template, you can
                build a SaaS app in record time.
              </p>
              <a
                href="https://wasp-lang.dev"
                className="mt-4 text-base leading-7 text-yellow-500 hover:text-yellow-600"
              >
                Learn more →
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Frequentlyquestions;
