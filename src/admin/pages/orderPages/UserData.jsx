import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetUserOrdersQuery } from '../../redux/appSlice';
import { GiTShirt } from "react-icons/gi";

const OrdersFormView = () => {
  const { id } = useParams();
  const { data: orders, isLoading, isError } = useGetUserOrdersQuery();
  console.log(orders);
  // const {status} = useGetUserOrdersByStatusQuery();
  const [activeTabs, setActiveTabs] = useState({});

  if (isLoading) return <p className="p-4 text-gray-500">Loading orders...</p>;
  if (isError || !orders) return <p className="p-4 text-red-500">Failed to load orders.</p>;


  const filteredOrder = orders.find(order => order._id === id);
  if (!filteredOrder) return <p className="p-4 text-gray-500">Order not found.</p>;

  const validServices = filteredOrder.services.filter(service => service.serviceId?.name);

  const handleTabClick = (tabIndex) => {
    setActiveTabs({ [id]: tabIndex });
  };

  return (

    <div className='p-4'>
      <div className="bg-white  rounded-2xl shadow-md mb-8 p-6">
        {/* User Info */}
        <div className="grid grid-cols-3 gap-6 mb-4">
          <Input label="Name" value={filteredOrder.userId?.Name} />
          <Input label="Contact No" value={filteredOrder.userId?.contactNo} />
          <Input label="Email" value={filteredOrder.userId?.email} />
          <Input label="Address" value={filteredOrder.addressId.location} />
          <Input label="Order Date" value={filteredOrder.pickupDateTime} />
          <Input label="Total Amount" value={filteredOrder.totalAmount} textClass="text-green-500" />
          <Input label="Payment Method" value="Cash On Delivery" />
          {/* {path === `/userData${_id}` <Input label="Pickup Date" value="Cash On Delivery" />} */}
          {/* <Input label="Delivery Boy" value={filteredOrder.deliveryBoyId.Name || "No Delivery Boy fetched"} /> */}
        </div>

        {validServices.length > 0 && (
          <>
            <h1 className='px-4 py-2 text-xl font-medium'>Service Type</h1>
            <div className="border-b mb-4 flex gap-4">
              {validServices.map((service, tabIndex) => (
                <button
                  key={tabIndex}
                  onClick={() => handleTabClick(tabIndex)}
                  className={`px-4 py-4 text-[22px] font-bold ${activeTabs[id] === tabIndex
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-400'
                    }`}
                >
                  {service.serviceId?.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-4">

              {validServices[activeTabs[id] || 0]?.products?.map((product, pIndex) => (
                <ServiceBox
                  key={pIndex}
                  label={product.productName}
                  quantity={product.quantity}
                  image={product.productId.image}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>

  );
};

const Input = ({ label, value, textClass = "" }) => (
  <div>
    <label className="block text-gray-500 mb-1">{label}</label>
    <input
      type="text"
      value={value || ''}
      readOnly
      className={`w-full bg-[#f9f4f3] p-4 rounded-md ${textClass}`}
    />
  </div>
);

const ServiceBox = ({ label, quantity, image }) => (
  <div className="bg-[#f9f4f3] p-10 rounded-xl flex gap-4 items-center justify-center cursor-pointer">
   <img className='h-[40px]' src={image}/>
    <div className='grid'>
      <p className="text-xl font-semibold">{label}</p>
      <p className="text-lg font-semibold">({quantity})</p>
    </div>
  </div>
);

export default OrdersFormView;
