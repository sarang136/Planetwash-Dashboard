import React from 'react';
import { FaCreditCard } from "react-icons/fa6";

const Revenue = () => {
    return (
        <div className='w-[100vw] md:w-full bg-gray-100 xl:p-3 sm:p-8 p-4'>
            {/* Top Card Section */}
            <div className='bg-white px-5 py-5 sm:px-4 sm:py-4 rounded-2xl flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
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
            <div className='bg-white  sm:px-5 rounded-2xl shadow-sm overflow-scroll max-h-[60vh] md:h-[45vh]'>
                <div className='min-w-[600px] sm:min-w-full p-4 md:p-0'>
                    <table className='w-full text-left border-collapse '>
                       <thead className=" top-0 bg-white z-10 text-sm [&>tr>th]:py-3 sm:[&>tr>th]:py-4 xl:text-lg font-medium text-gray-600 border-b-black">
                            <tr >
                                <th className='p-4 whitespace-nowrap md:p-0'>Customer Name</th>
                                <th className='p-4 whitespace-nowrap md:p-0'>Contact No</th>
                                <th className='p-4 whitespace-nowrap md:p-0'>Email</th>
                                <th className='p-4 whitespace-nowrap md:p-0'>Service Type</th>
                                <th className='p-4 whitespace-nowrap md:p-0'>Amount</th>
                                <th className='p-4 whitespace-nowrap md:p-0'>Payment Method</th>
                            </tr>
                        </thead>

                        <tbody className='text-base sm:text-sm text-gray-400 [&>tr>td]:py-3 sm:[&>tr>td]:py-6'>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                            <tr className='p-4 whitespace-nowrap md:p-0'>
                                <td className='p-4 whitespace-nowrap md:p-0'>John Doe</td>
                                <td  className='p-4 whitespace-nowrap md:p-0'>8978765654</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>john@gmail.com</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>washing & ironing</td>
                                <td className=' p-4 whitespace-nowrap md:p-0 text-green-500'>+2000</td>
                                <td className='p-4 whitespace-nowrap md:p-0'>Cash on Delivery</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
};

export default Revenue;
