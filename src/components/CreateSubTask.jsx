import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const CreateSubTask = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Button variant="standard" onClick={handleClickOpen}>
                New Sub-Task
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Task</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
                </DialogContent>

            </Dialog>
        </div>
    )
}

export default CreateSubTask
