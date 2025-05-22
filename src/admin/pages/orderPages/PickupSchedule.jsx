import { useNavigate } from "react-router-dom";
import { sampleOrders } from "../ManageUsers";

const PickupSchedule = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto p-4 bg-white rounded-lg shadow">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-black uppercase bg-white border-b whitespace-nowrap font-semibold">
          <tr>
            <th className="px-6 py-3">Customer Name</th>
            <th className="px-6 py-3 hidden sm:table-cell">Contact No</th>
            <th className="px-6 py-3 hidden md:table-cell">Email</th>
            <th className="px-6 py-3 hidden sm:table-cell">Pickup Date & Time</th>
            <th className="px-6 py-3 hidden lg:table-cell">Delivery Boy</th>
            <th className="px-6 py-3 hidden lg:table-cell">Address</th>
            <th className="px-6 py-3 hidden md:table-cell">Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {sampleOrders.map((order, index) => (
            <tr
              key={index}
              className="text-gray-400 cursor-pointer hover:bg-gray-100"
            >
              <td
                className="px-6 py-4"
                onClick={() => navigate(`/userData/${order.id}`)}
              >
                {order.name}
              </td>
              <td className="px-6 py-4 hidden sm:table-cell">{order.contact}</td>
              <td className="px-6 py-4 hidden md:table-cell">{order.email}</td>
              <td className="px-6 py-4 hidden sm:table-cell">
                {order.pickup}
                <p>{order.pickupTime}</p>
              </td>
              <td className="px-6 py-4 hidden lg:table-cell">{order.deliveryBoy}</td>
              <td className="px-6 py-4 hidden lg:table-cell">{order.address}</td>
              <td className="px-6 py-4 hidden md:table-cell">{order.payment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PickupSchedule;
