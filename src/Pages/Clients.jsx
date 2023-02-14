import React from 'react'

const Clients = () => {
    return (
        <div>
            <h1 className='p-7 text-2xl font-bold'>Clients</h1>

            <div className='grid grid-cols-4 p-7 gap-8'>
                <div className='flex items-center bg-slate-50 shadow-xl p-10 rounded-2xl'>
                    <img className='w-4/12 rounded-2xl' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80' alt="client" />
                    <div className='ml-3 text-2xl'>
                        <h1>Brand Name</h1>
                        <h1>Project Name</h1>
                    </div>
                </div>

                <div className='flex items-center bg-slate-50 shadow-xl p-10 rounded-2xl'>
                    <img className='w-4/12 rounded-2xl' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80' alt="client" />
                    <div className='ml-3 text-2xl'>
                        <h1>Brand Name</h1>
                        <h1>Project Name</h1>
                    </div>
                </div>

                


            </div>
        </div>
    )
}

export default Clients
