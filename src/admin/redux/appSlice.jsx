import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}`,
  }),
  tagTypes: ['Orders', 'Services', 'Products'], 
  endpoints: (builder) => ({



    getUserOrders: builder.query({
      query: () => `/user/order/all`,
      providesTags: ['Orders'],
    }),

    getUserOrdersByStatus: builder.query({
      query: (status) => `/user/order/status/${status}`,
      providesTags: ['Orders'],
    }),

    getAllServices: builder.query({
      query: () => `/shop/service/getservice`,
      providesTags: ['Services'],
    }),

    getProductByService: builder.query({
      query: (id) => `/shop/product/service/${id}`,
      providesTags: ['Products'],
    }),



    deleteServicesById: builder.mutation({
      query: (id) => ({
        url: `/shop/service/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Services'], 
    }),

    deleteProductById: builder.mutation({
      query: (id) => ({
        url: `/shop/product/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],  
    }),

    

    addService: builder.mutation({
      query: (formData) => ({
        url: '/shop/service/addservice',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Services'],  
    }),

    addProduct: builder.mutation({
      query: (product) => ({
        url: '/shop/product/addproduct',
        method: 'POST',
        body: product,
      }),
      invalidatesTags: ['Products'],
    }),

    updateProductById: builder.mutation({
      query: ({ productId, body }) => {
        const formData = new FormData();
        formData.append("name", body.name);
        formData.append("price", body.price);
        if (body.image) {
          formData.append("image", body.image); 
        }

        return {
          url: `/shop/product/${productId}`,
          method: "PUT",
          body: formData,
        };
      },
      invalidatesTags: ['Products'],  
    }),

  }),
});

export const {
  useGetUserOrdersQuery,
  useGetUserOrdersByStatusQuery,
  useGetAllServicesQuery,
  useGetProductByServiceQuery,
  useDeleteServicesByIdMutation,
  useDeleteProductByIdMutation,
  useAddServiceMutation,
  useAddProductMutation,
  useUpdateProductByIdMutation,
} = apiSlice;
