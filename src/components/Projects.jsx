import React from 'react'

const Projects = () => {
    return (
        <div className='p-7 mx-7 shadow-md h-[300px] overflow-y-scroll'>
            <div className='flex justify-between items-center '>
                <div>
                    <h1 className='text-2xl font-bold'>Projects</h1>
                </div>

                <div className='flex items-center'>
                    <div className='flex items-center border-green-700/20 border-2 text-gray-300 bg-gray-50 px-6 py-2 rounded-md'>
                        <div className='mr-4'><i className="fa-solid fa-magnifying-glass"></i></div>
                        <input className='bg-transparent focus:border-0 p-2' type="text" placeholder='Search' />
                        <div className='ml-4'><i className="fa-solid fa-filter"></i></div>

                    </div>
                    <button className='ml-6 bg-[#60a065] text-white px-4 py-2 rounded-md'><i className="fa-solid fa-plus"></i></button>

                </div>
            </div>

            <div className='w-100 my-6'>
                <table width="100%" className='text-center border-separate border-spacing-y-3.5'>
                    <thead className='text-[#707eae]'>
                        <tr>
                            <th>Project Name</th>
                            <th>Brand Name</th>
                            <th>Client Name</th>
                            <th>Assign To</th>
                            <th> Progress %</th>
                            <th>Start Date</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>

                        </tr>

                        <tr>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>

                        </tr><tr>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>

                        </tr><tr>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>

                        </tr><tr>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>

                        </tr><tr>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>

                        </tr><tr>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>
                            <td>Lorem Ipsum</td>

                        </tr>
                    </tbody>
                </table>

            </div>
        </div >
    )
}

export default Projects
