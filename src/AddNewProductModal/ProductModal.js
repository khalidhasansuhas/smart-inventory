import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import { MdAddCircle } from 'react-icons/md'

const ProductModal = ({ isVisible, onClose }) => {
    // const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    const years = Array.from({ length: 20 }, (_, i) => new Date().getFullYear() - i);
    const yearsWarranty = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i);

    const handleDayChange = (e) => {
        setSelectedDay(e.target.value);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    // const handleDateCombine = () => {
    //     if (selectedDay && selectedMonth && selectedYear) {
    //         const combinedDate = new Date(
    //             `${selectedYear}-${selectedMonth}-${selectedDay}`
    //         );
    //         setSelectedDate(combinedDate);
    //         console.log(combinedDate);

    //     }
    // };

    if (!isVisible) return null;


    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' >
            <div className='sm:w-[582px] relative'>
                <button className='absolute right-4 top-2'
                    onClick={() => onClose()}
                >X</button>
                <div className='bg-gray-50 text-center font-semibold p-2 pb-4'>Add New Product</div>
                <form className='w-full bg-gray-50'>
                    {/* category */}
                    <div className='flex pb-4'>
                        <div className='w-1/3'>
                            <p className='text-right  text-sm'>Category <span className='text-red-700'>*</span></p>
                        </div>
                        <div className='w-2/3'>
                            <select className="border relative border-gray-300 text-sm sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
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
                            <select className="border relative  text-sm  border-gray-300 sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
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

                                    <select id="day" className='text-sm' value={selectedDay} onChange={handleDayChange}>
                                        <option className='text-sm' value="">Day</option>
                                        {days.map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='border relative bg-white  border-gray-300   ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                    <select id="month" className='text-sm' value={selectedMonth} onChange={handleMonthChange}>
                                        <option className='text-sm' value="">Month</option>
                                        {months.map((month, index) => (
                                            <option key={index} value={index + 1}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='border relative bg-white  border-gray-300  ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                    <select id="year" className='text-sm' value={selectedYear} onChange={handleYearChange}>
                                        <option className='text-sm' value="">Year</option>
                                        {years.map((year) => (
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
                            <input type="checkbox" name="hasWarranty" id="" className='ml-3' />
                            <p className='text-left text-sm pl-3'>Has Warranty</p>
                        </div>
                    </div>
                    {/* Warranty */}
                    <div className='sm:flex pb-4'>
                        <div className='sm:w-1/3'>
                            <p className='text-right  text-sm'>Warranty <span className='text-red-700'>*</span></p>
                        </div>
                        <div className='sm:w-2/3'>
                            <select className="border text-sm relative  border-gray-300 sm:w-[347px] px-4 ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none">
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

                                    <select id="day" className='text-sm' value={selectedDay} onChange={handleDayChange}>
                                        <option className='text-sm' value="">Day</option>
                                        {days.map((day) => (
                                            <option key={day} value={day}>
                                                {day}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='border relative bg-white  border-gray-300   ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                    <select id="month" className='text-sm' value={selectedMonth} onChange={handleMonthChange}>
                                        <option className='text-sm' value="">Month</option>
                                        {months.map((month, index) => (
                                            <option key={index} value={index + 1}>
                                                {month}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='border relative bg-white  border-gray-300  ml-3 focus:outline-none focus:ring focus:border-blue-500 appearance-none'>

                                    <select id="year" className='text-sm' value={selectedYear} onChange={handleYearChange}>
                                        <option className='text-sm' value="">Year</option>
                                        {yearsWarranty.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>


                            </div>

                        </div>
                    </div>
                    {/* add image */}
                    <div className='sm:flex pb-4'>
                        <div className='w-1/3'>

                        </div>
                        <div className='w-2/3 flex justify-between '>
                            <div className='w-[149px] flex  text-sm items-center mt-6 border relative h-[40px]  border-gray-300  px-4 ml-3 focus:outline-none  appearance-none'>
                                <FiCamera></FiCamera>
                                <input type="image" src="#" alt="" />
                                <label htmlFor="image" className='pl-3'>Add Image</label>
                            </div>
                            <img
                                className='w-[134px] h-[134px] bg-white mr-7'
                                src="#" alt="productImage" />
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
                            <button className="bg-white border border-red-500 text-sm font-semibold text-red-500 py-1 px-4  hover:bg-red-500 hover:text-white hover:border-red-700">
                                Cancel
                            </button>
                            <button className="bg-blue-500 text-white text-sm font-semibold py-1 px-4 ml-2 hover:bg-blue-700">
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

export default ProductModal;