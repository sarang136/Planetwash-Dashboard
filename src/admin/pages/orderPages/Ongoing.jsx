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
           <thead className="text-xm text-black bg-white border-b whitespace-nowrap font-semibold sticky top-0">
            <tr>
              <th className="px-[15px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Customer Name</th>
              <th className="px-6 py-3 font-bold text-[12px] md:text-sm whitespace-nowrap">Contact No</th>
              <th className="px-6 py-3 font-bold text-[12px] md:text-sm whitespace-nowrap">Email</th>
              <th className="px-6 py-3 font-bold text-[12px] md:text-sm whitespace-nowrap">Service Type</th>
              <th className="px-6 py-3 font-bold text-[12px] md:text-sm whitespace-nowrap">Address</th>
              <th className="px-6 py-3 font-bold text-[12px] md:text-sm whitespace-nowrap">Payment Method</th>
            </tr>
          </thead>
          <tbody className="border-t cursor-pointer">
            {ongoingOrders.map((order, index) => (
              <tr key={index}>
                <td
                  className="px-[15px] py-[10px] text-[12px] md:text-sm"
                  onClick={() => navigate('/orderdetails')}
                >
                  {order.customerName}
                </td>
                <td className="px-[15px] py-[20px] text-[12px] md:text-sm">{order.contactNo}</td>
                <td className="px-[15px] py-[20px] text-[12px] md:text-sm">{order.email}</td>
                <td className="px-[15px] py-[20px] capitalize text-[12px] md:text-sm">{order.serviceType}</td>
                <td className="px-[15px] py-[20px] text-[12px] md:text-sm whitespace-pre-wrap">{order.address}</td>
                <td className="px-[15px] py-[20px] text-[12px] md:text-sm">{order.paymentMethod}</td>
                <td className="px-[15px] py-[20px] text-[12px] md:text-sm ">
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
