import React from 'react';
import Logo from '../../../public/Frame 5.png';
import { useNavigate } from 'react-router-dom';
import { BsCloudUploadFill } from "react-icons/bs";

const SignUpPage3 = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#052344] to-[#000000] font-dm p-4">
      <div className="bg-white rounded-[60px] sm:rounded-[60px] border-8 border-cyan-400 flex flex-col lg:flex-row w-full max-w-[1350px] shadow-xl overflow-hidden md:h-[690px] ```">

        {/* Left Section */}
        <div className="flex-1 px-6 sm:px-10 lg:px-16 lg:py-8 py-10">
          <div className="flex justify-center mb-8">
            <img src={Logo} alt="Logo" className="w-[200px] lg:w-[300px]" />
          </div>

          <form onSubmit={handleContinue}>
            <div className="space-y-4">
              <div>
                <label className="block text-lg sm:text-xl font-medium text-gray-700">Shop Address</label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="mt-1 block w-full text-base sm:text-lg px-4 py-4 rounded-xl border border-gray-100 bg-[#F4F7FE] text-gray-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-lg sm:text-xl font-medium text-gray-700">Shop Image</label>
                <div className="relative mt-2">
                  <input
                    type="file"
                    placeholder="Upload Image"
                    className="block w-full text-base sm:text-lg px-4 py-4 pr-12 rounded-xl border border-gray-100 bg-[#F4F7FE] text-gray-700 focus:outline-none"
                  />
                  <BsCloudUploadFill
                    size={24}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg sm:text-xl font-medium text-gray-700">Description</label>
                <input
                  type="text"
                  placeholder="Enter"
                  className="mt-1 block w-full text-base sm:text-lg px-4 py-4 rounded-xl border border-gray-100 bg-[#F4F7FE] text-gray-700 focus:outline-none"
                />
              </div>
            </div>

            <div className="text-center ">
              <button
                type="submit"
                className="mt-4 w-[170px] sm:w-[190px] sm:py-4 sm:text-xl sm:mt-12 bg-[#052344] text-white font-semibold text-2xl py-2 xl:mb-2 rounded-xl hover:bg-[#031a30] transition-all"
                onClick={() => navigate("/signup/verify")}
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#052344] relative text-white px-6 sm:px-10 py-10 lg:py-0 flex flex-col justify-center overflow-hidden">
          {/* Background Circles */}
          <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[570px] bg-[#6AD2FF45] opacity-90 rounded-full"></div>
          <div className="absolute -bottom-[50px] -right-10 sm:-right-20 lg:-right-28 w-40 sm:w-48 lg:w-52 h-40 sm:h-48 lg:h-52 bg-[#6AD2FF45] opacity-90 rounded-full"></div>

          {/* Bottom-aligned Text */}
          <div className="z-10 text-center lg:text-start lg:grid lg:absolute lg:bottom-10 lg:left-10 p-2">
            <h2 className="text-3xl mb-2 sm:text-7xl lg:text-[120px] lg:mb-2 font-bold">Sign In</h2>
            <p className="text-cyan-400 text-sm sm:text-xl lg:text-2xl">
              Don’t Have Account?{" "}
              <span
                onClick={() => navigate("/signup/step-1")}
                className="text-white cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SignUpPage3;
