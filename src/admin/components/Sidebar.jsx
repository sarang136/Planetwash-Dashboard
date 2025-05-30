import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { FaCreditCard } from "react-icons/fa6";
import { MdPhotoSizeSelectActual, MdDeliveryDining } from "react-icons/md";
import { FiPlusCircle } from 'react-icons/fi';

const menuItems = [
  { name: "Dashboard", path: "/home/dashboard", icon: <GoHomeFill /> },
  { name: "Orders", path: "/home/manageUsers", icon: <FaCreditCard /> }, // Manage Users --> Orders
  { name: "Add Service", path: "/home/addservice", icon: <FiPlusCircle /> },   // Admin Panel to Add services
  { name: "Revenue", path: "/home/revenue", icon: <FaCreditCard /> },
  { name: "Add Photos", path: "/home/addphotos", icon: <MdPhotoSizeSelectActual /> },
  { name: "Delivery Boys", path: "/home/delivery-boys", icon: <MdDeliveryDining /> },
];




const Sidebar = ({ isOpen, toggleSidebar }) => {
  //const [active, setActive] = useState("Home");
  const location = useLocation(); // Get current path

  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      <div className={`md:relative inset-y-0 left-0 bg-white text-black  p-4 transform transition-transform duration-300 z-40 font-dm
            ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:w-80 w-72 fixed`}>


        {/* Close Button (Mobile) */}
        <button onClick={toggleSidebar} className="text-2xl mb-5 md:hidden">
          ✖
        </button>

        {/* Logo */}
        <div className='flex justify-center'>
          <img src="../Images/newLogo.png" alt="Logo" className='h-24' />
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-6 p-5">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick} 

                className="block"
              >
                <div
                  className={`
    relative flex items-center gap-6 p-2 pl-4 pr-4 rounded-xl w-full
    text-[#019ECE] hover:text-[#8EDF4C]
    before:content-[""] before:absolute before:top-1/2 before:left-0 
    before:-translate-y-1/2 before:h-2/3 before:w-1 before:rounded-full 
    before:bg-transparent
    ${isActive ? 'text-[#8EDF4C] before:bg-[#052344]' : ''}
  `}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xl">{item.name}</span>
                </div>
              </Link>
            );
          })}





        </nav>

      </div>

      {/* Overlay (Click to Close on Mobile) */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-10 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;
