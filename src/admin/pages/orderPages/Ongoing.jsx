import React from 'react';
import { useNavigate } from 'react-router-dom';

const ongoingOrders = [
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    address: 'golden city center ,\nChh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    address: 'golden city center ,\nChh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
  },
];

const Ongoing = () => {
  const navigate = useNavigate(); 

  return (
    <div className="p-4 bg-white  rounded-lg shadow">
      <div className="overflow-x-auto ">
        <table className="min-w-full text-left text-sm text-gray-400 bg-white rounded-xl overflow-hidden">
          <thead className="text-sm text-black">
            <tr>
              <th className="px-6 py-3 font-semibold">Customer Name</th>
              <th className="px-6 py-3 font-semibold">Contact No</th>
              <th className="px-6 py-3 font-semibold">Email</th>
              <th className="px-6 py-3 font-semibold">Service Type</th>
              <th className="px-6 py-3 font-semibold">Address</th>
              <th className="px-6 py-3 font-semibold">Payment Method</th>
            </tr>
          </thead>
          <tbody className="border-t cursor-pointer">
            {ongoingOrders.map((order, index) => (
              <tr key={index}>
                <td
                  className="px-6 py-4 "
                  onClick={() => navigate('/orderdetails')}
                >
                  {order.customerName}
                </td>
                <td className="px-[15px] py-[10px]">{order.contactNo}</td>
                <td className="px-[15px] py-[10px]">{order.email}</td>
                <td className="px-[15px] py-[10px] capitalize">{order.serviceType}</td>
                <td className="px-[15px] py-[10px] whitespace-pre-wrap">{order.address}</td>
                <td className="px-[15px] py-[10px]">{order.paymentMethod}</td>
                <td className="px-[15px] py-[10px] text-right">
                  <button className="bg-[#002244] text-white px-4 py-2 rounded-lg text-[10px] whitespace-nowrap">
                    Schedule Delivery
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ongoing;
