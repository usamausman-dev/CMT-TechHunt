import React, { useState } from 'react';

const CustomCheckBox = ({ name, detail, icon, getValues }) => {
    let [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setChecked(!checked)
        let inputValue = e.target.value
        getValues(inputValue, !checked)
    }

    return (
        <div>
            <label style={{ cursor: 'pointer' }}>
                <input type="checkbox" name='privacy' value={name} checked={checked} onChange={handleChange} style={{ display: 'none' }} />
                <div className={checked ? ('border-green-700/20 h-28 bg-green-300 rounded-3xl border-2') : ('border-green-700/20 h-28 bg-slate-100 rounded-3xl border-2')}>
                    
                    <div className='flex items-center p-4'>
                        <div className='bg-green-100 px-3 rounded-full py-2 text-green-700/50'><i className={icon}></i></div>
                        <div className='ml-4'>
                            <h1 className='text-md'>{name}</h1>
                            <p className="text-xs">{detail}</p>
                        </div>

                    </div>
                </div>
            </label>

          
        </div>



    )
}

export default CustomCheckBox
