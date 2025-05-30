import React, { useState } from "react";
import {
  useGetAllServicesQuery,
  useDeleteServicesByIdMutation,
  useAddServiceMutation,
  useAddProductMutation,
} from "../redux/appSlice";
import { MdDelete } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import ServicesData from "./ServicesData";
import ShimmerUi from "../../ShimmerUis/ShimmerUi";

const AddService = () => {

  const [showModal, setShowModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [serviceName, setServiceName] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState('')


  const [selectedServiceIdForProduct, setSelectedServiceIdForProduct] = useState(
    ""
  );
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageFile, setProductImageFile] = useState(null);
  const [productPreviewImage, setProductPreviewImage] = useState(null);


  const { data: allServices, isLoading, error, refetch } = useGetAllServicesQuery();
  const [deleteServiceById] = useDeleteServicesByIdMutation();
  const [addService, { isLoading: isAdding }] = useAddServiceMutation();
  const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      await deleteServiceById(id).unwrap();
      refetch();
    } catch (err) {
      console.error("Failed to delete service:", err);
      alert("Failed to delete the service.");
    }
  };


  const handleAddService = async () => {
    if (!serviceName.trim() || !imageFile) {
      alert("Fill the details before submitting the form");
      return;
    }
    const formData = new FormData();
    formData.append("name", serviceName);
    formData.append("image", imageFile);

    try {
      await addService(formData).unwrap();
      alert("Service added successfully!");
      setShowModal(false);
      setServiceName("");
      setPreviewImage(null);
      setImageFile(null);
      refetch();
    } catch (err) {
      console.error("Failed to add service:", err);
      alert("Failed to add the service.");
    }
  };


  const handleAddProduct = async () => {
    if (
      !selectedServiceIdForProduct ||
      !productName.trim() ||
      !productPrice.trim() ||
      !productImageFile
    ) {
      alert("Please fill all fields for adding product.");
      return;
    }

    const priceNumber = Number(productPrice);
    if (isNaN(priceNumber) || priceNumber <= 0) {
      alert("Please enter a valid positive number for product price.");
      return;
    }

    const formData = new FormData();
    formData.append("serviceId", selectedServiceIdForProduct);
    formData.append("name", productName.trim());
    formData.append("price", priceNumber);
    formData.append("image", productImageFile);

    try {
      await addProduct(formData).unwrap();
      alert("Product added successfully!");

      setSelectedServiceIdForProduct("");
      setProductName("");
      setProductPrice("");
      setProductImageFile(null);
      setProductPreviewImage(null);
      setShowProductModal(false);
      refetch();
    } catch (err) {
      console.error("Failed to add product:", err);
      alert("Failed to add the product.");
    }
  };

  if (isLoading) return <ShimmerUi/>;
  if (error) return <p>Error loading services</p>;
  if (!allServices || allServices.length === 0)
    return <p>No services found</p>;

  const selectedService = allServices.find(service => service._id === selectedServiceId);
  
  return (
    <div className="px-4 overflow-hidden">

      <div className="flex justify-between">
        <h1 className="py-4 text-[20px] font-bold">All Services</h1>
        <div className="flex gap-4 text-white py-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#8EDF4C] px-6 rounded-xl text-sm text-white"
          >
            Add Service
          </button>
          <button
            onClick={() => setShowProductModal(true)}
            className="bg-[#8EDF4C] px-6 rounded-xl text-sm text-white"
          >
            Add Product
          </button>
        </div>
      </div>

      <div className="custom-scrollbar grid [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))] gap-6 p-2 max-w-full overflow-y-scroll max-h-[50vh]  ">

        {allServices.map((res, index) => (
          <div key={res._id} className="w-[200px] h-[230px] relative">
            <img
              src={res.image}
              alt={`Service ${index}`}
              className={`w-full h-[200px] object-cover rounded-2xl cursor-pointer border-2 transition-[1s] ease-in ${selectedServiceId === res._id
                  ? "shadow-xl scale-[1.1] transition-transform duration-300"
                  : "border-transparent hover:border-blue-500   "
                }`}
              onClick={() => setSelectedServiceId(res._id)}
            />


            <MdDelete
              className="absolute top-[160px] right-[12px] text-3xl text-red-500 cursor-pointer hover:text-red-700 bg-gray-300 rounded-md"
              onClick={() => handleDelete(res._id)}
            />

            <p className="p-2 font-bold text-sm text-center">{res.name}</p>
          </div>
        ))}
      </div>



      


{selectedServiceId && selectedService && (
  <div className="mt-10 p-2 ">
    
    <p className="font-bold text-xl mb-4">Product : {selectedService.name}</p>
    <ServicesData serviceId={selectedServiceId} />
  </div>
)}


      {showModal && (
        <>
          <div className="modal modal-open">
            <div className="modal-box rounded-xl">
              <h3 className="font-bold text-lg mb-4">Add New Service</h3>

              <label>Service Name</label>
              <input
                type="text"
                placeholder="Enter Service Name"
                className="input input-bordered w-full mb-4"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
              />

              <label>Upload Image</label>
              <div className="border border-dashed border-gray-400 rounded-xl h-32 flex items-center justify-center mb-4 relative">
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="h-full w-full object-cover rounded-xl"
                  />
                ) : (
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer text-gray-400 flex flex-col items-center justify-center"
                  >
                    <FaCamera size={28} />
                    <span className="mt-2 text-sm">Upload Photo</span>
                  </label>
                )}
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setPreviewImage(reader.result);
                      };
                      reader.readAsDataURL(file);
                      setImageFile(file);
                    }
                  }}
                />
              </div>

              <div className="modal-action flex justify-end gap-2">
                <button
                  className="bg-[rgba(5,35,68,1)] px-6 py-2 rounded-xl text-sm text-white"
                  onClick={handleAddService}
                  disabled={isAdding}
                >
                  {isAdding ? "Adding..." : "Add"}
                </button>
                <button
                  className="bg-gray-300 px-6 py-2 rounded-xl text-sm text-black"
                  onClick={() => {
                    setShowModal(false);
                    setPreviewImage(null);
                    setServiceName("");
                    setImageFile(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => {
              setShowModal(false);
              setPreviewImage(null);
              setServiceName("");
              setImageFile(null);
            }}
          ></div>
        </>
      )}


      {showProductModal && (
        <>
          <div className="modal modal-open">
            <div className="modal-box rounded-xl max-w-md w-full">
              <h3 className="font-bold text-lg mb-4">Add New Product</h3>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Select Service</span>
                </label>
                <select
                  className="select select-bordered w-full"
                  value={selectedServiceIdForProduct}
                  onChange={(e) => setSelectedServiceIdForProduct(e.target.value)}
                >
                  <option value="">Select</option>
                  {allServices.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Upload Product Image</span>
                </label>
                <div className="border border-dashed border-gray-400 rounded-xl h-32 flex items-center justify-center mb-4 relative">
                  {productPreviewImage ? (
                    <img
                      src={productPreviewImage}
                      alt="Product Preview"
                      className="h-full w-full object-cover rounded-xl"
                    />
                  ) : (
                    <label
                      htmlFor="product-image-upload"
                      className="cursor-pointer text-gray-400 flex flex-col items-center justify-center"
                    >
                      <FaCamera size={28} />
                      <span className="mt-2 text-sm">Upload Photo</span>
                    </label>
                  )}
                  <input
                    id="product-image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setProductPreviewImage(reader.result);
                        };
                        reader.readAsDataURL(file);
                        setProductImageFile(file);
                      }
                    }}
                  />
                </div>
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Enter Price"
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                />
              </div>

              <div className="modal-action flex justify-end gap-2">
                <button
                  className="bg-[rgba(5,35,68,1)] px-6 py-2 rounded-xl text-sm text-white"
                  onClick={handleAddProduct}
                  disabled={isAddingProduct}
                >
                  {isAddingProduct ? "Adding..." : "Add"}
                </button>
                <button
                  className="bg-gray-300 px-6 py-2 rounded-xl text-sm text-black"
                  onClick={() => {
                    setShowProductModal(false);
                    setSelectedServiceIdForProduct("");
                    setProductName("");
                    setProductPrice("");
                    setProductImageFile(null);
                    setProductPreviewImage(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop"
            onClick={() => {
              setShowProductModal(false);
              setSelectedServiceIdForProduct("");
              setProductName("");
              setProductPrice("");
              setProductImageFile(null);
              setProductPreviewImage(null);
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default AddService;
