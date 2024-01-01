import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const {signUp, githubLogIn, googleLogIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        
        setSuccess(false)
        setError(false)

        signUp(email, password)
        .then(result =>{
            const newUser = result.user;
            console.log(newUser);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully log In",
                showConfirmButton: false,
                timer: 1500
            });
            setSuccess(true)
            form.reset()
            navigate("/");
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'ok'
            })
            setError(true)
        })
    }
    
    const handleGoogle = () => {
        setError(false);
        setSuccess(false);
        googleLogIn()
          .then((result) => {
            const googleUser = result.user;
            console.log(googleUser);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully log In",
                showConfirmButton: false,
                timer: 1500
            });
            setSuccess(true);
            navigate("/");
            
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
            setError(true);
          });
      };
    
      const handleGithub = () => {
        setError(false);
        setSuccess(false);
        githubLogIn()
          .then((result) => {
            const githubUser = result.user;
            console.log(githubUser);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully log In",
                showConfirmButton: false,
                timer: 1500
            });
            setSuccess(true);
            navigate("/");
            
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
                title: 'Error!',
                text: 'Do you want to continue',
                icon: 'error',
                confirmButtonText: 'ok'
              })
            setError(true);
          });
      };
  return (
    <div>
      <div className="hero h-screen">
        <div className="card shrink-0 md:w-[476px] md:h-[600px] border  shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="md:text-4xl text-bold text-center mb-6">
            Create a new account
            </h1>

            <div className="loginBy">
            <h1 className="pl-1 mb-2">Sign up with</h1>
            <div className="flex w-full">
              <div onClick={handleGoogle} className="grid h-10 cursor-pointer flex-grow card bg-base-300 rounded-lg place-items-center">
                <FaGoogle/>
              </div>
              <div onClick={handleGithub} className="grid h-10 cursor-pointer flex-grow card bg-base-300 rounded-lg ml-4 place-items-center">
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
                name="email"
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
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-4 h-[40px] mb-4">
              <button className="btn btn-warning font-bold">Sign up</button>
            </div>
            <p>Already have an account?<Link to="/login" className="underline">go to Log in.</Link></p>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
