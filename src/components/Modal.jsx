import React from 'react'

const Modal = ({ showModal }) => {
    return (
        <div className='bg-gray-900/50  fixed inset-0 z-50 pt-16'>
            <div className='flex h-screen justify-center items-center'>
                <div className='bg-white flex-col justify-center bg-lightBeige p-12 md:w-6/12 h-[45rem] overflow-scroll md:overflow-hidden'>
                    <div className='flex justify-between'>
                        <div className='font-semibold text-2xl'>About</div>
                        <button onClick={() => showModal(false)}>x</button>
                    </div>

                    <div className='md:grid md:grid-cols-2 my-5 bg-white text-black'>
                        hello
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
