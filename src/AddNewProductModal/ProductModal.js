import React from 'react';

const ProductModal = ({isVisible, onClose}) => {
    if(!isVisible) return null;

    
    return (
        <div   className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' >
            <div className='w-[600px] relative'>
                <button className='absolute right-2 top-2'
                onClick={()=> onClose()}
                >X</button>
                <div className='bg-white p-2'>Modal</div>

            </div>
        </div>
    );
};

export default ProductModal;