// import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
//Import the CSS for the calendar

export default function CalendarComponent () {
 return (
    <div className='grid justify-items-center mx-auto text-black'>
      <Calendar />
    </div>
 );
}
