import React from "react";
import { useGetUserOrdersByStatusQuery } from "../../redux/appSlice";
import ShimmerUiForOrders from "../../../ShimmerUis/ShimmerUiForOrders";
import { useNavigate } from "react-router-dom";

const PickupSchedule = () => {
  const { data, isLoading, error } = useGetUserOrdersByStatusQuery("pickup-schedule");
  const navigate = useNavigate();

  const isMobile = window.innerWidth < 768;

  if (isLoading)
    return isMobile ? (
      <p className="text-center py-4 animate-pulse">Loading...</p>
    ) : (
      <ShimmerUiForOrders />
    );

  if (error) return <p className="text-center text-red-500 py-6">Error loading orders.</p>;

  const pickupOrders = data?.orders || [];

  return (
    <div className="max-h-[75vh] overflow-y-auto p-4 space-y-6">
      {pickupOrders.length === 0 ? (
        <p className="text-center text-gray-500 py-6">No pickup scheduled orders found</p>
      ) : (
        pickupOrders.map((order, index) => {
          const {
            _id,
            addressId,
            deliveryBoyName,
            deliveryBoyContact,
            paymentMethod,
            updatedAt,
            services,
            pickupDateTime,
          } = order;

          return (
            <div
              key={_id || index}
              className="bg-white p-4 rounded-xl shadow-md border border-gray-200 text-xs md:text-sm"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="w-full md:w-1/2 space-y-3">
                  <div>
                    <label className="font-semibold block mb-1">Customer Name</label>
                    <input
                      type="text"
                      value={addressId?.name || ""}
                      disabled
                      onClick={() => navigate(`/home/userData/${_id}`)}
                      className="w-full bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Contact No</label>
                    <input
                      type="text"
                      value={addressId?.contactNo || ""}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Email</label>
                    <input
                      type="email"
                      value={addressId?.email || ""}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Service Type</label>
                    <input
                      type="text"
                      value={services?.[0]?.serviceId?.name || ""}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-3">
                  <div>
                    <label className="font-semibold block mb-1">Delivered By</label>
                    <input
                      type="text"
                      value={`${deliveryBoyName || "N/A"} (${deliveryBoyContact || "N/A"})`}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Address</label>
                    <input
                      type="text"
                      value={`${addressId?.location || ""}, ${addressId?.pincode || ""}`}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Payment</label>
                    <input
                      type="text"
                      value={paymentMethod || "Cash on Delivery"}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md capitalize"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Pickup Date & Time</label>
                    <input
                      type="text"
                      value={pickupDateTime ? new Date(pickupDateTime).toLocaleString() : ""}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">Last Updated On</label>
                    <input
                      type="text"
                      value={updatedAt ? new Date(updatedAt).toLocaleString() : ""}
                      disabled
                      className="w-full bg-gray-100 px-3 py-2 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PickupSchedule;
