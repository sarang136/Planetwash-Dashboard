import { useState } from "react";
import ServicesData from "./ServicesData";
import Img1 from '../../../public/Rectangle 74.png';
import Img2 from '../../../public/Rectangle 75.png'
import { Trash2, X, Sparkles } from "lucide-react";

export const services = [
  {
    title: "Washing & Ironing",
    img: Img1,
    products: {
      productName: "Tshirt",
      price: "10rs",
      action: <Trash2 />,
    },
  },
  {
    title: "Dry Cleaning",
    img: Img2,
    products: {
      productName: "Jeans",
      price: "20rs",
      action: <Trash2 />,
    },
  },
];

const AddService = () => {
  const [showData, setShowData] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);

  const handleImageClick = (service) => {
    setSelectedService(service);
    setShowData(true);
  };

  return (
    <div className="p-6   font-sans relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-xl text-[12px] font-semibold text-[#002244]">All Services</h2>
        <div className="flex gap-4">
          <button
            className="bg-[#002244] text-white md:px-6 md:py-2 rounded-lg p-2 text-[12px] md:text-sm "
            onClick={() => setShowServiceForm(true)}
          >
            Add Service
          </button>
          <button
            className="bg-[#002244] text-white md:px-6 md:py-2 rounded-lg text-[12px] p-2 md:text-sm"
            onClick={() => setShowProductForm(true)}
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-lg md:w-[250px] overflow-hidden relative"
          >
            <img
              onClick={() => handleImageClick(service)}
              src={service.img}
              alt={service.title}
              className="h-[150px] w-full object-cover cursor-pointer"
            />
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
                alt="delete"
                className="w-4 h-4"
              />
            </button>
            <div className="p-3 text-center font-medium text-black">
              {service.title}
              <div className="text-sm text-gray-600 mt-1"></div>
              <div className="mt-1 flex justify-center text-red-500"></div>
            </div>
          </div>
        ))}
      </div>

      {showData && selectedService && (
        <div className="mt-6">
          <ServicesData service={selectedService} />
        </div>
      )}

      {/* Add Service Modal */}
      {showServiceForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-3xl shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowServiceForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-[#002244]">Service Name</h3>
            <form>
              {/* Replace these with your actual input fields */}
              <input
                type="text"
                placeholder="Enter Service Name"
                className="w-full mb-4 p-4 border rounded-lg"
              />
              <h3 className="text-lg font-semibold mb-4 text-[#002244]">Update Photo</h3>
              <input
                type="text"
                placeholder={<Sparkles />}
                className="w-full mb-4 p-2 border rounded-lg h-[200px] flex text-center"
              />
              <div className="flex justify-center">
                <button type="submit" className="bg-[#002244] text-white px-4 py-2 rounded-xl ">
                  Add Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {showProductForm && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 rounded-3xl">
          <div className="bg-white p-8 rounded-3xl shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowProductForm(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-[#002244]">Select Service</h3>
            <form>
              {/* Replace these with your actual input fields */}
              
              <input
                type="text"
                placeholder="Select Service"
                className="w-full mb-4 p-4 border rounded-lg"
              />
               <h3 className="text-lg font-semibold mb-4 text-[#002244] ">Product Name</h3>
              <input
                type="text"
                placeholder="Enter Product Name"
                className="w-full mb-4 p-4 border rounded-lg"
              />
               <h3 className="text-lg font-semibold mb-4 text-[#002244]">Price</h3>
              <input
                type="text"
                placeholder="Enter Price"
                className="w-full mb-4 p-4 border rounded-lg "
              />

              <div className="flex justify-center">
                <button type="submit" className="bg-[#002244] text-white px-4 py-2 rounded-2xl">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddService;
