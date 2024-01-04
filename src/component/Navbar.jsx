import React, { useContext } from "react";
import logo1 from "../assets/img/logo.png";
import { AuthContext } from "../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully log out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: "Do you want to continue",
          icon: "error",
          confirmButtonText: "ok",
        });
        console.log(error.message);
      });
  };
  const navli = (
    <>
      <li>
        <Link>Blog</Link>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <Link>About</Link>
      </li>
      {user ? (
        <li>
          <Link onClick={handleLogOut}>Log Out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex items-center lg:flex-1">
        <a
          href="/"
          class="flex items-center -m-1.5 p-1.5 duration-300 ease-in-out hover:text-yellow-500 dark:text-white "
        >
          <img class="h-8 w-8" src={logo1} alt="Open SaaS App" />
          <span class="ml-2 text-sm font-semibold leading-6 ">MouseBack</span>
        </a>
      </div>

      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box "
        >
          {navli}
        </ul>
      </div>

      <div class="hidden lg:flex lg:gap-x-12 ">
        <a
          href="#features"
          class="text-sm font-semibold leading-6  duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
        >
          Features
        </a>
        <a
          href=""
          class="text-sm font-semibold leading-6  duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
        >
          Documentation
        </a>
        <a
          href=""
          class="text-sm font-semibold leading-6  duration-300 ease-in-out hover:text-yellow-500 dark:text-white"
        >
          Blog
        </a>
      </div>
      
      <div class="hidden lg:flex lg:flex-1 lg:justify-end lg:align-end">
        <div class="flex items-center gap-3 text-sm font-semibold leading-6 2xsm:gap-7">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" className="theme-controller" value="black" />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <a href="/login">
            <div class="flex justify-end items-center duration-300 ease-in-out text-sm hover:text-yellow-500 dark:text-white">
              Try the Demo App{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="ml-1"
                height="1.1rem"
                width="1.1rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13 16 5-4-5-4v3H4v2h9z"></path>
                <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
