const ServicesData = ({ service }) => {
  return (
    <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden">
     <thead className="bg-[rgba(235,235,235,1)] text-black">
        <tr>
          {/* <th className="p-6 text-left">Product </th> */}
          <th className="p-6 text-left">Product</th>
          <th className="p-6 text-left">Price</th>
          <th className="p-6 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          {/* <td className="px-[20px] py-[20px] border border-gray-300">{service.title}</td> */}
          <td className="px-[20px] py-[20px] border border-gray-300">{service.products.productName}</td>
          <td className="px-[20px] py-[20px] border border-gray-300">{service.products.price}</td>
          <td className="px-[20px] py-[20px] border border-gray-300">{service.products.action}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ServicesData;
