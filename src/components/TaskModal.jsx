import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TaskAccordion } from './TaskAccordion';
import CreateSubTask from './CreateSubTask';


const TaskModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };



    const subtasks = [
        {
            name: 'Frontend develop',
            assignTo: ['Usama'],
            details: 'lorem epsum',
            subtasks: [
                {
                    name: 'Frontend develop',
                    assignTo: ['Usama', 'Sami'],
                    details: 'lorem epsum',
                    subtasks: []
                },
                {
                    name: 'Backend develop',
                    assignTo: ['Taimoor', 'Kashif'],
                    details: 'lorem epsum',
                    subtasks: []
                }

            ]
        }
    ]

    return (
        <div>
            <Button onClick={handleOpen}><i className="text-[#707eae] fa-solid fa-eye"></i></Button>
            <Dialog fullWidth={true}
                maxWidth="lg" open={open} onClose={handleClose} scroll="paper" aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description" >
                <DialogTitle id="scroll-dialog-title" className='border border-b-2 border-gray-200 flex justify-between'>
                    <div>Task Name</div>
                    <Button onClick={handleClose}><i className="fa-solid fa-xmark text-[#72c179]"></i></Button>
                </DialogTitle>
                <DialogContent >
                    <DialogContentText component={'span'} id="scroll-dialog-description" tabIndex={-1}>
                        <section className='p-7 text-black'>
                            <h1 className='text-2xl font-medium my-6'>Description</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestiae aperiam obcaecati deserunt amet facere! Quasi odit sint quibusdam harum at qui corporis voluptatibus. Quas magnam consectetur quod asperiores rem?</p>

                            <div className='flex justify-between items-center'>
                                <h1 className='text-2xl font-medium my-6'>Sub Tasks</h1>
                                <CreateSubTask />
                            </div>

                            <div>
                                {subtasks.map(task => (<TaskAccordion task={task} key={task.name} />))}
                            </div>
                        </section>
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </div>
    );
}

export default TaskModal
