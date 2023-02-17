import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CustomCheckBox from './CustomCheckBox'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const names = ['Uzair Usman', 'Usama Usman', 'Ameer Shaikh', 'Syed Tamoor', 'Abdul Sami', 'Kashif', 'Sufyan'];


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

    const [projectName, SetProjectName] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState(new Date().toISOString().substr(0, 10));
    const [endDate, setEndDate] = useState('');
    const [personName, setPersonName] = useState([]);
    const handleChange = (event, newValue) => setPersonName(newValue)
    const [projectOwner, setProjectOwner] = useState('')


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

    const features = [
        { name: 'Pakistan', feature: ['Lahore', 'Karachi', 'Islamabad'] },
        { name: 'India', feature: ['Delhi', 'Mumbai', 'Bangalore'] },
        { name: 'USA', feature: ['New York', 'Los Angeles', 'Chicago'] },
    ];


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

    const [selectedFeatures, setSelectedFeatures] = useState(null);
    const [selectedFeature, setSelectedFeature] = useState([]);

    const handleCountryChange = (event, newValue) => {
        setSelectedFeatures(newValue);
        setSelectedFeature([]);
    };

    

    const handleEvent = () => {
        const payload = { projectName, projectOwner, description, startDate, endDate, personName, selectedPrivacy, selectedFeatures, selectedFeature }
        console.log(payload)
    }

    const clearAll = () =>{
        SetProjectName('')
        setDescription('')
        setStartDate(new Date().toISOString().substr(0, 10))
        setEndDate('')
        setPersonName([])

        setProjectOwner('')
        setSelectedPrivacy([])
        setSelectedFeatures(null)
        setSelectedFeature([])
        showProjectModal(false)

    }

    const handleClose = () =>{
        clearAll()
        showProjectModal(false)

    }



    return (
        <>
            <div className='flex justify-end'>
                <button onClick={() => showProjectModal(true)} className='absolute top-32 mb-8 px-4 py-2 font-semibold rounded-md bg-[#72c179] text-white'>Create +</button>
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
                            <input value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" name="start" className='border-green-700/20 border-2 bg-gray-100 px-4 py-2 ml-4 rounded-xl' />
                        </div>

                        <span><i className="fa-solid fa-minus"></i></span>

                        <div>
                            <label>End Date:</label>
                            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} name="end" className='border-green-700/20 border-2 bg-gray-100 px-4 py-2 ml-4 rounded-xl' />
                        </div>
                    </div>

                    <h1 className='text-xl font-semibold my-4'>Features</h1>

                    <div className='grid grid-cols-2 gap-4'>
                        <Autocomplete id="feature-category-select" options={features} getOptionLabel={(option) => option.name} isOptionEqualToValue={(option, value) => option.name === value.name} value={selectedFeatures} onChange={handleCountryChange}
                            renderInput={(params) => (
                                <TextField {...params} label="Select a feature category" variant="outlined" color='success' />
                            )}
                        />
                        {selectedFeatures && (
                            <Autocomplete id="feature-select" multiple options={selectedFeatures.feature} value={selectedFeature} onChange={(event, newValue) => setSelectedFeature(newValue)}
                                renderInput={(params) => (
                                    <TextField {...params} label="Select feature" variant="outlined" color='success' />
                                )}
                            />
                        )}

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
                                <TextField value={projectOwner} onChange={(event) => setProjectOwner(event.target.value)} id="outlined-basic" color='success' label="Project Owner" variant="outlined" />
                            </FormControl>
                        </div>
                        <div className='mt-2'>
                            <Autocomplete id="feature-select" multiple options={names} value={personName} onChange={handleChange} renderInput={(params) => (<TextField {...params} label="Select Team" variant="outlined" color='success' />)} />
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
