import React, { useState } from "react";
import StatCards from "./StatCards";
import ChartCards from "./ChartCards"; // Assume this exists

const OrderTable = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 ">
      <h3 className="text-lg font-semibold text-[#041434] mb-2">Today's Orders</h3>

      <div className="p-[0.7rem] bg-white rounded-xl shadow-md">
        <div className="bg-white rounded-xl overflow-hidden">
          <table className="min-w-full text-left">
            <thead className="text-[#041434] text-sm font-semibold">
              <tr>
                <th className="py-3 px-4">Customer Name</th>
                <th className="py-3 px-4">Contact No</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Service Type</th>
                <th className="py-3 px-4">Address</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 border-t">
              {[...Array(2)].map((_, i) => (
                <tr key={i}>
                  <td className="py-3 px-4">John doe</td>
                  <td className="py-3 px-4">8978765654</td>
                  <td className="py-3 px-4">john@gmail.com</td>
                  <td className="py-3 px-4">Washing & Ironing</td>
                  <td className="py-3 px-4">Golden City Center, Chh Sambhajinagar</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setShowModal(true)}
                      className="p-2 bg-[rgba(5,35,68,1)] text-white rounded-lg"
                    >
                      Schedule Pickup
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-lg w-[90%] md:w-[700px] flex flex-col md:flex-row gap-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            {/* Calendar mockup */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">June 2025</h2>
              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, i) => (
                  <div key={i} className="font-bold">{day}</div>
                ))}
                {[...Array(30)].map((_, i) => (
                  <button
                    key={i}
                    className={`py-1 rounded-full ${
                      i === 7 ? "bg-[rgba(5,35,68,1)] text-white" : "hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Time selection */}
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">Select Time</h2>
              <input
                type="time"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring"
              />
              <button
                onClick={() => setShowModal(false)}
                className="w-full mt-6 bg-[rgba(5,35,68,1)] text-white py-2 rounded-lg"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;
