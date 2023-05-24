import React from 'react';
import logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            className="absolute inset-x-0 top-0 h-16 flex items-center"
            style={{
                background: 'linear-gradient(90deg, #2B5876 0.92%, #464776 95.37%)',
                maxWidth: '1440px'
            }}
        >
            <Link to='/'>
                <div className="text-white text-xl font-bold ml-6 items-center w-full">
                    <div className='flex justify-center relative mb-3 w-36'>
                        <img
                            src={logo}
                            alt="Logo"
                            style={{ width: '19.34px', height: '18.87' }}
                            className=''
                        />
                    </div>
                    <span className='font-thin text-xs absolute bottom-3 pl-1 '>NEURAL SEMICONDUCTOR</span>
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;