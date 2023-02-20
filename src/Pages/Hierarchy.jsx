import React from 'react'

const Card = () => {
  return (
    <div class="relative m-6 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 before:absolute before:h-7 before:w-1 before:bg-gray-900 before:-top-7 before:right-52">

      <h5 class="font-semibold tracking-tight border-b-2 border-gray-500 text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
      <div className='text-white my-5'>
        <p><i class="fa-regular fa-user mr-2"></i> Project Manager</p>
        <p><i class="fa-regular fa-user mr-2"></i> Project Co Ordinator</p>
      </div>
    </div>
  );
};




const Hierarchy = () => {
  return (
    <>
      <div>

        <div className='flex justify-center'>
          <div class="block max-w-sm p-6 bg-white text-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="font-semibold  tracking-tight border-b-2 border-gray-500 text-gray-900 dark:text-white">Tech Hunt - Admin</h5>
            <div className='text-white my-5'>
              <p><i class="fa-regular fa-user mr-2"></i> Project Manager</p>
              <p><i class="fa-regular fa-user mr-2"></i> Project Co Ordinator</p>
            </div>
          </div>
        </div>

        <hr />

        <div className='flex justify-center'>
          <div>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <div>
            <Card />
            <Card /><Card />
          </div>

          <div>
            <Card />
            <Card /><Card />
          </div>






        </div>



      </div>
    </>
  )
}




export default Hierarchy
