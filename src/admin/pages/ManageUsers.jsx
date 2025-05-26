import React, { useState } from "react";
import PickupSchedule from "./orderPages/PickupSchedule";
import Ongoing from "./orderPages/Ongoing";
import Completed from "./orderPages/Completed";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const tabs = ["All Orders", "Pickup Schedule", "Ongoing", "Completed"];

export const sampleOrders = [
    {
        name: "John doe",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "Andrew Tate",
        pickupTime: "8:51 pm",
        id: '1',
    },
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },
    ,
    {
        name: "Siwggy Kumar",
        contact: "8978765654",
        email: "john@gmail.com",
        pickup: "20/05/2025",
        service: "washing & Ironing",
        address: "golden city center , Chh Sambhajinagar",
        payment: "Cash on  Delivery",
        deliveryBoy: "MS.Dhoni",
        pickupTime: "7:16 pm",
        id: '2',
    },


];

const Orders = () => {
    const [activeTab, setActiveTab] = useState("All Orders");
    const navigate = useNavigate();
    const { id } = useParams();





    return (
        <div className="p-4 md:p-[1rem] w-[100vw] md:w-[unset]">
            <div className="flex justify-between items-center p-0 mb-4 ">
                <div className="flex gap-4 md:gap-[70px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[12px] font-semibold md:text-sm ${activeTab === tab
                                ? "text-black border-b-2 border-black"
                                : "text-gray-400 "
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Filter Icon */}
                <div>
                    <svg
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 14.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-6.586L3.293 6.707A1 1 0 013 6V4z"
                        />
                    </svg>
                </div>
            </div>

            {/* Table */}
            {activeTab === "All Orders" && (
               <div className="  w-[auto] p- md:w-[unset]  md:p-0 ">
                 <div className="overflow-scroll bg-white rounded-xl shadow max-h-[75vh] px-0 md:px-4 ">
                    <table className="min-w-full text-sm text-left  ">
                        <thead className="text-black font-semibold 100 sticky top-0 bg-white ">
                            <tr >
                                <th className="px-[15px] py-[20px] text-[12px] md:text-sm whitespace-nowrap ">Customer Name</th>
                                <th className="px-[15px] py-[10px] text-[12px] md:text-sm whitespace-nowrap ">Contact No</th>
                                <th className="px-[15px] py-[10px] text-[12px] md:text-sm ">Email</th>
                                <th className="px-[15px] py-[10px]  text-[12px] md:text-sm whitespace-nowrap ">Pickup Date</th>
                                <th className="px-[15px] py-[10px] text-[12px] md:text-sm ">Service Type</th>
                                <th className="px-[15px] py-[10px] text-[12px] md:text-sm ">Address</th>
                                <th className="px-[15px] py-[10px] text-[12px] md:text-sm whitespace-nowrap ">Payment Method</th>
                                <th className="px-[15px] py-[10px] text-[12px] md:text-sm "></th>

                            </tr >
                        </thead>
                        <tbody className="text-gray-400 border-t">
                            {sampleOrders.map((order, index) => (
                                <tr key={index} >
                                    <td
                                        className="px-[15px] py-[10px] cursor-pointer text-[12px] md:text-sm"
                                        onClick={() => navigate(`/home/userData/${order.id}`)}
                                    >
                                        {order.name}
                                    </td>
                                    <td className="px-[15px] py-[10px] text-[12px] md:text-sm cursor-pointer">{order.contact}</td>
                                    <td className="px-[15px] py-[10px] text-[12px] md:text-sm cursor-pointer">{order.email}</td>
                                    <td className="px-[15px] py-[10px] text-[12px] md:text-sm cursor-pointer">{order.pickup}</td>
                                    <td className="px-[15px] py-[10px] text-[12px] md:text-sm whitespace-nowrap cursor-pointer">{order.service}</td>
                                    <td className="px-[15px] py-[10px] text-[12px] md:text-sm cursor-pointer">{order.address}</td>
                                    <td className="px-[15px] py-[10px] text-[12px] md:text-sm whitespace-nowrap cursor-pointer">{order.payment}</td>
                                    <td className="px-[15px] py-[10px] text-[12px] md:text-sm cursor-pointer">
                                        <button className="bg-[#041434] text-[12px] md:text-sm text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap">
                                            Schedule Pickup
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            )}

            {activeTab == "Pickup Schedule" && <PickupSchedule />}
            {activeTab == "Ongoing" && <Ongoing />}
            {activeTab == "Completed" && <Completed />}
        </div>
    );
};

export default Orders;
