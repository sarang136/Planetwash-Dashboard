import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUpPage2 from '../pages/SignUpPage2';
import SignUpPage3 from '../pages/SignUpPage3';
import EmailVerificationPage from '../pages/EmailVerificationPage';
import AdminLayout from '../AdminLayout';
import Dashboard from '../pages/Dashboard'
import ManageUsers from '../pages/ManageUsers';
import Products from '../pages/Products'
import ProductDetails from '../pages/ProductDetails'
import AddProduct from '../pages/AddProduct'
import AddService from '../pages/AddService'

import Revenue from '../pages/Revenue';
import AddPhotos from '../pages/AddPhotos';
import AddPhotosFrom from '../pages/AddPhotosFrom';
import DeliveryBoys from '../pages/DeliveryBoys';
import UserData from '../pages/orderPages/UserData';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup/step-2" element={<SignUpPage2 />} />
            <Route path="/signup/step-3" element={<SignUpPage3 />} />
            <Route path="/signup/verify" element={<EmailVerificationPage />} />

            <Route path="home" element={<AdminLayout />}>
                <Route index path="dashboard" element={<Dashboard />} />
                <Route path="manageUsers" element={<ManageUsers />} />
                <Route path="products" element={<Products />} />
                <Route path="product-details/:id" element={<ProductDetails />} />
                <Route path="add-product" element={<AddProduct />} />
                {/* <Route path="users-data" element={<UserData />} /> */}
                <Route path="userData/:id" element={<UserData />} />
                <Route path="addservice" element={<AddService />} />
                <Route path="revenue" element={<Revenue />} />
                <Route path="addphotos" element={<AddPhotos />} />
                <Route path="addphotos/new" element={<AddPhotosFrom />} />
                <Route path="delivery-boys" element={<DeliveryBoys/>}/>
                {/* <Route path="services/:serviceId" element={<ServicesData />} /> */}
            </Route>
        </Routes>
    )
}

export default AppRoutes;
