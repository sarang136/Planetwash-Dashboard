import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../../public/Frame 5.png';

const EmailVerificationPage = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate("/home/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#052344] to-[#000000] font-dm p-4">
      <div className="bg-white rounded-[60px] lg:rounded-[60px] border-8 border-cyan-400 flex flex-col lg:flex-row w-full max-w-[1350px] shadow-xl overflow-hidden md:h-[690px]">

        {/* Left Section */}
        <div className="flex-1 px-6 sm:px-10 lg:px-16 py-10">
          <div className="flex justify-center mb-8">
            <img src={Logo} alt="Logo" className="w-[200px] lg:w-[300px]" />
          </div>

          <form className="space-y-8" onSubmit={handleSignIn}>
            <div>
              <label className="block text-lg sm:text-xl font-medium text-gray-700">Enter OTP Sent On Your Mail</label>
              <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4 mt-4">
                {Array(4).fill(0).map((_, idx) => (
                  <input
                    key={idx}
                    maxLength={1}
                    type="text"
                    className="w-12 sm:w-16 md:w-20 h-14 sm:h-16 rounded-xl border border-gray-100 bg-[#F4F7FE] text-center text-lg focus:outline-none"
                  />
                ))}
              </div>
              <p className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl xl:text-gray-700">Didn't Receive? <span className="font-semibold">Resend</span></p>
            </div>

            <div className="flex justify-center pt-10">
              <button
                type="submit"
                className=" w-[160px] sm:w-[190px] sm:py-4 sm:text-xl sm:mt-36 bg-[#052344] text-white font-semibold text-2xl py-3 rounded-xl hover:bg-[#031a30] transition-all"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#052344] relative text-white px-6 sm:px-10 py-10 lg:py-0 flex flex-col justify-center overflow-hidden">
          {/* Background Circles */}
          <div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[570px] bg-[#6AD2FF45] opacity-90 rounded-full"></div>
          <div className="absolute -bottom-[50px] -right-10 sm:-right-20 lg:-right-28 w-40 sm:w-48 lg:w-52 h-40 sm:h-48 lg:h-52 bg-[#6AD2FF45] opacity-90 rounded-full"></div>

          <div className="z-10 text-center lg:text-left lg:absolute lg:bottom-10 lg:left-10">
            <h2 className="text-2xl mb-2 sm:text-7xl lg:text-[120px] font-bold">Sign In</h2>
            <p className="text-cyan-400 text-sm sm:text-xl lg:text-2xl xl:mt-2">
              Don’t Have Account?{" "}
              <span
                onClick={() => navigate("/signup/step-2")}
                className="text-white sm:text-xl text-sm cursor-pointer"
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

export default EmailVerificationPage;
