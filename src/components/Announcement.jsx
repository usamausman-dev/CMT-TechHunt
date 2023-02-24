import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'
import TextField from '@mui/material/TextField';

export default function Announcement() {
    const [name, setName] = useState([])
    const [users, setUsers] = useState([]) //fetched data
    const [title, SetTitle] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState("")


    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
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
            setUsers(res.data.data.users)
            // setNames(res.data.data.users)

            setOpen(true)
        });
    };

    const handleClose = () => { setOpen(false) };
    const handleChange = (event) => {
        setFile(event.target.files[0])
    };

    const submitAnnouncement = () =>{
        const payload = {
            name , title, description, file
        }
        console.log(payload)
    }


    return (
        <>
            <Button sx={{ textTransform: 'none' , width:'100%' }} variant="standard" onClick={handleClickOpen}>
                Announcement
            </Button>

            <Dialog fullWidth={true} open={open} onClose={handleClose}>
                <DialogTitle className="bg-gray-100">Announcement</DialogTitle>
                <DialogContent sx={{ mt: 4 }}>

                    <div className='mt-2'>
                        <Autocomplete id="feature-select" multiple
                            options={users.map((option) => option.name)}
                            value={name} onChange={(event, newValue) => setName(newValue)} renderInput={(params) => (<TextField {...params} label="Employees" variant="outlined" color='success' />)} />
                    </div>

                    <TextField value={title} onChange={(event) => SetTitle(event.target.value)} sx={{ my: 1 }} autoFocus margin="dense" id="name" color='success' label="Title" type="text" fullWidth variant="outlined" />
                    <TextField value={description} onChange={(event) => setDescription(event.target.value)} sx={{ my: 1 }} multiline rows={4} fullWidth color='success' label="Description" />

                    <small className='text-gray-400' >{file.name}</small>

                    <div className='flex justify-end mt-6'>
                        <label className='bg-gray-200 px-4 py-2 mx-2 rounded-lg font-semibold' >
                        <i className="fa-regular fa-file mr-1"></i> Upload File
                            <input onChange={handleChange} type="file" hidden />
                        </label>
                        <button onClick={submitAnnouncement} className="bg-[#74c27b] px-4 py-2 mx-2 rounded-lg font-semibold">Send</button>
                    </div>

                </DialogContent>

            </Dialog>
        </>

    );
}