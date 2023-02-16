import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const EditModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 800,
        bgcolor: 'background.paper',
        borderRadius: '3%',
        boxShadow: 24,
        p: 4,
    };

    const [title, setTitle] = useState("")
    const [startDate, setStartDate] = useState(new Date().toISOString().substr(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().substr(0, 10));
    const [selectedTime, setSelectedTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));
    const [selectEnd, setSelectEnd] = useState("")
    const [reminder, setReminder] = useState("")
    const [location, setLocation] = useState("")
    const [invites, setInvites] = useState("")
    const [inviteList, setInviteList] = useState([])
    const [notes, setNotes] = useState("")
    const [allDay, setAllDay] = useState(false)

    const handleEvent = () => {
        const payload = {
            title, startDate, endDate, selectedTime, selectEnd, reminder, location, inviteList, notes, allDay
        }

        console.log(payload)
        setOpen(false)
    }

    const addInvites = () => {
        inviteList.push(invites)
        setInviteList(inviteList)
        setInvites("")
    }

    const removeInvite = (index) => {
        const newInvites = [...inviteList]
        newInvites.splice(index, 1);
        setInviteList(newInvites)
    }

    return (
        <>
            <button onClick={handleOpen} className='mx-2'><i className="fa-solid fa-pen-to-square"></i></button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className='flex justify-between items-center mb-8'>
                        <h1 className='text-2xl font-bold'>Add Event</h1>
                        <button onClick={handleClose}><i className="fa-solid fa-xmark text-2xl"></i></button>

                    </div>

                    <div className='items-center border-b-2 px-8 py-4 border-gray-200 flex justify-between'>
                        <input value={title} onChange={(event) => setTitle(event.target.value)} className='text-2xl rounded-lg bg-gray-100 w-full mr-4 p-4' type="text" name="title" placeholder='Title' />
                        <input type="color" name="color" className="w-12 h-12 rounded-full p-2" />
                    </div>

                    <div className='flex justify-between items-center px-8 my-6 text-xl'>
                        <div>
                            <label>Date:</label>
                            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" name="start" className='bg-gray-100 p-4 ml-4 rounded-xl' />
                        </div>

                        <div>
                            <label>End Date:</label>
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} name="end" className='bg-gray-100 p-4 ml-4 rounded-xl' />
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-8 my-6 text-xl'>
                        <div>
                            <label>Time:</label>

                            <input type="time" onChange={(e) => setSelectedTime(e.target.value)} value={selectedTime} name="start_time" className='bg-gray-100 p-4 ml-4 rounded-xl' />
                            <span className='mx-4'>to</span>
                            <input type="time" value={selectEnd} onChange={(e) => setSelectEnd(e.target.value)} name="end_time" className='bg-gray-100 p-4  rounded-xl' />

                        </div>

                        <div className='flex items-center'>
                            <input type="checkbox" checked={allDay} onChange={(e) => setAllDay(e.target.checked)} name="allday" className='bg-gray-100 p-4 ml-4 rounded-xl w-5 h-5' />
                            <label className='text-md ml-4'>All Day</label>
                        </div>
                    </div>

                    <div className='flex items-center px-8 my-6 text-xl'>
                        <h1 className='mr-4'>Reminder</h1>
                        <div className='bg-gray-100 px-4 py-2 mx-3  rounded-xl'>
                            <i className="fa-solid fa-plus text-green-300"></i>
                            <input value={reminder} onChange={(event) => setReminder(event.target.value)} type="text" placeholder="Add Reminder" className='bg-transparent ml-3' />
                        </div>
                        <i className="fa-regular fa-bell"></i>
                    </div>

                    <div className='flex items-center px-8 my-6 text-xl'>
                        <h1 className='mr-4'>Location</h1>
                        <div className='flex items-center w-full border-b-2 border-gray-300'>
                            <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} className='w-full pb-1' placeholder='Add Location' />
                            <i className="fa-solid fa-location-dot text-green-300 ml-3"></i>
                        </div>

                    </div>

                    <div className='flex items-center px-8 mt-6 mb-3 text-xl'>
                        <h1 className='mr-4'>Invites</h1>
                        <div className='bg-gray-100 px-4 py-2 mx-3  rounded-xl'>
                            <button onClick={addInvites}><i className="fa-solid fa-plus text-green-300"></i></button>
                            <input type="text" placeholder="Add Invites" value={invites} onChange={(event) => setInvites(event.target.value)} className='bg-transparent ml-3' />
                        </div>
                    </div>

                    <div className='flex items-center px-8 '>
                        {
                            inviteList?.map((val, key) => <div className='mx-2 px-4 py-1 rounded-full bg-gray-200 flex items-center' key={key}>{val} <button onClick={() => removeInvite(key)}><i className="ml-3 fa-solid fa-xmark text-red-500"></i></button> </div>)
                        }

                    </div>

                    <div className='flex items-center px-8 my-6 text-xl'>
                        <h1 className='mr-4'>Notes</h1>
                        <div className='w-full border-b-2 border-gray-300'>
                            <input type="text" value={notes} onChange={(event) => setNotes(event.target.value)} className='w-full pb-1' placeholder='Notes' />
                        </div>
                    </div>

                    <div className='flex justify-center text-xl'>
                        <button onClick={handleEvent} className='border-green-300 border-2 px-6 rounded-full py-2 mx-4'>Save</button>
                        <button onClick={handleClose} className='border-grey-300 border-2 px-6 rounded-full py-2 mx-4'>Cancel</button>
                    </div>

                </Box>
            </Modal>
        </>
    )
}

export default EditModal
