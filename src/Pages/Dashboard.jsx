import React from 'react'
import { Cards, Projects, SocialMedia, Todos, Events,Calendar } from '../components'
import AllIcon from '../assests/icons/all.png'
import Finished from '../assests/icons/finished.png'
import Ongoing from '../assests/icons/ongoing.png'
import Sales from '../assests/icons/sales.png'
import Present from '../assests/icons/present.png'
import Employees from '../assests/icons/employee.png'

const Dashboard = () => {

    const analytics = [
        {
            text: 'Total Projects',
            Number: 30,
            Percentage: 10.5,
            positive: true,
            icon: AllIcon
        },

        {
            text: 'On Going Projects',
            Number: 15,
            Percentage: 7.2,
            positive: true,
            icon: Ongoing
        },

        {
            text: 'Finished Projects',
            Number: 15,
            Percentage: 7.2,
            positive: true,
            icon: Finished
        },

        {
            text: 'Total Sales',
            Number: 15000,
            Percentage: 7.2,
            positive: false,
            icon: Sales
        },

        {
            text: 'Total Expenses',
            Number: 150000,
            Percentage: 6.5,
            positive: false,
            icon: AllIcon
        },

    ]


    const Employee = [
        {
            text: 'Total Employees',
            Number: 121,
            Percentage: 10.5,
            positive: true,
            icon: Employees
        },

        {
            text: 'Present Today',
            Number: 90,
            Percentage: 7.2,
            positive: true,
            icon: Present
        },

        {
            text: 'Late',
            Number: 45,
            Percentage: 7.2,
            positive: false,
            icon: Present
        },

        {
            text: 'Absentees',
            Number: 25,
            Percentage: 7.2,
            positive: false,
            icon: Present
        },

        {
            text: 'Leave',
            Number: 30,
            Percentage: 6.5,
            positive: true,
            icon: Present
        },

    ]


    return (
        <>

            <div className='p-7'>
                <h1 className='text-2xl font-bold'>Analytics Overview</h1>
                <div className='flex justify-between  py-6'>
                    {
                        analytics.map((data, key) => <Cards data={data} key={key} />)
                    }
                </div>
            </div>


            <div className='p-7'>
                <h1 className='text-2xl font-bold'>Employee Status</h1>
                <div className='flex justify-between py-6'>
                    {
                        Employee.map((data, key) => <Cards data={data} key={key} />)
                    }
                </div>
            </div>

            <div className='p-7'>
                <h1 className='text-2xl font-bold'>Employee Status</h1>
                <div className='flex justify-between py-6'>
                    <div className='border-2 border-green-700/20 py-6 px-4 rounded-lg bg-gray-50 mx-2'><Calendar/></div>
                    <div className='border-2 border-green-700/20 grow py-6 px-4 rounded-lg bg-gray-50 mx-2'><Events /></div>
                    <div className='border-2 border-green-700/20 py-6 px-4 rounded-lg  mx-2'><Todos /></div>

                </div>
            </div>



            <Projects />

            <SocialMedia />



        </>
    )
}

export default Dashboard
