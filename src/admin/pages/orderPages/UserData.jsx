import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { sampleOrders } from "../ManageUsers";
import {
  GiArmoredPants,
  GiDress,
  GiShorts,
  GiTShirt,
} from "react-icons/gi";

const UserData = () => {
  const { id } = useParams();
  const orderData = sampleOrders.find((o) => o.id === id);

  const [showItems, setShowItems] = useState("Washing");
  const [formData, setFormData] = useState(orderData || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (!orderData) {
    return <div className="p-4 text-red-500">User data not found.</div>;
  }

  return (
    <div className="p-6 bg-[#fdf9f9] min-h-screen">
      <div className="bg-white px-10 py-8 rounded-xl shadow-md">
        {/* User info inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-600 ">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-4 bg-gray-100 rounded-md"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-600">
              Contact No
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full mt-1 p-4 bg-gray-100 rounded-md"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-4 bg-gray-100 rounded-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full mt-1 p-4 bg-gray-100 rounded-md"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-600">
              Order Date
            </label>
            <input
              type="date"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              className="w-full mt-1 p-4 bg-gray-100 rounded-md"
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-600">
              Total Amount
            </label>
            <input
              type="text"
              name="amount"
              value={formData.amount || ""}
              onChange={handleChange}
              className="w-full mt-1 p-4 bg-gray-100 rounded-md text-green-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-lg font-medium text-gray-600">
              Payment Method
            </label>
            <input
              type="text"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full mt-1 p-4 bg-gray-100 rounded-md"
            />
          </div>
        </div>

        {/* Service Types Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Service Type</h3>
          <div className="flex gap-6 border-b mb-4">
            <button
              className={`font-semibold pb-1 ${
                showItems === "Washing"
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-400"
              }`}
              onClick={() => setShowItems("Washing")}
            >
              Washing & Ironing
            </button>
            <button
              className={`font-semibold pb-1 ${
                showItems === "Dry Cleaning"
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-400"
              }`}
              onClick={() => setShowItems("Dry Cleaning")}
            >
              Dry Cleaning
            </button>
          </div>

          {/* Washing Items */}
          {showItems === "Washing" && (
            <div className="flex gap-4 p-6 h-[200px]">
              <div className="bg-blue-100 rounded-lg p-8 flex flex-row gap-2 justify-center items-center w-[200px]">
                <GiTShirt size={50} className="text-[#002244]" />
                <p className="font-semibold whitespace-nowrap">T - Shirts</p>
                <p className="font-bold">5</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-8 flex flex-row gap-2 justify-center items-center w-[200px]">
                <GiDress size={50} className="text-[#002244]" />
                <p className="font-semibold whitespace-nowrap">Top</p>
                <p className="font-bold">5</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-8 flex flex-row gap-2 justify-center items-center w-[200px]">
                <GiShorts size={50} className="text-[#002244]" />
                <p className="font-semibold whitespace-nowrap">Formal Pant</p>
                <p className="font-bold">5</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-8 flex flex-row gap-2 justify-center items-center w-[200px]">
                <GiArmoredPants size={50} className="text-[#002244]" />
                <p className="font-semibold whitespace-nowrap">Jeans</p>
                <p className="font-bold">5</p>
              </div>
            </div>
          )}

          {/* Dry Cleaning Placeholder */}
          {showItems === "Dry Cleaning" && (
             <div className="flex gap-4 p-6 h-[200px]">
              <div className="bg-blue-100 rounded-lg p-8 flex flex-row gap-2 justify-center items-center w-[200px]">
                <GiTShirt size={50} className="text-[#002244]" />
                <p className="font-semibold whitespace-nowrap">T - Shirts</p>
                <p className="font-bold">5</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-8 flex flex-row gap-2 justify-center items-center w-[200px]">
                <GiDress size={50} className="text-[#002244]" />
                <p className="font-semibold whitespace-nowrap">Top</p>
                <p className="font-bold">5</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserData;
