import React from 'react'
import Yes from '../assests/Growth/Yes.png'
import No from '../assests/Growth/No.png'


const Cards = ({ data }) => {
    return (
        <div className='w-[15vw] shadow-lg rounded-lg flex p-4 items-center justify-between border-green-700/20 border-2'>
            <div>
                <img src={data.icon} className="mb-2" alt={data.text}/>
                <h1 className='font-semibold'>{data.text}</h1>
                <p className='text-3xl font-bold mb-4'>{data.Number}</p>
                <p className={data.positive ? ('text-green-500') : ('text-red-500')}>

                    {data.positive ?
                        (<i className='fa-solid fa-arrow-trend-up mr-2'></i>)
                        :
                        (<i className='fa-solid fa-arrow-trend-down mr-2'></i>)
                    }
                    {data.Percentage}%</p>
            </div>
            <div> 
                {
                    data.positive ? (<img src={Yes} alt="positive" />) : (<img src={No} alt="negative" />)
                }
            </div>

        </div>
    )
}

export default Cards
