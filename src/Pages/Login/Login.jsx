import React from "react";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero h-screen">
        <div className="card shrink-0 md:w-[476px] md:h-[600px] border  shadow-2xl bg-base-100">
          <form className="card-body">
            <h1 className="md:text-4xl text-bold text-center mb-6">
              Log in to your account
            </h1>

            <div className="loginBy">
            <h1 className="pl-1 mb-2">Log in with</h1>
            <div className="flex w-full">
              <div className="grid h-10 flex-grow card bg-base-300 rounded-lg place-items-center">
                <FaGoogle/>
              </div>
              <div className="grid h-10 flex-grow card bg-base-300 rounded-lg ml-4 place-items-center">
                <FaGithub/>
              </div>
            </div>
            </div>

            <div className="divider mb-1">Or continue with </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">E-mail</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered h-[40px]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered h-[40px]"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-4 h-[40px] mb-4">
              <button className="btn btn-warning font-bold">Login</button>
            </div>
            <p>Don't have an account yet?<Link className="underline">go to SignUp.</Link></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
