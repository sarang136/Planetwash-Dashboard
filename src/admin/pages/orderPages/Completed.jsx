import React from "react";
import { useGetUserOrdersByStatusQuery } from '../../redux/appSlice';
import { useNavigate } from "react-router-dom";
import ShimmerUiForOrders from "../../../ShimmerUis/ShimmerUiForOrders";

const Completed = () => {
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetUserOrdersByStatusQuery("completed");
  console.log(data);

  if (isLoading) return <ShimmerUiForOrders />;
  if (error) return <p className="text-center text-gray-500 py-6">No Orders Found</p>;

  const completedOrders = data?.orders || [];

  return (
    <div className="w-[auto] md:w-[unset] md:p-0">
      <div className="overflow-y-scroll bg-white rounded-xl shadow max-h-[75vh] px-0 md:px-4">
        <table className="min-w-full text-sm text-left">
          <thead className="text-black font-semibold sticky top-0 bg-white z-10">
            <tr>
              <th className="p-4 whitespace-nowrap">Customer Name</th>
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
                    <td className="px-4 py-2 capitalize">{paymentMethod || "Cash on Delivery"}</td>
                    <td className="px-4 py-2">{new Date(updatedAt).toLocaleDateString()}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
