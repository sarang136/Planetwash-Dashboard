import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";

const Header = ({ toggleSidebar }) => {
    const location = useLocation();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    // Path to Title Mapping
    const titles = [    
        { path: "/home/dashboard", title: "Dashboard" },
        { path: "/home/manageUsers", title: "Orders" },
        { path: "/home/addservice", title: "Add Service" },
        { path: "/home/revenue", title: "Revenue" },
        { path: "/home/addphotos", title: "Photos" },
        { path: "/home/delivery-boys", title: "Delivery Boys" },
        { path: "/home/product-details", title: "Product Details" },
    ];

    const currentTitle = titles.find(t => location.pathname.startsWith(t.path))?.title || "Shop Panel";

    return (
        <header className="bg-white shadow-md p-4 flex items-center justify-between font-dm w-[100vw] md:w-[unset] md:py-4 ">
            {/* Sidebar Toggle Button (Mobile) */}
            <button onClick={toggleSidebar} className="text-gray-900 text-2xl md:hidden">
                <FaBars />
            </button>

            {/* Dynamic Page Title */}
            <h1 className=" text-black font-bold md:text-2xl">{currentTitle}</h1>
            <FaUserLarge className="md:mr-14 text-2xl text-[#8EDF4C]" />

        </header>
    );
};

export default Header;
