import React, { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import { AddProjectModal, AddScrumModal } from '../components'
import axios from 'axios'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const URL = "http://192.168.100.18:8121/api/project/get"
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
            setProjects(res.data.data)
        });

    }, [])

    return (
        <div >
            <Tab.Group>
                <Tab.List className="flex space-x-1 ">
                    <Tab className={({ selected }) => classNames('rounded-lg py-2.5 mx-8 text-md font-bold leading-5', 'ring-transparent ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
                        selected ? 'text-[#72c179] border-b-4 rounded-none border-[#72c179]' : '')
                    }>Projects</Tab>

                    <Tab className={({ selected }) => classNames('rounded-lg py-2.5 mx-8 text-md font-bold leading-5', 'ring-transparent ring-opacity-60 ring-offset-2 ring-offset-transparent focus:outline-none focus:ring-2',
                        selected ? 'text-[#72c179] border-b-4 rounded-none border-[#72c179]' : '')
                    }>Scrum</Tab>
                </Tab.List>
                <hr className='' />
                <Tab.Panels>
                    <Tab.Panel>
                        <div className='w-100 my-6'>
                            <AddProjectModal />
                            <table width="100%" className='text-center border-separate border-spacing-y-3.5' cellPadding="20px">
                                <thead className='text-[#707eae]'>
                                    <tr >
                                        <th>Project Name</th>
                                        <th>Brand Name</th>
                                        <th>Client Name</th>
                                        <th>Assign To</th>
                                        <th> Progress %</th>
                                        <th>Start Date</th>
                                        <th>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        projects.map((project, key) => {
                                            return (
                                                <tr onClick={() => window.location.href="/finance"} key={key} className='shadow-lg rounded-md bg-gray-50 hover:cursor-pointer'>
                                                    <td>{project.name}</td>
                                                    <td>{project.brand.name}</td>
                                                    <td>{project.client.name}</td>
                                                    <td>{project.manager.name}</td>
                                                    <td>Lorem Ipsum</td>
                                                    <td>{project.start_date}</td>
                                                    <td>{project.end_date}</td>
                                                </tr>

                                            )
                                        })
                                    }





                                </tbody>
                            </table>

                        </div>


                    </Tab.Panel>

                    <Tab.Panel>
                        <div className='w-100 my-6'>
                            <AddScrumModal />

                            <table width="100%" className='text-center border-separate border-spacing-y-3.5' cellPadding="20px">
                                <thead className='text-[#707eae]'>
                                    <tr >
                                        <th>Project Name</th>
                                        <th>Brand Name</th>
                                        <th>Client Name</th>
                                        <th>Assign To</th>
                                        <th> Progress %</th>
                                        <th>Start Date</th>
                                        <th>Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='shadow-lg rounded-md bg-gray-50'>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                    </tr>

                                    <tr className='shadow-lg rounded-md bg-gray-50'>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                        <td>Lorem Ipsum</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </Tab.Panel>

                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Projects
