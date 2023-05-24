import React, {  useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';
import ProductModal from '../AddNewProductModal/ProductModal';

import EditModal from '../AddNewProductModal/EditModal';
import Swal from 'sweetalert2'

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [products, setProducts] = useState([]);

    const apiKey = 'pdovN/FKkK3koZN3fCSpTXe6IKM2ufFpqZ8aHEspwuI=';


    const apiUrl = "http://182.163.101.173:49029/product-crud/products";

    fetch(apiUrl, {
        headers: {
            "apiKey": apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            // Process the retrieved data
            setProducts(data)
            console.log(data);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });


    //unfortunately couldn't receive data due to API error  







    //demo data is created and shown
    const data = [
        {
            id: 1,
            assetNo: "A123",
            category: "Laptop",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
            image: "https://images.unsplash.com/photo-1579765754037-5bfef757251a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
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
            image: "https://images.unsplash.com/photo-1599581142115-e8ca8db95d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2UlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            productName: "Mouse 1",
            serialNo: "S789",
            price: "$20",
            warranty: "1 year",
            purchaseDate: "2023-05-10",
        },
    ];

    const handleDelete = () => {
        Swal.fire({

            text: "Are you sure You want to delete this product?",
            icon: 'delete',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <>
            <div className='h-screen sm:mt-16 mt-20  '>
                <div className='sm:flex sm:justify-between'>
                    {/* <button className="bg-sky-900 text-white py-2 px-4 ml-4 mt-4">
                    Add Inventory
                </button> */}
                    <label onClick={() => setShowModal(true)

                    } className=' hover:cursor-pointer bg-sky-900 text-white py-2 px-4 ml-4 mt-4'> Add Inventory</label>
                    <div className="sm:relative flex items-center mr-4 mt-3 ml-4">
                        <input
                            type="text"
                            className="border border-gray-300 rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search here"
                        />
                        <svg
                            className="sm:absolute sm:right-3   text-gray-500 h-5 w-5"
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
                <div className=' mx-4 '>
                    <div className="overflow-x-auto">
                        <table className="w-full  table-auto mt-5" >
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
                                    <tr key={row.id} className={`bg-gray-100 `}>
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
                                            <FiEdit
                                                onClick={() => setEditModal(true)}
                                                className='mr-2 text-sky-700 hover:cursor-pointer'></FiEdit>
                                            <RiDeleteBinLine className='text-red-500 hover:cursor-pointer' onClick={handleDelete}>


                                            </RiDeleteBinLine>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <ProductModal isVisible={showModal} onClose={() => setShowModal(false)} ></ProductModal>
            <EditModal isVisible={editModal} onClose={() => setEditModal(false)}> </EditModal>
        </>
    );
};

export default Home;