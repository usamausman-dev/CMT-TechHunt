import React from 'react'
import { MonthlyGraph } from '../components'
import CardImg from '../assests/cards.png'

const Finance = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-8'>
        <div className='shadow-xl rounded-xl p-7 h-[500px]'>
          <h1 className='font-bold text-xl'>Sales <br /> Statistics</h1>
          <div className='my-4'>
            <h2>Sales</h2>
            <p className='text-lg font-semibold'>$20,000.00</p>
          </div>
          <MonthlyGraph />
        </div>

        <div className='col-span-2 p-7 shadow-xl rounded-xl h-[500px] overflow-y-auto'>
          <div className='flex justify-between items-center '>
            <div>
              <h1 className='text-xl font-bold'>List of Clients</h1>
            </div>

            <div className='flex items-center'>
              <input className='bg-gray-200 px-3 py-1 rounded-md' type="text" placeholder='Search' />
              <i class="fa-solid fa-magnifying-glass mx-2 text-gray-400"></i>
              <i class="fa-solid fa-sliders mx-2 text-gray-400"></i>
              <i class="fa-solid fa-filter mx-2 text-gray-400"></i>

            </div>


          </div>

          <div className='w-100 my-6'>
            <table width="100%" className='text-center border-separate border-spacing-y-3.5'>
              <thead className=''>
                <tr>
                  <th>Client</th>
                  <th>Project</th>
                  <th>Assign To</th>
                  <th>Date</th>
                  <th>Sales</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>

                <tr>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td>Lorem Epsum</td>
                  <td className='text-green-400'>1,000,000</td>
                </tr>
              </tbody>
            </table>

          </div>

        </div >



      </div>

      <div className='shadow-xl mt-4 w-[300px] rounded-xl p-7'>
        <div className='flex justify-between'>
          <h1 className='text-xl font-bold'>Balances</h1>
          <button className='bg-[#74c27b] text-white px-2 rounded-lg'><i class="fa-solid fa-plus"></i></button>
        </div>
        <div className='flex items-center'>
          <span className='text-[#74c27b] text-xl font-bold mr-1'>$</span><span>Dollar</span>
        </div>
        <h1 className='text-[#74c27b] text-3xl font-semibold'>9784.79</h1>

        <img src={CardImg} alt="atm-cards" />

      </div>
    </>
  )
}

export default Finance
