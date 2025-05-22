import React from 'react';
import { FaCreditCard } from "react-icons/fa6";

const Revenue = () => {
    return (
        <div className='w-full bg-gray-100 xl:p-3 sm:p-8 '>
            {/* Top Card Section */}
            <div className='bg-white px-5 py-5 sm:px-7 sm:py-6 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
                <div className='bg-[#6AD2FF45] h-[100px] w-[120px] sm:h-[130px] sm:w-[140px] rounded-2xl py-6 px-8 sm:py-8 sm:px-10 flex justify-center items-center'>
                    <FaCreditCard className='text-5xl sm:text-6xl text-[#019ECE]' />
                </div>
                <div className='space-y-1 sm:space-y-2 text-center sm:text-left'>
                    <h2 className='text-xl sm:text-2xl font-bold'>Total Revenue</h2>
                    <p className='text-xl sm:text-2xl text-blue-600'>Rs. 2000</p>
                </div>
            </div>

            <h3 className='text-xl sm:text-2xl font-semibold py-5 sm:py-7 text-center sm:text-left'>All Transactions</h3>

            {/* Responsive Table Wrapper */}
            <div className='bg-white p-5 sm:p-10 rounded-2xl shadow-sm overflow-x-auto xl:h-[450px]'>
                <div className='min-w-[600px] sm:min-w-full'>
                    <table className='w-full text-left'>
                        <thead className='text-sm [&>tr>th]:py-3 sm:[&>tr>th]:py-4 xl:text-lg font-medium text-gray-600 border-b'>
                            <tr>
                                <th>Customer Name</th>
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Service Type</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                            </tr>
                        </thead>

                        <tbody className='text-base sm:text-lg text-gray-400 [&>tr>td]:py-3 sm:[&>tr>td]:py-6'>
                            <tr className='border-t'>
                                <td>John Doe</td>
                                <td>8978765654</td>
                                <td>john@gmail.com</td>
                                <td>washing & ironing</td>
                                <td className='text-green-500'>+2000</td>
                                <td>Cash on Delivery</td>
                            </tr>
                            <tr className='border-t'>
                                <td>John Doe</td>
                                <td>8978765654</td>
                                <td>john@gmail.com</td>
                                <td>washing & ironing</td>
                                <td className='text-green-500'>+2000</td>
                                <td>Cash on Delivery</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Revenue;
