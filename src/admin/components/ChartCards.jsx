import React from "react";
import { ArrowUp, ArrowDown, CheckCircle } from "lucide-react";
import { BsBasket3Fill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";

const IconStatsCards = () => {
  const stats = [
    {
      icon: <BsBasket3Fill className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16 p-2 sm:p-3" />,
      title: "Total Orders",
      value: "200",
      trend: "Increased From Last week",
      trendColor: "text-green-500",
      status: "up",
    },
    {
      icon: <FaCreditCard className="text-blue-500 w-12 h-12 sm:w-16 sm:h-16 p-2 sm:p-3" />,
      title: "Total Revenue",
      value: "Rs.2000",
      trend: "Decreased From Last week",
      trendColor: "text-red-500",
      status: "down",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-2 sm:p-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-3 sm:p-4 shadow-md flex flex-wrap sm:flex-nowrap justify-between items-start"
        >
          {/* Icon and Info */}
          <div className="flex gap-3 sm:gap-4 items-start flex-1">
            <div className="bg-blue-100 p-3 sm:p-4 rounded-xl">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-gray-600 text-sm sm:text-base font-medium">{stat.title}</h3>
              <p className="text-xl sm:text-2xl font-semibold text-[#1f2454]">{stat.value}</p>
              <div className={`flex items-center text-xs sm:text-sm font-medium ${stat.trendColor} mt-1`}>
                {stat.status === "up" ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                <span className="ml-1">{stat.trend}</span>
              </div>
            </div>
          </div>

          {/* On Track Label */}
          <div className="flex items-center text-green-500 text-xs sm:text-sm mt-2 sm:mt-0 sm:ml-4">
            <CheckCircle size={16} className="mr-1" />
            On track
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconStatsCards;
