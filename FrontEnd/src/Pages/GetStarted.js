// IntroPage.js

import React from "react";
import { Link } from "react-router-dom";
import Chatbot from "../Pages/Chatbot";

const IntroPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 h-[10cm]">
      <div className="w-full max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">
          Welcome to the Chatbot App
        </h1>
        <div className="">
          <div className="px-6 py-4 text-white transition duration-300 bg-purple-500 rounded-lg shadow-md hover:bg-purple-600">
            <Link to="/Chatbot">
              <div className="flex items-center justify-center h-full">
                <span className="text-xl">Get Started</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
