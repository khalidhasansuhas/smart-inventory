import React,{ useEffect, useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import { MdAddCircle } from 'react-icons/md';
import axios from 'axios';

const EditModal = ({ isVisible, onClose }) => {
    
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [hasWarranty, setHasWarranty] = useState(false);

    useEffect(() => {
        fetch('http://182.163.101.173:49029/product-crud/products/category-name-wise-product-names')
            .then(response => response.json())
            .then(data => {
                setCategories(data);

            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // category wise product selecting
    const selectedCategoryData = categories.find((category) => category.name === selectedCategory)
    const products = selectedCategoryData ? selectedCategoryData.products : [];

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const purchaseDate = `${purchaseYear}-${purchaseMonth}-${purchaseDay}`;
        const warrantyDate = `${warrantyYear}-${warrantyMonth}-${warrantyDay}`;


        // Create a FormData object
        const formData = new FormData();
        formData.append('productPhoto', event.target.productPhoto.files[0]);

        // Set the API key in the headers
        const headers = {
            apiKey: 'pdovN/FKkK3koZN3fCSpTXe6IKM2ufFpqZ8aHEspwuI='
        };

        // Perform the PUT request
        axios.put('http://182.163.101.173:49029/product-crud/products/13/upload-product-photo', formData, { headers })
            .then(response => {
                // Handle successful response
                console.log(response);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setSelectedProduct('');
    };

    const handleProductChange = (event) => {
        setSelectedProduct(event.target.value);
    };

    const currentYear = new Date().getFullYear();

    // Purchase Date
    const [purchaseDay, setPurchaseDay] = useState('');
    const [purchaseMonth, setPurchaseMonth] = useState('');
    const [purchaseYear, setPurchaseYear] = useState('');

    // Warranty Expiry Date
    const [warrantyDay, setWarrantyDay] = useState('');
    const [warrantyMonth, setWarrantyMonth] = useState('');
    const [warrantyYear, setWarrantyYear] = useState('');

    const handlePurchaseDayChange = (event) => {
        setPurchaseDay(event.target.value);
    };

    const handlePurchaseMonthChange = (event) => {
        setPurchaseMonth(event.target.value);
    };

    const handlePurchaseYearChange = (event) => {
        setPurchaseYear(event.target.value);
    };

    const handleWarrantyDayChange = (event) => {
        setWarrantyDay(event.target.value);
    };

    const handleWarrantyMonthChange = (event) => {
        setWarrantyMonth(event.target.value);
    };

    const handleWarrantyYearChange = (event) => {
        setWarrantyYear(event.target.value);
    };

    if (!isVisible) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' >
        <div className='sm:w-[582px] relative'>
            <button className='absolute right-4 top-2'
                onClick={() => onClose()}
            >X</button>
            <div className='bg-gray-50 text-center font-semibold p-2 pb-4'>Edit This Product</div>
            <form onSubmit={handleSubmit} className='w-full bg-gray-50'>
                {/* category */}
                <div className='flex pb-4'>
                    <div className='w-1/3'>
                        <p className='text-right  text-sm'>Category <span className='text-red-700'>*</span></p>
                    </div>
                    <div className='w-2/3'>
                        <select required value={selectedCategory} onChange={handleCategoryChange} className="border relative border-gray-300 text-sm sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none">
                            <option value=" ">Select a Category</option>
                            {
                                categories.map((category) => (
                                    <option key={category.name} value={category.name}>
                                        {category.name}
                                    </option>
                                ))
                            }


                        </select>
                        <div className="pointer-events-none absolute sm:right-8 sm:top-[54px] flex items-center px-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>

                    </div>

                </div>
                {/* Product Name */}
                <div className='sm:flex pb-4'>
                    <div className='sm:w-1/3'>
                        <p className='text-right  text-sm'>Product Name <span className='text-red-700'>*</span></p>
                    </div>
                    <div className='sm:w-2/3'>
                        <select required value={selectedProduct} onChange={handleProductChange} className="border relative  text-sm  border-gray-300 sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none">
                            <option value="">Select a Product</option>
                            {products.map((product) => (
                                <option key={product.name} value={product.name}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute sm:right-8 sm:top-[90px] flex items-center px-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>

                    </div>

                </div>
                {/* Serial Number */}
                <div className='sm:flex pb-4'>
                    <div className='w-1/3'>
                        <p className='text-right text-sm'>Serial Number</p>
                    </div>
                    <div className='w-2/3'>
                        <input type="text" name="serial" id="" className='border relative  border-gray-300 sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none' />

                    </div>
                </div>
                {/* purchase price */}
                <div className='sm:flex pb-4'>
                    <div className='w-1/3'>
                        <p className='text-right text-sm'>Purchase Price <span className='text-red-700'>*</span></p>
                    </div>
                    <div className='w-2/3'>

                        <input type="text" name="price" id="" className='border relative  border-gray-300 sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none' />
                    </div>
                </div>
                {/* select date */}
                <div className='sm:flex pb-4'>
                    <div className='w-1/3'>
                        <p className='text-right text-sm'>Purchase Date <span className='text-red-700'>*</span></p>
                    </div>
                    <div className='w-2/3'>
                        <div className='grid grid-cols-3 mr-7'>
                            <div className='border relative bg-white  border-gray-300  pl-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                <select id="day" className='text-sm' value={purchaseDay} onChange={handlePurchaseDayChange}>
                                    <option className='text-sm' value="">Day</option>
                                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='border relative bg-white  border-gray-300   ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                <select id="month" className='text-sm' value={purchaseMonth} onChange={handlePurchaseMonthChange}>
                                    <option className='text-sm' value="">Month</option>
                                    {[
                                        { value: '01', label: 'Jan' },
                                        { value: '02', label: 'Feb' },
                                        { value: '03', label: 'Mar' },
                                        { value: '04', label: 'Apr' },
                                        { value: '05', label: 'May' },
                                        { value: '06', label: 'Jun' },
                                        { value: '07', label: 'Jul' },
                                        { value: '08', label: 'Aug' },
                                        { value: '09', label: 'Sept' },
                                        { value: '10', label: 'Oct' },
                                        { value: '11', label: 'Nov' },
                                        { value: '12', label: 'Dec' },
                                        // Add other months as needed
                                    ].map((month) => (
                                        <option key={month.value} value={month.value}>
                                            {month.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='border relative bg-white  border-gray-300  ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                <select id="year" className='text-sm' value={purchaseYear} onChange={handlePurchaseYearChange}>
                                    <option className='text-sm' value="">Year</option>
                                    {Array.from({ length: 20 }, (_, i) => currentYear - i).map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>


                        </div>

                    </div>
                </div>
                {/* Has Warranty */}
                <div className='sm:flex pb-4'>
                    <div className='w-1/3'>

                    </div>
                    <div className='w-2/3 flex'>
                        <input
                            checked={hasWarranty}
                            onChange={(e) => setHasWarranty(e.target.checked)}
                            type="checkbox" name="hasWarranty" id="" className='ml-3' />
                        <p className='text-left text-sm pl-3'>Has Warranty</p>
                    </div>
                </div>
                {/* Warranty */}
                {
                    hasWarranty ? (
                        <>
                            <div className='sm:flex pb-4'>
                                <div className='sm:w-1/3'>
                                    <p className='text-right  text-sm'>Warranty <span className='text-red-700'>*</span></p>
                                </div>
                                <div className='sm:w-2/3'>
                                    <select required className="border text-sm relative  border-gray-300 sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none">
                                        <option value="">Select Warranty</option>
                                        <option value="option1"> 1</option>
                                        <option value="option2"> 2</option>
                                        <option value="option3"> 3</option>
                                    </select>
                                    <div className="pointer-events-none absolute sm:right-8 sm:top-[90px] flex items-center px-2 text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>

                                </div>

                            </div>
                            {/* Warranty Expiry Date */}
                            <div className='sm:flex pb-4'>
                                <div className='w-1/3'>
                                    <p className='text-right text-sm'>Warranty Expiry Date <span className='text-red-700'>*</span></p>
                                </div>
                                <div className='w-2/3'>
                                    <div className='grid grid-cols-3 mr-7'>
                                        <div className='border relative bg-white  border-gray-300  pl-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                            <select id="day" className='text-sm' value={warrantyDay} onChange={handleWarrantyDayChange}>
                                                <option className='text-sm' value="">Day</option>
                                                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                                                    <option key={day} value={day}>
                                                        {day}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='border relative bg-white  border-gray-300   ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                            <select id="month" className='text-sm' value={warrantyMonth} onChange={handleWarrantyMonthChange}>
                                                <option className='text-sm' value="">Month</option>
                                                {[
                                                    { value: '01', label: 'Jan' },
                                                    { value: '02', label: 'Feb' },
                                                    { value: '03', label: 'Mar' },
                                                    { value: '04', label: 'Apr' },
                                                    { value: '05', label: 'May' },
                                                    { value: '06', label: 'Jun' },
                                                    { value: '07', label: 'Jul' },
                                                    { value: '08', label: 'Aug' },
                                                    { value: '09', label: 'Sept' },
                                                    { value: '10', label: 'Oct' },
                                                    { value: '11', label: 'Nov' },
                                                    { value: '12', label: 'Dec' },
                                                    // Add other months as needed
                                                ].map((month) => (
                                                    <option key={month.value} value={month.value}>
                                                        {month.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className='border relative bg-white  border-gray-300  ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                            <select id="year" className='text-sm' value={warrantyYear} onChange={handleWarrantyYearChange}>
                                                <option className='text-sm' value="">Year</option>
                                                {Array.from({ length: 20 }, (_, i) => currentYear + i).map((year) => (
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </>
                    ) : null
                }

                {/* add image */}
                <div className='sm:flex pb-4'>
                    <div className='w-1/3'>

                    </div>
                    <div className='w-2/3 flex justify-between '>
                        <div>
                            <div className='w-[149px] flex  text-sm items-center mt-6 border relative h-[40px]  border-gray-300  px-4 ml-3 focus:outline-none  appearance-none'>
                                <FiCamera></FiCamera>
                                <input id="file-input" type="file" name="productPhoto" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} />
                                <label htmlFor="file-input" className="relative cursor-pointer">
                                    <span className=" px-2 py-2 ">
                                        Add Image <span className='text-red-700'>*</span>
                                    </span>
                                </label>
                            </div>
                            {/* <div className='flex'>
                            <p id="file-name" className='ml-3 text-sm text-blue-700 font-semibold'>desktop.jpg</p>
                            <button id="clear-file" className="text-red-500 pl-1 text-sm">x</button>
                            </div> */}
                        </div>

                        {selectedImage && <img src={selectedImage} alt="SelectedImage" className='w-[134px] h-[134px] bg-white mr-7' />}

                    </div>
                </div>
                {/* add more product */}
                <div className='sm:flex pb-4 mt-[24px]'>
                    <div className='w-1/3'>

                    </div>
                    <div className='w-2/3 flex justify-end mr-7 items-center'>
                        <MdAddCircle className='text-blue-700'></MdAddCircle>
                        <p className='text-left hover:cursor-pointer text-blue-700 font-semibold text-sm pl-1'>Add more Product</p>
                    </div>
                </div>
                {/* buttons */}
                <div className='sm:flex pb-6 '>
                    <div className='w-1/3'>

                    </div>
                    <div className='w-2/3 flex justify-end mr-7 items-center'>
                        <button
                            onClick={() => onClose()}
                            className="bg-white border border-red-500 text-sm font-semibold text-red-500 py-1 px-4  hover:bg-red-500 hover:text-white hover:border-red-700">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white text-sm font-semibold py-1 px-4 ml-2 hover:bg-blue-700">
                            Add
                        </button>
                        {/* <p className='text-left hover:cursor-pointer text-blue-700 font-semibold text-sm pl-1'>Add more Product</p> */}
                    </div>
                </div>

            </form>

        </div>
    </div>
    );
};

export default EditModal;