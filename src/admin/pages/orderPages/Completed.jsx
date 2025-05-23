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
              <th className="px-[20px] py-[20px] font-bold">Costumer Name</th>
              <th className="px-[20px] py-[20px] font-bold">Contact No</th>
              <th className="px-[20px] py-[20px] font-bold">Email</th>
              <th className="px-[20px] py-[20px] font-bold">Service Type</th>
              <th className="px-[20px] py-[20px] font-bold">Delivered By</th>
              <th className="px-[20px] py-[20px] font-bold">Address</th>
              <th className="px-[20px] py-[20px] font-bold">Payment Method</th>
              <th className="px-[20px] py-[20px] font-bold">Delivered On</th>
            </tr>
          </thead>
          <tbody className='border-t'>
            {completedOrders.map((order, index) => (
              <tr key={index} className=" ">
                <td className="px-[15px] py-[10px] cursor-pointer">{order.customerName}</td>
                <td className="px-[15px] py-[10px]">{order.contactNo}</td>
                <td className="px-[15px] py-[10px]">{order.email}</td>
                <td className="px-[15px] py-[10px] capitalize">{order.serviceType}</td>
                <td className="px-[15px] py-[10px]">
                  {order.deliveredBy}
                  <br />
                  <span className="text-xs text-gray-500">{order.deliveryBoyContact}</span>
                </td>
                <td className="px-[20px] py-4 ">{order.address}</td>
                <td className="px-[20px] py-4">{order.paymentMethod}</td>
                <td className="px-[20px] py-4">{order.deliveredOn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Completed;
