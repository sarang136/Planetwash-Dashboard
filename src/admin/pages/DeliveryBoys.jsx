import React, { useState } from 'react';
import Img from '../../../public/postman 1.png';
import { HiTrash } from "react-icons/hi2";
import { LuPenLine } from "react-icons/lu";
import DeliveryOrders from '../components/DeliveryOrders';

const deliveryBoys = [
    { id: 1, fullName: "John Doe", number: "854785478", email: "johndoe@gmail.com" },
    { id: 2, fullName: "Jane Smith", number: "987654321", email: "janesmith@gmail.com" },
    { id: 3, fullName: "Sam Wilson", number: "456123789", email: "samwilson@gmail.com" }
];

const DeliveryBoys = () => {
    const [selectedBoy, setSelectedBoy] = useState(null);

    return (
        <div className=" flex flex-col gap-6 font-dm w- md:max-w-full">
          <div className="grid grid-cols-1 w-[100vw] md:w-[unset]  md:grid-cols-3 gap-4  p-4">
                {deliveryBoys.map((boy) => (
                    <div
                        key={boy.id}
                        className="p-6 rounded-lg bg-white cursor-pointer  xl:rounded-xl  flex justify-center gap-4 align-center"
                        onClick={() => setSelectedBoy(boy)}
                    >
                        <div className="flex items-center justify-center border-2 w-24 h-24 sm:w-28 sm:h-28 shadow-md rounded-full overflow-hidden flex-shrink-0 xl:p-4">
                            <img src={Img} alt="Delivery Boy" className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-1  px-0 sm:px-0 text-center sm:text-left mt-0 sm:mt-0 space-y-1 ">
                            <p className="font-medium text-gray-900 text-lg sm:text-xl">{boy.fullName}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{boy.number}</p>
                            <p className="text-gray-600 text-sm sm:text-base">{boy.email}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="text-red-500 transition-colors" aria-label={`Delete ${boy.fullName}`}>
                                <HiTrash size={26} />
                            </button>
                            <button className="text-black" aria-label={`Edit ${boy.fullName}`}>
                                <LuPenLine size={26} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Only show the table when a delivery boy is selected */}
            {selectedBoy && (
                <div className="w-[100vw] md:w-full overflow-x-auto ">
                    <DeliveryOrders deliveryBoy={selectedBoy} />
                </div>
            )}
        </div>
    );
};

export default DeliveryBoys;
