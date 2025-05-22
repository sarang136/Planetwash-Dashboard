import React from 'react';
import Logo from '../../../public/Frame 5.png';
import { useNavigate } from 'react-router-dom';

const SignUpPage2 = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#052344] to-[#000000] font-dm p-4">
      <div className="bg-white rounded-[60px] border-8 border-cyan-400 flex flex-col lg:flex-row shadow-xl overflow-hidden
                      w-full max-w-[1350px] max-h-[750px] h-full">

        {/* Left Section */}
        <div className="flex-1 py-2 px-8 sm:px-16 overflow-y-auto lg:py-2">
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="w-[200px] sm:w-[300px]" />
          </div>

          <form className="space-y-6" onSubmit={handleContinue}>
            <div className="space-y-4">
              {[
                { label: "Owner Name", type: "text" },
                { label: "Contact No", type: "number" },
                { label: "Email", type: "email" },
                { label: "Shop Name", type: "text" },
              ].map(({ label, type }, idx) => (
                <div key={idx}>
                  <label className="block text-md lg:text-xl font-medium text-gray-700">{label}</label>
                  <input
                    type={type}
                    placeholder="Enter"
                    className="mt-1 block w-full text-lg  px-4 py-4 rounded-xl border border-gray-100 bg-[#F4F7FE] text-gray-700 focus:outline-none"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <button
                type="submit"
                onClick={() => navigate("/signup/step-3")}
                className=" w-[140px] sm:w-[200px] sm:py-4 bg-[#052344] text-white font-semibold text-xl py-2 xl:mb-2 rounded-xl hover:bg-[#031a30] transition-all"
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-[#052344] relative text-white px-6 sm:px-10 flex flex-col justify-end pb-10 overflow-hidden rounded-b-[60px] lg:rounded-bl-none lg:rounded-r-[60px]">
          {/* Background circles */}
          <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[570px] bg-[#6AD2FF45] opacity-90 rounded-full"></div>
          <div className="absolute -bottom-20 -right-10 sm:-right-20 lg:-right-28 w-44 sm:w-52 lg:w-52 h-44 sm:h-52 lg:h-52 bg-[#6AD2FF45] opacity-90 rounded-full"></div>

          {/* Bottom-aligned text */}
          <div className="z-10 text-center mt-4 lg:text-left p-4">
            <h2 className="text-[30px] sm:text-[90px] lg:text-[120px] font-bold leading-none">Sign In</h2>
            <p className="text-cyan-400 text-md sm:text-xl lg:text-xl mt-2">
              Don’t Have Account?{" "}
              <span
                onClick={() => navigate("/signup/step-3")}
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

export default SignUpPage2;
