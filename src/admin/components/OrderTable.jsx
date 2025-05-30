import React, { useState } from "react";
import { useGetUserOrdersQuery } from "../redux/appSlice";
import { useNavigate } from "react-router-dom";

const OrderTable = () => {
const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const { data: allOrders, isLoading, isError } = useGetUserOrdersQuery();
  console.log(allOrders)
  if (isLoading) return <div>Loading orders...</div>;
  if (isError) return <div>Failed to fetch orders.</div>;

  const todayDate = new Date().toISOString().split("T")[0];

  const currentDateOrders = allOrders?.filter((order) => {
    const addressCreatedDate = new Date(order?.createdAt).toISOString().split("T")[0];
    return addressCreatedDate === todayDate;
  });

  return (
    <div className=" md:w-[unset]  md:p-4 p-4">
     <div className="flex justify-between ">
       <h1 className="py-4 font-bold cursor-pointer">Today's Order</h1>
      
     </div>
      <div className="overflow-y-scroll bg-white rounded-xl shadow max-h-[40vh] px-0 md:px-4">
        <table className="min-w-full text-sm text-left">
          <thead className="text-black font-semibold sticky top-0 bg-white z-10">
            <tr>
              <th className="px-4 py-2 whitespace-nowrap">Customer Name</th>
              <th className="px-4 py-2 whitespace-nowrap">Email</th>
              <th className="px-4 py-2 whitespace-nowrap">Contact No</th>
              <th className="px-4 py-2 whitespace-nowrap">Address</th>
              <th className="px-4 py-2 whitespace-nowrap">Payment Method</th>
              <th className="px-4 py-2 whitespace-nowrap">Created At</th>
            </tr>
          </thead>
          <tbody className="text-gray-500 border-t cursor-pointer">
            {currentDateOrders?.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-gray-500 py-6"> 
                  No orders for today.
                </td>
              </tr>
            ) : (
              currentDateOrders.map((res, index) => (
                <tr key={index}>
                  <td className="px-4 py-2" 
                  onClick={() => navigate(`/home/userData/${res._id}`)}
                  >{res.addressId?.name || "N/A"}</td>
                  <td className="px-4 py-2">{res.addressId?.email || "N/A"}</td>
                  <td className="px-4 py-2">{res.addressId?.contactNo || "N/A"}</td>
                  <td className="px-4 py-2">{res.addressId?.location}, {res.addressId?.city}, {res.addressId?.pincode}</td>
                  <td className="px-4 py-2">Cash On Delivery</td>
                  <td className="px-4 py-2">{new Date(res?.createdAt).toLocaleString()}</td>
                  <td>
                    <button className="bg-[#041434]  text-[10px] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                    Schedule Pickup
                  </button>
                  </td>
                </tr>
              ))

            )}
          </tbody>
        </table>
      </div>
    </div >
  );
};









// <div className="p-4 w-[100vw] md:w-[unset] ">
//   <h3 className="text-lg font-semibold text-[#041434] mb-2">Today's Orders</h3>

//   <div className="p-[0.7rem] bg-white rounded-xl shadow-md max-h-[40vh] overflow-y-scroll">
//     <div className="bg-white rounded-xl overflow-hidden overflow-x-scroll ">
//       <table className="min-w-full text-left text-[10px]">
//         <thead className="text-[#041434] text-sm font-semibold">
//           <tr>
//             <th className="py-3 px-4 text-[12px] md:text-sm">Customer Name</th>
//             <th className="py-3 px-4 text-[12px] md:text-sm">Contact No</th>
//             <th className="py-3 px-4 text-[12px] md:text-sm">Email</th>
//             <th className="py-3 px-4 text-[12px] md:text-sm">Service Type</th>
//             <th className="py-3 px-4 text-[12px] md:text-sm">Address</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm text-gray-700 border-t ">
//           {[...Array(8)].map((_, i) => (
//             <tr key={i}>
//               <td className="py-3 px-4 text-[12px] md:text-sm">John doe</td>
//               <td className="py-3 px-4 text-[12px] md:text-sm">8978765654</td>
//               <td className="py-3 px-4 text-[12px] md:text-sm">john@gmail.com</td>
//               <td className="py-3 px-4 text-[12px] md:text-sm">Washing & Ironing</td>
//               <td className="py-3 px-4 text-[12px] md:text-sm">Golden City Center, Chh Sambhajinagar</td>
//               <td className="py-3 px-4 text-[12px] md:text-sm">
//                 <button
//                   onClick={() => setShowModal(true)}
//                   className="p-2 bg-[rgba(5,35,68,1)] text-white rounded-lg text-[10px] md:text-[white] whitespace-nowrap"
//                 >
//                   Schedule Pickup
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>

//   {/* MODAL */}
//   {showModal && (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//       <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-lg w-[90%] md:w-[700px] flex flex-col md:flex-row gap-6 relative">
//         {/* Close button */}
//         <button
//           onClick={() => setShowModal(false)}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
//         >
//           &times;
//         </button>

//         {/* Calendar mockup */}
//         <div className="flex-1">
//           <h2 className="text-lg font-semibold mb-4">June 2025</h2>
//           <div className="grid grid-cols-7 gap-2 text-center text-sm">
//             {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, i) => (
//               <div key={i} className="font-bold">{day}</div>
//             ))}
//             {[...Array(30)].map((_, i) => (
//               <button
//                 key={i}
//                 className={`py-1 rounded-full ${i === 7 ? "bg-[rgba(5,35,68,1)] text-white" : "hover:bg-gray-200"
//                   }`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Time selection */}
//         <div className="flex-1">
//           <h2 className="text-lg font-semibold mb-4">Select Time</h2>
//           <input
//             type="time"
//             className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring"
//           />
//           <button
//             onClick={() => setShowModal(false)}
//             className="w-full mt-6 bg-[rgba(5,35,68,1)] text-white py-2 rounded-lg"
//           >
//             Proceed
//           </button>
//         </div>
//       </div>
//     </div>
//   )}


// </div>

export default OrderTable;
