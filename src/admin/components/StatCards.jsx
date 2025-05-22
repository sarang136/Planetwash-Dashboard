import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
} from "recharts";
import { CalendarDays, BarChart3, CheckCircle } from "lucide-react";

const lineData = [
  { name: "SEP", value: 40 },
  { name: "OCT", value: 60 },
  { name: "NOV", value: 108 },
  { name: "DEC", value: 80 },
  { name: "JAN", value: 90 },
  { name: "FEB", value: 70 },
];

const barData = [
  { name: "17", uv: 20, pv: 30 },
  { name: "18", uv: 20, pv: 35 },
  { name: "19", uv: 25, pv: 30 },
  { name: "20", uv: 15, pv: 25 },
  { name: "21", uv: 20, pv: 25 },
  { name: "22", uv: 22, pv: 28 },
  { name: "23", uv: 21, pv: 29 },
  { name: "24", uv: 23, pv: 27 },
  { name: "25", uv: 22, pv: 30 },
];

const StatCards = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-2">
      
      {/* Line Chart Card */}
      <div className="bg-white p-[0.7rem] rounded-2xl shadow-md w-full md:w-[48%] flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="text-xl font-bold text-[#1f2454]">
            <div className="flex items-center gap-2 text-sm text-blue-400 font-medium bg-blue-50 px-2 py-1 rounded-lg w-fit mb-1">
              <CalendarDays size={14} />
              This month
            </div>
          </div>
          <BarChart3 className="text-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Left: Details */}
          <div className="flex-1">
            
            <h2 className="text-3xl font-bold text-[#1f2454]">Rs.37.5K</h2>
            <p className="text-gray-500 text-sm">Total Spent</p>
            <p className="text-green-500 text-sm font-semibold mt-1">▲ +2.45%</p>
            <div className="flex items-center text-green-500 text-sm mt-1">
              <CheckCircle size={16} className="mr-1" />
              On track
            </div>
          </div>

          {/* Right: Chart */}
          <div className="flex-1 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <Tooltip formatter={(value) => `Rs.${value}.00`} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#000000"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="bg-white p-[0.7rem] rounded-2xl shadow-md w-full md:w-[48%] flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold text-[#1f2454]">Weekly Revenue</h2>
          <BarChart3 className="text-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">

          {/* Right: Chart */}
          <div className="flex-1 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart  data={barData}>
                <XAxis  dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis hide />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Tooltip />
                <Bar dataKey="uv" stackId="a" fill="#6c5dd3" />
                <Bar dataKey="pv" stackId="a" fill="#38bdf8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
