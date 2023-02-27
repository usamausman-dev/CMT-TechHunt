import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios'

const AddProjectModal = () => {
    const [projectModal, showProjectModal] = useState(false)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        height: 930,
        bgcolor: 'background.paper',
        borderRadius: '3%',
        boxShadow: 24,
        p: 4,
    };

    const privacy = [
        {
            name: 'Public',
            details: 'Team is Public, any employee can join and view the team details',
            icon: 'fa-regular fa-folder'
        },

        {
            name: 'Private',
            details: 'Team is Private, access is by invitation only',
            icon: 'fa-solid fa-lock'
        },

    ]

    const [projectName, SetProjectName] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(new Date().toISOString().substr(0, 19));
    const [endDate, setEndDate] = useState('');
    const [pmName, setPmName] = useState([]);
    const [ownerName, setOwnerName] = useState([]);

    const [names, setNames] = useState([])




    const [dept, setDept] = useState([])
    const [departments, setDepartments] = useState([]) //fetched data

    const [brand, setBrand] = useState("")
    const [brands, setBrands] = useState([])



    const [client, setClient] = useState("")
    const [clients, setClients] = useState([])



    const [selectedPrivacy, setSelectedPrivacy] = useState(null)



    const handleEvent = () => {
        const deptId = dept.map((option) => {
            const item = departments.find((item) => item.name === option);
            return item ? item.id : null;
        });




        const payload = {
            "title": projectName,
            "description": description,
            "start_date": startDate.replaceAll("T"," "),
            "end_date": endDate.replaceAll("T"," "),
            "client_id": client,
            "brand_id": brand,
            "departments": deptId,
            "security": selectedPrivacy,
            "project_creator": ownerName,
            "project_manager": pmName
        }

      

        const token = "6|jOyFHeA4zQaxXlmDF8UdJfNkzDWicJ5QKM4hn035"

        let config = {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                Authorization: `Bearer ${token}`,
                authorization: `Bearer ${token}`
            },
        }

        axios.post("http://192.168.100.18:8121/api/project/create", payload, config).then((res) => {
            handleClose()
            window.location.reload(false)
        })
    }

    const clearAll = () => {
        SetProjectName('')
        setDescription('')
        setStartDate(new Date().toISOString().substr(0, 10))
        setEndDate('')
        setPmName([])
        setOwnerName([])
        setSelectedPrivacy([])
        setBrand([])
        setClient([])
        setDept([])
        showProjectModal(false)
    }

    const handleClose = () => {
        clearAll()
        showProjectModal(false)

    }




    const openModal = () => {
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
            setDepartments(res.data.data.departments)
            setBrands(res.data.data.brands)
            setClients(res.data.data.clients)
            setNames(res.data.data.users)
            showProjectModal(true)
        });
    }

    const changeDept = (event, newValue) => {
        setDept(newValue)
    }



    return (
        <>
            <div className='flex justify-end'>
                <button onClick={openModal} className=' -mt-12 px-4 py-2 font-semibold rounded-md bg-[#72c179] text-white'>Create +</button>
            </div>
            <Modal open={projectModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-2xl font-bold'>About project</h1>
                        <button onClick={handleClose}><i className="fa-solid fa-xmark text-2xl"></i></button>
                    </div>

                    <div>
                        <input value={projectName} onChange={(event) => SetProjectName(event.target.value)} className='text-lg rounded-lg my-1 bg-gray-100 w-full border-green-700/20 border-2  px-4 py-2' type="text" name="title" placeholder='Title' />
                        <textarea value={description} onChange={(event) => setDescription(event.target.value)} rows={4} placeholder='Description' className='text-lg rounded-lg bg-gray-100 w-full border-green-700/20 border-2  px-4 py-2 my-1' />
                    </div>

                    <h1 className='text-xl font-semibold my-2'>Project Parameters</h1>
                    <div className='flex justify-between items-center px-2  text-md'>
                        <div>
                            <label>Date:</label>
                            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="datetime-local" name="start" className='border-green-700/20 border-2 bg-gray-100 px-4 py-2 ml-4 rounded-xl' />
                        </div>

                        <span><i className="fa-solid fa-minus"></i></span>

                        <div>
                            <label>End Date:</label>
                            <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} name="end" className='border-green-700/20 border-2 bg-gray-100 px-4 py-2 ml-4 rounded-xl' />
                        </div>
                    </div>

                    <h1 className='text-xl font-semibold my-4'>Features</h1>

                    <div className='grid grid-cols-3 gap-4'>
                        <div className='mt-2'>
                            <Autocomplete id="feature-select" multiple
                                options={departments.map((option) => option.name)}
                                value={dept} onChange={changeDept} renderInput={(params) => (<TextField {...params} label="Department" variant="outlined" color='success' />)} />
                        </div>

                        <div>
                            <FormControl sx={{ m: 1, minWidth: 250 }} >
                                <InputLabel color='success' id="brands-label">Brands</InputLabel>
                                <Select color='success' labelId="brands-label" id="brands" value={brand} onChange={(event) => setBrand(event.target.value)} autoWidth label="Brands">
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    {
                                        brands?.map((val, key) => <MenuItem key={key} value={val.id}>{val.name}</MenuItem>)
                                    }

                                </Select>
                            </FormControl>
                        </div>


                        <div>
                            <FormControl sx={{ m: 1, minWidth: 250 }} >
                                <InputLabel color='success' id="clients-label">Clients</InputLabel>
                                <Select color='success' labelId="clients-label" id="clients" value={client} onChange={(event) => setClient(event.target.value)} autoWidth label="Clients">
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    {
                                        clients.map((val, key) => <MenuItem key={key} value={val.id}>{val.name}</MenuItem>)
                                    }

                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <h1 className='text-xl font-semibold my-4'>Privacy Level</h1>
                    <div className='grid grid-cols-2 gap-8'>
                        {
                            privacy.map((priv, key) => {
                                return (
                                    <div key={key}>
                                        <label style={{ cursor: 'pointer' }}>
                                            <input type="checkbox" name='privacy' value={priv.name} onChange={(e) => setSelectedPrivacy(e.target.value)} style={{ display: 'none' }} />
                                            <div className={priv.name === selectedPrivacy ? ('border-green-700/20 h-28 bg-green-300 rounded-3xl border-2') : ('border-green-700/20 h-28 bg-slate-100 rounded-3xl border-2')}>

                                                <div className='flex items-center p-4'>
                                                    <div className='bg-green-100 px-3 rounded-full py-2 text-green-700/50'><i className={priv.icon}></i></div>
                                                    <div className='ml-4'>
                                                        <h1 className='text-md'>{priv.name}</h1>
                                                        <p className="text-xs">{priv.details}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                )
                            }

                            )
                        }
                    </div>

                    <h1 className='text-xl font-semibold my-4'>Manage your Team</h1>

                    <div className='grid grid-cols-2 gap-8'>

                        <div>
                            <FormControl sx={{ m: 1, minWidth: 400 }} >
                                <InputLabel color='success' id="owner-label">Owner</InputLabel>
                                <Select color='success' labelId="owner-label" id="owner" value={ownerName} onChange={(event) => setOwnerName(event.target.value)} autoWidth label="Owner">
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    {
                                        names.map((val, key) => <MenuItem key={key} value={val.id}>{val.name}</MenuItem>)
                                    }

                                </Select>
                            </FormControl>
                        </div>

                        <div>
                            <FormControl sx={{ m: 1, minWidth: 400 }} >
                                <InputLabel color='success' id="pm-label">Project Manager</InputLabel>
                                <Select color='success' labelId="pm-label" id="pm" value={pmName} onChange={(event) => setPmName(event.target.value)} autoWidth label="Project Manager">
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    {
                                        names.map((val, key) => <MenuItem key={key} value={val.id}>{val.name}</MenuItem>)
                                    }

                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className='flex justify-center text-xl mt-6'>
                        <button onClick={handleEvent} className='border-green-300 border-2 px-6 rounded-full py-2 mx-4'>Save</button>
                        <button onClick={handleClose} className='border-grey-300 border-2 px-6 rounded-full py-2 mx-4'>Cancel</button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default AddProjectModal
