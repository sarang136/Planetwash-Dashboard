import React from 'react';
import Logo from '../../../public/Frame 5.png'
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#052344] to-[#000000] font-dm px-4">
      <div className="bg-white rounded-[60px] border-8 border-cyan-400 flex flex-col md:flex-row overflow-hidden shadow-xl w-full max-w-[1350px] max-h-[750px] md:h-[690px]">

        {/* Left Section */}
        {/* Left Section */}
        <div className="flex-1 px-6 sm:px-16 py-8 overflow-y-auto relative flex flex-col justify-between">
          <div>
            <div className="flex justify-center lg:mt-[-20px]">
              <img src={Logo} alt="Logo" className="w-[200px] lg:w-[300px]" />
            </div>

            <form className="space-y-6" onSubmit={handleContinue}>
              <div>
                <label className="block text-xl font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="mt-1 block w-full px-4 py-4 rounded-xl border border-gray-100 bg-[#F4F7FE] text-gray-700 focus:outline-none text-base sm:text-lg"
                />
              </div>

              <div>
                <label className="block text-xl font-medium text-gray-700">
                  Enter OTP Sent On Your Mail
                </label>
                <div className="flex space-x-4 sm:space-x-10 mt-2 justify-center md:justify-start">
                  {Array(4).fill(0).map((_, idx) => (
                    <input
                      key={idx}
                      maxLength={1}
                      className="w-[60px] sm:w-[80px] h-14 sm:h-16 rounded-2xl border border-gray-100 bg-[#F4F7FE] text-center text-lg focus:outline-none"
                      type="text"
                    />
                  ))}
                </div>
              </div>
            </form>
          </div>

          {/* Button centered at bottom */}
          <div className="text-center mt-14 xl:absolute xl:bottom-6 xl:left-1/2 xl:-translate-x-1/2">
            <button
              type="submit"
              className="w-[120px] sm:w-[180px] bg-[#052344] text-white font-bold text-xl sm:text-2xl py-4 rounded-xl hover:bg-[#031a30]"
            >
              Sign In
            </button>
          </div>
        </div>


        {/* Right Section */}
        <div className="flex-1 bg-[#052344] relative text-white px-6 sm:px-10 flex flex-col justify-end pb-10 overflow-hidden rounded-b-[60px] md:rounded-bl-none md:rounded-r-[60px]">

          {/* Background circles */}
          <div className="absolute -top-[250px] left-1/2 -translate-x-1/2 w-[350px] h-[370px] sm:w-[550px] sm:h-[570px] bg-[#6AD2FF45] opacity-90 rounded-full"></div>
          <div className="absolute -bottom-[80px] -right-16 sm:-right-32 w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] bg-[#6AD2FF45] opacity-90 rounded-full"></div>

          {/* Bottom-aligned text */}
          <div className="z-10 text-center md:text-left p-4">
            <h2 className="text-2xl sm:text-[120px] font-bold leading-none mt-4">Sign In</h2>
            <p className="text-cyan-400 text-sm sm:text-2xl mt-2">
              Don’t Have Account?{" "}
              <span
                onClick={() => navigate("/signup/step-2")}
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

export default SignIn;
