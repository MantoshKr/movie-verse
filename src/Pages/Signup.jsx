import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const Navigate = useNavigate();
  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault("");
    try {
      await signUp(email, password);
      Navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="MovieVerse Logo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col max-w-md p-6 rounded-lg sm:p-10 dark:bg-gray-900 opacity-95 dark:text-gray-100 ">
            <div className="mb-8 text-center">
              <h1 className="my-2 text-4xl font-bold">Sign Up</h1>
              <p className="text-sm dark:text-gray-400">
                Sign up to create a new account
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              novalidate=""
              action=""
              className="space-y-12"
            >
              <div className="space-y-4">
                <div>
                  <label for="email" className="block mb-2 text-sm">
                    Email address
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    placeholder=""
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label for="" className="text-sm">
                      Password
                    </label>
                  </div>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder=""
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-400 dark:text-gray-900"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="px-6 text-sm text-center dark:text-gray-400 flex gap-1">
                  Already have an account yet?
                  <Link to="/Login">
                    <p className="hover:underline dark:text-violet-400">
                      Sign In
                    </p>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
