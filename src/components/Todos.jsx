import React from 'react'

const Todos = () => {
  return (
    <div className='w-96 overflow-y-auto pr-4'>
      <div className='flex items-center justify-between mb-6'>
        <div className='text-xl font-semibold'>Todos</div>
        <div>
          <i className="fa-solid fa-up-right-and-down-left-from-center mx-2"></i>
          <i className="fa-regular fa-square-plus mx-2"></i>
        </div>
      </div>

      <div className='bg-[#e9e9e9] p-4 rounded-br-2xl my-3'>
        <div className='flex items-center justify-between'>
          <h1 className='underline font-medium mr-6 text-md'>Meeting with Stakeholders</h1>
          <input type="checkbox" />
        </div>

        <div className='text-xs mt-4'>
          <div>
            <span className='font-medium'>Time :</span> <span>07 AM to 9 AM</span>
          </div>
          <div>
            <span className='font-medium'>Place :</span> <span>Albert's Cabin</span>
          </div>
          <div>
            <span className='font-medium'>Time :</span> <span>Nothing</span>
          </div>
        </div>

      </div>

      <div className='bg-[#e9e9e9] p-4 rounded-br-2xl my-3'>
        <div className='flex items-center justify-between'>
          <h1 className='underline font-medium mr-6 text-md'>Meeting with Stakeholders</h1>
          <input type="checkbox" />
        </div>

        <div className='text-xs mt-4'>
          <div>
            <span className='font-medium'>Time :</span> <span>07 AM to 9 AM</span>
          </div>
          <div>
            <span className='font-medium'>Place :</span> <span>Albert's Cabin</span>
          </div>
          <div>
            <span className='font-medium'>Time :</span> <span>Nothing</span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Todos
