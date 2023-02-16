import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import CustomCheckBox from './CustomCheckBox'


import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Uzair Usman',
    'Usama Usman',
    'Ameer Shaikh',
    'Syed Tamoor',
    'Abdul Sami',
    'Kashif',
    'Sufyan',
];


function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
    };
}



const AddProjectModal = () => {
    const [projectModal, showProjectModal] = useState(false)
    const handleProjectOpen = () => showProjectModal(true);
    const handleProjectClose = () => showProjectModal(false);


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

    const [projectName, SetProjectName] = useState('')
    const [startDate, setStartDate] = useState(new Date().toISOString().substr(0, 10));
    const [endDate, setEndDate] = useState(new Date().toISOString().substr(0, 10));


    // MULTISELECT 

    const theme = useTheme();
    const [personName, setPersonName] = useState([]);

    const handleChange = (event) => {
        const { target: { value } } = event;
        setPersonName(typeof value === 'string' ? value.split(',') : value);
    };



    const [privacy, setPrivacy] = useState(
        [
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

            {
                name: 'Secret',
                details: 'Nobody can view this team in the list. Team membership is by invitation only.',
                icon: 'fa-solid fa-eye'
            }
        ]
    )
    const [selectedPrivacy, setSelectedPrivacy] = useState([])


    const getValues = (value, checked) => {

        if (checked) {
            selectedPrivacy.push(value)
            setSelectedPrivacy(selectedPrivacy);
        }

        else {
            let val_index = selectedPrivacy.indexOf(value)
            selectedPrivacy.splice(val_index, 1)
            setSelectedPrivacy(selectedPrivacy)
        }

    }

















    return (
        <>
            <div className='flex justify-end'>
                <button onClick={handleProjectOpen} className='absolute top-32 mb-8 px-4 py-2 font-semibold rounded-md bg-[#72c179] text-white'>Create +</button>
            </div>
            <Modal open={projectModal} onClose={handleProjectClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <div className='flex justify-between items-center mb-4'>
                        <h1 className='text-2xl font-bold'>About project</h1>
                        <button onClick={handleProjectClose}><i className="fa-solid fa-xmark text-2xl"></i></button>
                    </div>

                    <div>
                        <input value={projectName} onChange={(event) => SetProjectName(event.target.value)} className='text-lg rounded-lg my-1 bg-gray-100 w-full border-green-700/20 border-2  px-4 py-2' type="text" name="title" placeholder='Title' />
                        <textarea rows={4} placeholder='Description' className='text-lg rounded-lg bg-gray-100 w-full border-green-700/20 border-2  px-4 py-2 my-1' />
                    </div>

                    <h1 className='text-xl font-semibold my-2'>Project Parameters</h1>
                    <div className='flex justify-between items-center px-2  text-md'>
                        <div>
                            <label>Date:</label>
                            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" name="start" className='border-green-700/20 border-2 bg-gray-100 px-4 py-2 ml-4 rounded-xl' />
                        </div>

                        <span><i className="fa-solid fa-minus"></i></span>

                        <div>
                            <label>End Date:</label>
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} name="end" className='border-green-700/20 border-2 bg-gray-100 px-4 py-2 ml-4 rounded-xl' />
                        </div>
                    </div>

                    <h1 className='text-xl font-semibold my-4'>Features</h1>

                    <div className='grid grid-cols-4 gap-4'>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>Home Screen</label>
                        </div>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>Vendor App</label>
                        </div>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>Boom Hit</label>
                        </div>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>Trello</label>
                        </div>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>SQA</label>
                        </div>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>Flutter Team</label>
                        </div>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>Marketing</label>
                        </div>

                        <div className='bg-slate-100 px-6 border-green-700/20 border-2 py-2 rounded-full'>
                            <input type="checkbox" name="Home-Screen" />
                            <label className='text-md ml-2'>Graphics</label>
                        </div>

                    </div>

                    <h1 className='text-xl font-semibold my-4'>Privacy Level</h1>
                    <div className='grid grid-cols-3 gap-2'>
                        {
                            privacy.map((priv, key) => <CustomCheckBox key={key} name={priv.name} detail={priv.details} icon={priv.icon} getValues={getValues} />)
                        }
                    </div>







                    <h1 className='text-xl font-semibold my-4'>Manage your Team</h1>

                    <div className='grid grid-cols-2 gap-8'>
                        <div>
                            <FormControl sx={{ m: 1, width: 400 }}>
                                <TextField id="outlined-basic" color='success' label="Project Owner" variant="outlined" />
                            </FormControl>

                        </div>
                        <div>
                            <FormControl sx={{ m: 1, width: 400 }}>
                                <InputLabel id="demo-multiple-name-label" color='success'>Team</InputLabel>
                                <Select labelId="demo-multiple-name-label" multiple value={personName} onChange={handleChange} input={<OutlinedInput label="Name" color="success" />} MenuProps={MenuProps}>
                                    {names.map((name) => (
                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                    </div>



                </Box>
            </Modal>

        </>
    )
}

export default AddProjectModal
