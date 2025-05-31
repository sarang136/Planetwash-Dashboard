import React, { useEffect, useState } from "react";
import { useGetUserOrdersByStatusQuery } from "../../redux/appSlice";
import { useNavigate } from "react-router-dom";
import ShimmerUiForOrders from "../../../ShimmerUis/ShimmerUiForOrders";

const Completed = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUserOrdersByStatusQuery("completed");
  const completedOrders = data?.orders || [];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading) {
    return isMobile ? (
      <div className="p-4 text-sm text-center text-gray-500">Loading...</div>
    ) : (
      <ShimmerUiForOrders />
    );
  }

  if (error) {
    return <p className="text-center text-gray-500 py-6">No Orders Found</p>;
  }

  return (
    <div className="w-[auto] md:w-[unset] md:p-0 p-0">
      <div className="overflow-y-scroll bg-white rounded-xl shadow max-h-[75vh] px-0 md:px-4">
        {isMobile ? (
          <div className="p-2 flex flex-col gap-4">
            {completedOrders.length === 0 ? (
              <p className="text-center text-gray-500 py-6">No completed orders found</p>
            ) : (
              completedOrders.map((order, index) => {
                const {
                  _id,
                  addressId,
                  deliveryBoyName,
                  deliveryBoyContact,
                  paymentMethod,
                  services,
                  updatedAt
                } = order;

                return (
                  <div key={index} className="bg-white p-3 rounded-lg shadow border">
                    <div>
                      <label className="text-xs font-semibold">Customer Name</label>
                      <input
                        type="text"
                        value={addressId?.name || ""}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1"
                        onClick={() => navigate(`/home/userData/${_id}`)}
                      />
                    </div>
                    <div className="mt-2">
                      <label className="text-xs font-semibold">Contact No</label>
                      <input
                        type="text"
                        value={addressId?.contactNo || ""}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="text-xs font-semibold">Email</label>
                      <input
                        type="email"
                        value={addressId?.email || ""}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="text-xs font-semibold">Service Type</label>
                      <input
                        type="text"
                        value={services?.[0]?.serviceId?.name || ""}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="text-xs font-semibold">Delivered By</label>
                      <input
                        type="text"
                        value={`${deliveryBoyName || "N/A"} (${deliveryBoyContact || "N/A"})`}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="text-xs font-semibold">Address</label>
                      <input
                        type="text"
                        value={`${addressId?.location || ""}, ${addressId?.pincode || ""}`}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="text-xs font-semibold">Payment</label>
                      <input
                        type="text"
                        value={paymentMethod || "Cash on Delivery"}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1 capitalize"
                      />
                    </div>
                    <div className="mt-2">
                      <label className="text-xs font-semibold">Delivered On</label>
                      <input
                        type="text"
                        value={updatedAt ? new Date(updatedAt).toLocaleDateString() : ""}
                        disabled
                        className="w-full bg-gray-100 rounded px-2 py-1 text-sm mt-1"
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        ) : (
          <table className="min-w-full text-[10px] md:text-sm text-left">
            <thead className="text-black font-semibold sticky top-0 bg-white z-10">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4 whitespace-nowrap">Contact No</th>
                <th className="p-4">Email</th>
                <th className="p-4">Service Type</th>
                <th className="p-4">Delivered By</th>
                <th className="p-4">Address</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Delivered On</th>
              </tr>
            </thead>
            <tbody className="text-gray-400 border-t">
              {completedOrders.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center text-gray-500 py-6">
                    No completed orders found
                  </td>
                </tr>
              ) : (
                completedOrders.map((order, index) => {
                  const {
                    _id,
                    addressId,
                    deliveryBoyName,
                    deliveryBoyContact,
                    paymentMethod,
                    services,
                    updatedAt
                  } = order;

                  return (
                    <tr key={index}>
                      <td
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => navigate(`/home/userData/${_id}`)}
                      >
                        {addressId?.name}
                      </td>
                      <td className="p-4">{addressId?.contactNo}</td>
                      <td className="p-4">{addressId?.email}</td>
                      <td className="p-4">{services[0]?.serviceId?.name}</td>
                      <td className="p-4">
                        {deliveryBoyName}<br />{deliveryBoyContact}
                      </td>
                      <td className="px-4 py-2">
                        {addressId?.location}, {addressId?.pincode}
                      </td>
                      <td className="px-4 py-2 capitalize">
                        {paymentMethod || "Cash on Delivery"}
                      </td>
                      <td className="px-4 py-2">
                        {new Date(updatedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Completed;
