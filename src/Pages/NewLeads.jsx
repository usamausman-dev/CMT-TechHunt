import React from 'react'

const NewLeads = () => {
    return (
        <div className='w-100 my-6'>
            <h1 className='p-7 text-2xl font-bold'>New Leads</h1>
            <table width="100%" className='text-center border-separate border-spacing-y-3.5' cellPadding="20px">
                <thead className='text-[#707eae]'>
                    <tr >
                        
                        <th>Brand Name</th>
                        <th>Client Name</th>
                        <th>Account Manager</th>
                        <th>Project</th>
                        <th>Date</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr className='shadow-lg rounded-md bg-gray-50'>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                    </tr>

                    <tr className='shadow-lg rounded-md bg-gray-50'>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                        <td>Lorem Ipsum</td>
                    </tr>

                  


                </tbody>
            </table>

        </div>
    )
}

export default NewLeads
