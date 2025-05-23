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
    <div className="px-4 bg-white  rounded-lg shadow max-h-[75vh] overflow-y-scroll">
      <div className="overflow-x-auto ">
        <table className="min-w-full text-left text-sm text-gray-400 bg-white rounded-xl overflow-hidden">
          <thead className="text-sm text-black sticky">
            <tr>
              <th className="px-[15px] py-[20px] font-bold">Customer Name</th>
              <th className="px-6 py-3 font-bold">Contact No</th>
              <th className="px-6 py-3 font-bold">Email</th>
              <th className="px-6 py-3 font-bold">Service Type</th>
              <th className="px-6 py-3 font-bold">Address</th>
              <th className="px-6 py-3 font-bold">Payment Method</th>
            </tr>
          </thead>
          <tbody className="border-t cursor-pointer">
            {ongoingOrders.map((order, index) => (
              <tr key={index}>
                <td
                  className="px-[15px] py-[10px] "
                  onClick={() => navigate('/orderdetails')}
                >
                  {order.customerName}
                </td>
                <td className="px-[15px] py-[20px]">{order.contactNo}</td>
                <td className="px-[15px] py-[20px]">{order.email}</td>
                <td className="px-[15px] py-[20px] capitalize">{order.serviceType}</td>
                <td className="px-[15px] py-[20px] whitespace-pre-wrap">{order.address}</td>
                <td className="px-[15px] py-[20px]">{order.paymentMethod}</td>
                <td className="px-[15px] py-[20px] text-right">
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
