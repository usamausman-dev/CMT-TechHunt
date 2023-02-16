import React , {useState} from 'react'
import TextField from '@mui/material/TextField';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { PickersDay } from '@mui/x-date-pickers';
import '../styles/calendar.css'

const MiniCalender = () => {
    
    const [value, setValue] = useState(new Date())

    const highlightDates = [
        { date: new Date(2023, 0, 1), color: '#ff0000', class: 'pending' },
        { date: new Date(2023, 0, 15), color: '#0000ff', class: 'pending' },
        { date: new Date(2023, 1, 2), color: '#ffff00', class: 'completed' },
    ];


    const renderDay = (date, _, dayInCurrentMonth) => {
        const highlight = highlightDates.find(highlightDate =>
            date.getDate() === highlightDate.date.getDate()
            && date.getMonth() === highlightDate.date.getMonth()
            && date.getFullYear() === highlightDate.date.getFullYear()
        );

        if (highlight && dayInCurrentMonth) {
            return (
                <div className={highlight.class} key={date.toString()}>
                    {/* {date.getDate()} */}
                    <PickersDay {...dayInCurrentMonth} />
                </div>
            );
        }
        return <PickersDay {...dayInCurrentMonth} />
    }


    return (

        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                orientation="portrait"
                openTo="day"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                renderDay={renderDay}
            />
        </LocalizationProvider>

    )
}

export default MiniCalender
