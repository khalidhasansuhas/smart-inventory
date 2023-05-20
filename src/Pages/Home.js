import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import {RiDeleteBinLine} from 'react-icons/ri';
import ProductModal from '../AddNewProductModal/ProductModal';

const Home = () => {

    const [showModal, setShowModal] = useState(false)

    const data = [
        {
            id: 1,
            assetNo: "A123",
            category: "Laptop",
            image: "laptop.jpg",
            productName: "Laptop 1",
            serialNo: "S123",
            price: "$1000",
            warranty: "1 year",
            purchaseDate: "2023-05-01",
        },
        {
            id: 2,
            assetNo: "A456",
            category: "Desktop",
            image: "desktop.jpg",
            productName: "Desktop 1",
            serialNo: "S456",
            price: "$1500",
            warranty: "2 years",
            purchaseDate: "2023-04-15",
        },
        {
            id: 3,
            assetNo: "A789",
            category: "Mouse",
            image: "mouse.jpg",
            productName: "Mouse 1",
            serialNo: "S789",
            price: "$20",
            warranty: "6 months",
            purchaseDate: "2023-05-10",
        },
    ];
    return (
        <>
        <div className='h-screen mt-16  '>
            <div className='sm:flex sm:justify-between'>
                {/* <button className="bg-sky-900 text-white py-2 px-4 ml-4 mt-4">
                    Add Inventory
                </button> */}
                <label onClick={()=>setShowModal(true)
                
                } className=' hover:cursor-pointer bg-sky-900 text-white py-2 px-4 ml-4 mt-4'> Add Inventory</label>
                <div className="sm:relative flex items-center mr-4 mt-3 ml-4">
                    <input
                        type="text"
                        className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search here"
                    />
                    <svg
                        className="sm:absolute sm:right-3 text-gray-500 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M13.414 12.828a6 6 0 111.414-1.414l3.536 3.536-1.414 1.414-3.536-3.536zM10 16a6 6 0 100-12 6 6 0 000 12z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </div>
            <div className='w-{98} mx-4 space-y-4'>
                <table className="w-full  mt-5">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="py-2 font-semibold px-4">SL</th>
                            <th className="py-2 font-semibold px-4">Asset No.</th>
                            <th className="py-2 font-semibold px-4">Category</th>
                            <th className="py-2 font-semibold px-4">Image</th>
                            <th className="py-2 font-semibold px-4">Product Name</th>
                            <th className="py-2 font-semibold px-4">Serial No.</th>
                            <th className="py-2 font-semibold px-4">Price</th>
                            <th className="py-2 font-semibold px-4">Warranty</th>
                            <th className="py-2 font-semibold px-4">Purchase Date</th>
                            <th className="py-2 font-semibold px-4">Action</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {data.map((row) => (
                            <tr key={row.id} className="bg-gray-100  ">
                                <td className="py-2 text-center px-4 ">{row.id}</td>
                                <td className="py-2 text-center px-4">{row.assetNo}</td>
                                <td className="py-2 text-center px-4">{row.category}</td>
                                <td className="py-2 text-center px-4">
                                    <img
                                        src={row.image}
                                        alt={row.productName}
                                        className="h-8 w-8 mx-auto rounded-full"
                                    />
                                </td>
                                <td className="py-2 text-center px-4">{row.productName}</td>
                                <td className="py-2 text-center px-4">{row.serialNo}</td>
                                <td className="py-2 text-center px-4">{row.price}</td>
                                <td className="py-2 text-center px-4">{row.warranty}</td>
                                <td className="py-2 text-center px-4">{row.purchaseDate}</td>
                                <td className="py-2 text-center px-4 flex justify-center">
                                    <FiEdit className='mr-2 text-sky-700'></FiEdit>
                                    <RiDeleteBinLine className='text-red-500'></RiDeleteBinLine>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </div>
        <ProductModal isVisible={showModal} onClose={()=>setShowModal(false)} ></ProductModal>
        </>
    );
};

export default Home;