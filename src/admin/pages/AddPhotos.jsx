import React, { useState } from 'react';
import { BiSolidTrash } from "react-icons/bi";
import Img1 from '../../../public/Rectangle 64.png';
import Img2 from '../../../public/Rectangle 65.png';
import Img3 from '../../../public/Rectangle 66.png';
import Img4 from '../../../public/Rectangle 67.png';
import Img5 from '../../../public/Rectangle 68.png';
import AddPhotosFrom from './AddPhotosFrom';
import { useNavigate } from 'react-router-dom';

const AddPhotos = () => {
    const images = [Img1, Img2, Img3, Img4, Img5];
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate();

    return (
        <div className=' sm:p-4 overflow-hidden bg-white rounded-2xl'>
            <div className={`  p-2 sm:p-6 relative flex flex-col-1 transition duration-300 ease-in-out flex justify-center ${showForm ? 'blur-sm' : ''}  `}>

                {/* Image Grid */}

                <div className='flex flex-col  sm:gap-x-10 sm:justify-start xl:flex xl:flex-row xl:justify-around'>
                    {images.map((img, index) => (
                        <div key={index} className=''>
                            <img
                                src={img}
                                alt={`uploaded-${index}`}
                                className='rounded-lg w-full h-full '
                            />
                            {/* <button
                                className='h-[38px] w-[40px] p-2 relative bottom-10 left-10 bg-white rounded-md text-red-500 transition hover:bg-gray-100'
                            >
                                <BiSolidTrash size={20} />
                            </button> */}
                        </div>
                    ))}
                </div>

                {/* Add Product Button */}



            </div>


            {/* Modal Form */}
            {showForm && (
                <AddPhotosFrom closeForm={() => setShowForm(false)} />
            )}
           <div className='flex justify-end mt-[] p-6'>
             <button
                className='bg-[#052344] text-white text-base sm:text-xl px-6 sm:px-10 py-2 sm:py-3 rounded-xl hover:bg-[#03172b] transition'
                onClick={() => setShowForm(true)}
            >
                Add Photos
            </button>
           </div>
        </div>
    );
};

export default AddPhotos;
