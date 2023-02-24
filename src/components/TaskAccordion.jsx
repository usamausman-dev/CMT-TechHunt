import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import CreateSubTask from './CreateSubTask';
import UserList from './UserList'

export const TaskAccordion = ({ task }) => {
    const { name, details, subtasks, assignTo } = task;


    const handleClick = async () => {
        console.log("clicked")
    }

    return (
        <Accordion>
            <AccordionSummary expandIcon={<i onClick={handleClick} className="text-[#72c179] fa-solid fa-chevron-down"></i>} aria-controls={`panel${name}bh-content`} id={`panel${name}bh-header`}>
                <div className='flex justify-start items-center w-full'>
                    <div className=' w-2/6'>{name}</div>
                    <UserList users={assignTo} />
                </div>
            </AccordionSummary>

            <AccordionDetails className='my-4 bg-gray-100'>
                <Typography sx={{ my: 4 }}>{details}</Typography>
                <div className='flex justify-between items-center mb-6'>
                    <h1 className='text-2xl font-medium '>Sub Tasks</h1>
                    <CreateSubTask />
                </div>

                {subtasks?.map(subtask => (<TaskAccordion task={subtask} key={subtask.name} />))}
            </AccordionDetails>
        </Accordion>
    );
}

