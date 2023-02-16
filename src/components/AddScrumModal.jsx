import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const AddScrumModal = () => {
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

    const [scrumModal, showScrumModal] = useState(false)
    const handleScrumOpen = () => showScrumModal(true);
    const handleScrumClose = () => showScrumModal(false);

    return (
        <>
            <div className='flex justify-end'>
                <button onClick={handleScrumOpen} className='absolute top-32  px-4 py-2 font-semibold rounded-md bg-[#72c179] text-white'>Create +</button>
            </div>
            <Modal open={scrumModal} onClose={handleScrumClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    Scrum
                </Box>
            </Modal>
        </>
    )
}

export default AddScrumModal
