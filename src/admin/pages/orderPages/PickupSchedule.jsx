import { useNavigate } from "react-router-dom";
import { sampleOrders } from "../ManageUsers";

const PickupSchedule = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-scroll px-4 bg-white rounded-lg shadow max-h-[75vh]">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xm text-black bg-white border-b whitespace-nowrap font-semibold sticky top-0">
          <tr>
            <th className="px-[15px] py-[20px] text-[12px] md:text-sm whitespace-nowrap">Customer Name</th>
            <th className="px-6 py-3  sm:table-cell text-[12px] md:text-sm whitespace-nowrap">Contact No</th>
            <th className="px-6 py-3  md:table-cell text-[12px] md:text-sm whitespace-nowrap">Email</th>
            <th className="px-6 py-3  sm:table-cell text-[12px] md:text-sm whitespace-nowrap">Pickup Date & Time</th>
            <th className="px-6 py-3  lg:table-cell text-[12px] md:text-sm whitespace-nowrap">Delivery Boy</th>
            <th className="px-6 py-3  lg:table-cell text-[12px] md:text-sm whitespace-nowrap">Address</th>
            <th className="px-6 py-3  md:table-cell text-[12px] md:text-sm whitespace-nowrap">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {sampleOrders.map((order, index) => (
            <tr
              key={index}
              className="text-gray-400 cursor-pointer hover:bg-gray-100 text-[12px] md:text-sm "
            >
              <td
                className="px-6 py-4"
                onClick={() => navigate(`/userData/${order.id}`)}
              >
                {order.name}
              </td>
              <td className="px-6 py-4 text-[12px] md:text-sm  sm:table-cell">{order.contact}</td>
              <td className="px-6 py-4 text-[12px] md:text-sm  md:table-cell">{order.email}</td>
              <td className="px-6 py-4 text-[12px] md:text-sm  sm:table-cell">
                {order.pickup}
                <p>{order.pickupTime}</p>
              </td>
              <td className="px-6 py-4 text-[12px] md:text-sm  lg:table-cell">{order.deliveryBoy}</td>
              <td className="px-6 py-4 text-[12px] md:text-sm  lg:table-cell">{order.address}</td>
              <td className="px-6 py-4 text-[12px] md:text-sm  md:table-cell">{order.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PickupSchedule;
