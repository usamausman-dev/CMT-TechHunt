import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'



const CreateSubTask = () => {

    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [names, setNames] = useState([])
    const [name, setName] = useState([])

    const [title, SetTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleClickOpen = () => {
        // setOpen(true);
        const URL = "http://192.168.100.18:8121/api/project/create-get"
        const token = "6|jOyFHeA4zQaxXlmDF8UdJfNkzDWicJ5QKM4hn035"
        axios.get(URL, {
            method: 'get',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify()
        }).then((res) => {
            setNames(res.data.data.users)
            setOpen(true)
        });
    };

    const handleClose = () => { setOpen(false) };
    const submitTask = () => {
        const payload = { title, description, startDate, endDate, name }
        console.log(payload)
    }


    return (
        <div>
            <Button variant="standard" onClick={handleClickOpen} sx={{ background: '#72c179', fontWeight: 700, color: 'white', padding: '10px 20px' }}>
                Create <i className="ml-3 fa-solid fa-plus"></i>

            </Button>
            <Dialog fullWidth={true}
                maxWidth="md" open={open} onClose={handleClose}>
                <DialogTitle>
                    <div className='flex justify-between'>
                        <div>Sub-Task</div>
                        <Button onClick={handleClose}><i className="fa-solid fa-xmark text-[#72c179]"></i></Button>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <TextField value={title} onChange={(event) => SetTitle(event.target.value)} sx={{ my: 1 }} autoFocus margin="dense" id="name" color='success' label="Title" type="text" fullWidth variant="outlined" />
                    <TextField value={description} onChange={(event) => setDescription(event.target.value)} sx={{ my: 1 }} multiline rows={4} fullWidth color='success' label="Description" />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>

                        <DateTimePicker color="success"
                            renderInput={(props) => <TextField sx={{ my: 2 }} color='success' {...props} />}
                            label="Start Date" value={startDate || null} onChange={(newValue) => { setStartDate(newValue); }}
                        />

                        <DateTimePicker color="success"
                            renderInput={(props) => <TextField sx={{ my: 2, ml: 4 }} color='success' {...props} />}
                            label="End Date" value={endDate || null} onChange={(newValue) => { setEndDate(newValue); }}
                        />

                    </LocalizationProvider>

                    <Autocomplete id="feature-select" multiple value={name}
                        options={names.map((option) => option.name)}
                        onChange={(event, newValue) => setName(newValue)}
                        renderInput={(params) => (<TextField {...params} label="Team" variant="outlined" color='success' />)} />

                    <div className='flex justify-center'>
                        <button className='bg-[#72c179] mt-10 px-6 py-2 text-white rounded-lg' onClick={submitTask}>Submit</button>
                    </div>
                </DialogContent>

            </Dialog>
        </div>
    )
}

export default CreateSubTask
