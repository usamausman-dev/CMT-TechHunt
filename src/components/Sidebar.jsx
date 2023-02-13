import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assests/logo.png'
import Logo1 from '../assests/logo1.png'

import { MdArrowBackIosNew } from 'react-icons/md'

const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", link: '/dashboard', icon: 'fa-solid fa-table-columns' },
        { title: "Project Manager", link: '/project-manager', icon: "fa-solid fa-chart-line" },
        { title: "HRM", link: '/hrm', gap: true, icon: "fa-regular fa-address-card" },
        { title: "Projects", link: '/projects', icon: "fa-solid fa-list-check" },
        { title: "Finance", link: '/finance', icon: "fa-solid fa-arrow-trend-up" },
        { title: "Accounts", link: '/accounts', icon: "fa-solid fa-building-columns" },
        { title: "Complaints", link: '/complaints', gap: true, icon: 'fa-solid fa-person-circle-question' },
        { title: "Team", link: '/team', icon: 'fa-solid fa-users' },
        { title: "Clients", link: '/clients', icon: 'fa-solid fa-briefcase' },
        { title: "New Leads", link: '/new-leads', icon: 'fa-solid fa-filter' },
        { title: "Messages", link: '/messages', icon: 'fa-regular fa-comments' },
        { title: "Hierarchy", link: '/hierarchy', icon: 'fa-solid fa-sitemap' },
        { title: "Settings", link: '/settings', icon: 'fa-solid fa-gear' },
    ]
    
    return (
        <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-gray-50 relative`}>

            <MdArrowBackIosNew color='#72c179' size={27} onClick={() => setOpen(!open)} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 p-1.5 bg-white  ${!open && "rotate-180"}`} />
            <div className='flex items-center'>
                <img src={Logo} className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} alt="logo" />
                <img src={Logo1} className={`pt-2 pl-2 text-black origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`} />


            </div>

            <ul className='pt-6'>
                {Menus.map((menu, index) => {
                    return (
                        <Link to={menu.link}>
                            <li
                                key={index}
                                className={`group text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer  p-2 hover:bg-light-white rounded-md  ${menu.title === 'Settings' ? 'fixed bottom-5' : ''}`}>
                                <i class={menu.icon}></i>
                                {/* <img alt={`logo-${index}`} src={menu.src} /> */}
                                <span
                                    style={{ transitionDelay: `${index + 1}00ms` }}
                                    className={`${!open && 'opacity-0 translate-x-28 overflow-hidden'} whitespace-pre origin-left duration-500 hover:text-[#72c179] hover:font-semibold`}>
                                    {menu.title}
                                </span>

                                <span
                                    className={`${open && "hidden"} absolute left-48 bg-white font-semibold text-sm whitespace-pre text-green-700 rounded-md overflow-hidden drop-shadow-lg px-0 py-0 w-0 group-hover:p-2  group-hover:left-24 group-hover:duration-300 group-hover:w-fit`}>
                                    {menu.title}
                                </span>
                            </li>
                        </Link>
                    )
                })}



            </ul>



        </div>
    )
}

export default Sidebar
