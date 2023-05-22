import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center text-gray-500 py-4 ">
            <div className="container left-6 flex justify-between bottom-2 fixed">
                <p className='text-sm'>&copy; Copyright 2022 | <a className='hover:cursor-pointer' href="http://www.neural-semiconductor.com/"><span className='text-sky-600'>NSL</span></a></p>
                <p className='text-sm'>Terms & Condition | Help Center</p>
            </div>
        </footer>
    );
};

export default Footer;