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
        <div className='w-full min-h-[700px] bg-gray-100 p-4 sm:p-6 overflow-hidden relative font-dm'>
            <div className={`bg-white h-screen rounded-2xl p-6 sm:p-9 relative flex flex-col-1 transition duration-300 ease-in-out ${showForm ? 'blur-sm' : ''} md:h-[720px] `}>

                {/* Image Grid */}
                <div className='flex flex-col px-20 gap-y-8 sm:gap-x-10 sm:justify-start xl:flex xl:flex-row'>
                    {images.map((img, index) => (
                        <div key={index} className='relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px]'>
                            <img
                                src={img}
                                alt={`uploaded-${index}`}
                                className='rounded-lg w-full h-full object-cover'
                            />
                            <button
                                className='h-[38px] w-[40px] p-2 absolute bottom-1 right-1 bg-white rounded-md text-red-500 transition hover:bg-gray-100'
                            >
                                <BiSolidTrash size={20} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Add Product Button */}
                <div className='absolute bottom-6 sm:bottom-9 ml-20 sm:right-9'>
                    <button
                        className='bg-[#052344] text-white text-base sm:text-xl px-6 sm:px-10 py-2 sm:py-3 rounded-xl hover:bg-[#03172b] transition'
                        onClick={() => setShowForm(true)}
                    >
                        Add Photos
                    </button>
                </div>
            </div>

            {/* Modal Form */}
            {showForm && (
                <AddPhotosFrom closeForm={() => setShowForm(false)} />
            )}
        </div>
    );
};

export default AddPhotos;
