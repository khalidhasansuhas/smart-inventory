import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-gray-500 py-4">
            <div className="container mx-auto flex justify-between">
                <p className='text-sm'>&copy; Copyright 2022 | <span className='text-sky-600'>NSL</span></p>
                <p className='text-sm'>Terms & Condition | Help Center</p>
            </div>
        </footer>
    );
};

export default Footer;