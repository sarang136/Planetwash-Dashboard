import React from "react";
import { ArrowUp, ArrowDown, CheckCircle } from "lucide-react";
import { BsBasket3Fill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";
import { useGetUserOrdersQuery } from "../redux/appSlice";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const IconStatsCards = () => {
  
  const {data } = useGetUserOrdersQuery();

  const stats = [
    {
      icon: <BsBasket3Fill className="text-blue-500 w-[5rem] h-[5rem] p-3" />,
      title: "Total Orders",
      value: `${data?.length}`,
      trend: "Increased From Last week",
      trendColor: "text-green-500",
      path:'/home/manageUsers',
      status: "up",
    },
    {
      icon: <FaCreditCard className="text-blue-500 w-[5rem] h-[5rem] p-3" />,
      title: "Total Revenue",
      value: "Rs.2000",
      trend: "Decreased From Last week",
      trendColor: "text-red-500",
       path:'',
      status: "down",
    },
  ];
const navigate = useNavigate();

  return (
<div className="grid grid-cols-1 w-[100vw] md:w-[unset] md:grid-cols-2 gap-2 p-4 md:gap-6 md:p-4 container">
  {stats.map((stat, index) => (
    <Link to={stat.path} key={index} className="block">
      <div className="bg-white rounded-2xl p-[0.7rem] shadow-md md:flex md:justify-between items-start hover:shadow-lg transition-shadow duration-200">
        {/* Icon and Info */}
        <div className="flex gap-4 items-start">
          <div className="bg-blue-100 p-0 rounded-xl md:p-4">
            {stat.icon}
          </div>
          <div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-semibold text-[#1f2454]">{stat.value}</p>
            <div className={`flex items-center text-sm font-medium ${stat.trendColor} mt-1`}>
              {stat.status === "up" ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
              <span className="ml-1">{stat.trend}</span>
            </div>
          </div>
        </div>

        {/* On Track Label */}
        <div className="flex items-center text-green-500 text-sm">
          <CheckCircle size={16} className="mr-1" />
          On track
        </div>
      </div>
    </Link>
  ))}
</div>
  );
};

export default IconStatsCards;
