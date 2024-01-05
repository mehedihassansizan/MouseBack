import React from "react";

const Footer = () => {
  return (
    // <div>
    //   {/* <!-- contact footeer --> */}
    //   <footer className="text-gray-600 body-font">
    //     <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    //       <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           stroke="currentColor"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //           stroke-width="2"
    //           className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
    //           viewBox="0 0 24 24"
    //         >
    //           <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    //         </svg>
    //         <span className="ml-3 text-xl text-gray-400">Mouseback</span>
    //       </a>
    //       <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
    //         © 2020 Mouseback —
    //         <a
    //           href="https://twitter.com/knyttneve"
    //           className="text-gray-600 ml-1"
    //           rel="noopener noreferrer"
    //           target="_blank"
    //         >
    //           @knyttneve
    //         </a>
    //       </p>

    //     </div>
    //   </footer>
    // </div>

    <div class="mx-auto mt-6 max-w-7xl px-6 lg:px-8 dark:bg-boxdark-2">
      <footer
        aria-labelledby="footer-heading"
        class="relative border-t border-gray-900/10 dark:border-gray-100/10 py-24 sm:mt-32"
      >
       
        <h2 id="footer-heading" class="sr-only">
          Footer
        </h2>
        <div class="flex items-start justify-end mt-10 gap-20">
          <div>
            <h3 class="text-sm font-semibold leading-6 dark:text-white">
              App
            </h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="https://github.com/wasp-lang/open-saas"
                  class="text-sm leading-6 hover:text-gray-900 dark:text-white"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://docs.opensaas.sh"
                  class="text-sm leading-6 hover:text-gray-900 dark:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://docs.opensaas.sh/blog"
                  class="text-sm leading-6  hover:text-gray-900 dark:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold leading-6  dark:text-white">
              Company
            </h3>
            <ul role="list" class="mt-6 space-y-4">
              <li>
                <a
                  href="https://wasp-lang.dev"
                  class="text-sm leading-6  hover:text-gray-900 dark:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm leading-6 hover:text-gray-900 dark:text-white"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="text-sm leading-6  hover:text-gray-900 dark:text-white"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
             
          </div>
        </div>
       
      </footer>
      <div class="">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
    </div>

    
  );
};

export default Footer;
