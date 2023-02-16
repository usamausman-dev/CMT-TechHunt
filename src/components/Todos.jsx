import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const Todos = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 650,
    bgcolor: 'background.paper',
    borderRadius: '3%',
    boxShadow: 24,
    p: 4,
  };

  const todos = [
    {
      title: 'Meeting with Stakeholders',
      text: 'Dumy Text Lorem Epsunm Agendda',
      Completed: false
    },
    {
      title: 'Meeting with Stakeholders',
      text: 'Dumy Text Lorem Epsunm',
      Completed: false
    },
  ]

  const handleEvent = () => {
    const payload = { title, description }
    console.log(payload)

  }

  return (
    <div className='w-96 overflow-y-auto pr-4'>
      <div className='flex items-center justify-between mb-6'>
        <div className='text-xl font-semibold'>Todos</div>
        <div>
          <button onClick={handleOpen} className='ml-6 bg-[#60a065] text-white px-4 py-2 rounded-md'><i className="fa-solid fa-plus"></i></button>

          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <div className='flex justify-between items-center mb-8'>
                <h1 className='text-2xl font-bold'>Add Todo</h1>
                <button onClick={handleClose}><i className="fa-solid fa-xmark text-2xl"></i></button>
              </div>

              <div className='items-center border-b-2 px-8 py-4 border-gray-200 flex justify-between'>
                <input value={title} onChange={(event) => setTitle(event.target.value)} className='text-2xl rounded-lg bg-gray-100 w-full mr-4 p-4' type="text" name="title" placeholder='Title' />
              </div>

              <div className='items-center border-b-2 px-8 py-4 border-gray-200 flex justify-between'>
                <textarea placeholder='Description' value={description} onChange={(event) => setDescription(event.target.value)} rows={8} className=' w-full text-2xl rounded-lg bg-gray-100 mr-4 p-4' />
              </div>

              <div className='flex justify-center text-xl mt-10'>
                <button onClick={handleEvent} className='border-green-300 border-2 px-6 rounded-full py-2 mx-4'>Save</button>
                <button onClick={handleClose} className='border-grey-300 border-2 px-6 rounded-full py-2 mx-4'>Cancel</button>
              </div>

            </Box>
          </Modal>

        </div>
      </div>

      {
        todos.map((todo, key) => {
          return (
            <div key={key} className='bg-[#e9e9e9] p-4 rounded-br-2xl my-3'>
              <div className='flex items-center justify-between'>
                <h1 className='underline font-medium mr-6 text-md'>{todo.title}</h1>
                <input type="checkbox" />
              </div>

              <div className='text-xs mt-2'>
                {todo.text}
              </div>

            </div>
          )
        }
        )
      }





    </div>
  )
}

export default Todos
