import React, { useState } from 'react';
import {
  useGetProductByServiceQuery,
  useDeleteProductByIdMutation,
  useUpdateProductByIdMutation,
} from '../redux/appSlice';
import { MdDelete, MdEdit } from 'react-icons/md';

const ServicesData = ({ serviceId }) => {
  const { data: serviceData, isLoading, error } = useGetProductByServiceQuery(serviceId, {
    skip: !serviceId,
  });

  const [deleteProductById] = useDeleteProductByIdMutation();
  const [updateProductById] = useUpdateProductByIdMutation();

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', image: '' });

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    try {
      await deleteProductById(id).unwrap();
      alert("Product deleted successfully.");
    } catch (err) {
      console.error("Failed to delete product:", err);
      alert("Failed to delete the product.");
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setEditModalOpen(true);
  };

  const handleUpdate = async () => {
    try {
      await updateProductById({
        productId: editingProduct._id,
        body: formData,
      }).unwrap();
      alert("Product updated successfully.");
      setEditModalOpen(false);
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update product.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!serviceId) return <div>No service selected</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data.</div>;

  return (
    <>
      <div className="overflow-x-auto ">
        <table className="min-w-full max-h-[30vh]  divide-y divide-gray-200 rounded-xl overflow-hidden ">
          <thead className="bg-[rgba(235,235,235,1)]">
            <tr>
              <th className="p-4 md:px-10 md:py-6 text-left text-xs md:text-sm font-bold text-gray-900 ">Product Name</th>
              <th className="md:px-10 md:py-6 text-left text-xs md:text-sm font-bold text-gray-900 ">Price</th>
              <th className="md:px-10 md:py-6 text-left text-xs md:text-sm font-bold text-gray-900 ">Action</th>
              {/* <th className="px-6 py-6 text-left text-sm font-medium text-gray-900">Image</th> */}
            </tr>
          </thead>
          <tbody className="bg-white  divide-gray-200 cursor-pointer">
            {Array.isArray(serviceData?.products) && serviceData.products.length > 0 ? (
              serviceData.products.map((res) => (
                <tr key={res._id}>
                  <td className=" p-4 md:px-10 md:py-3 whitespace-nowrap font-medium  text-[rgba(145,145,145,1)] ">{res.name}</td>
                  <td className="md:px-10 md:py-3 whitespace-nowrap font-medium  text-[rgba(145,145,145,1)]">Rs.{res.price}</td>
                  <td className="md:px-10 md:py-3 whitespace-nowrap  text-[rgba(145,145,145,1)] ">
                    <button
                      className="text-blue-500 hover:text-blue-700 mr-2"
                      onClick={() => handleEditClick(res)}
                    >
                      <MdEdit />
                    </button>
                    <button
                      className="text-red-500 text-xl hover:text-red-700"
                      onClick={() => handleDelete(res._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                  {/* <td className="p-4">
                    <img className="h-[50px] w-[50px]" src={res.image} alt={res.name} />
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md w-96 shadow-lg space-y-4">
            <h2 className="text-lg font-semibold">Edit Product</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full border p-2 rounded"
            />
            <input
              type=""
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full border p-2 rounded"
            />
            <div className="flex justify-end gap-4 pt-2">
              <button
                onClick={() => setEditModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesData;
