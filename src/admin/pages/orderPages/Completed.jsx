const completedOrders = [
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
  {
    customerName: 'John doe',
    contactNo: '8978765654',
    email: 'john@gmail.com',
    serviceType: 'washing & Ironing',
    deliveredBy: 'Johnny',
    deliveryBoyContact: '8547854785',
    address: 'golden city center , Chh Sambhajinagar',
    paymentMethod: 'Cash on Delivery',
    deliveredOn: '20/05/2025',
  },
];

const Completed = () => {

  return (
    <div className="px-4 bg-white  shadow rounded-lg max-h-[75vh] overflow-y-scroll">
      <div className="overflow-x-auto ">
        <table className="min-w-full text-left text-sm text-gray-400   overflow-hidden ">
          <thead className="text-sm text-black p-4 whitespace-nowrap ">
            <tr>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Costumer Name</th>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Contact No</th>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Email</th>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Service Type</th>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Delivered By</th>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Address</th>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Payment Method</th>
              <th className="px-[20px] py-[20px] font-bold text-[12px] md:text-sm whitespace-nowrap">Delivered On</th>
            </tr>
          </thead>
          <tbody className='border-t'>
            {completedOrders.map((order, index) => (
              <tr key={index} className=" ">
                <td className="px-[15px] py-[10px] cursor-pointer text-[12px] md:text-sm">{order.customerName}</td>
                <td className="px-[15px] py-[10px] text-[12px] md:text-sm">{order.contactNo}</td>
                <td className="px-[15px] py-[10px] text-[12px] md:text-sm">{order.email}</td>
                <td className="px-[15px] py-[10px] text-[12px] md:text-sm capitalize">{order.serviceType}</td>
                <td className="px-[15px] py-[10px] text-[12px] md:text-sm">
                  {order.deliveredBy}
                  <br />
                  <span className="text-xs text-gray-500 text-[12px] md:text-sm ">{order.deliveryBoyContact}</span>
                </td>
                <td className="px-[20px] py-4 text-[12px] md:text-sm ">{order.address}</td>
                <td className="px-[20px] py-4 text-[12px] md:text-sm">{order.paymentMethod}</td>
                <td className="px-[20px] py-4 text-[12px] md:text-sm">{order.deliveredOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
