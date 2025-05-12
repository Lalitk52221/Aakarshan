import Announcement from '@/components/ui/admin/Announcement'
import BigCalendar from '@/components/ui/admin/Big-Calendar'
import EventCalender from '@/components/ui/admin/EventCalender'
import "react-big-calendar/lib/css/react-big-calendar.css"
import React from 'react'

const StudentPage = () => {
  return (
    <div className='flex h-[200%] flex-1 p-4 gap-4 flex-col lg:flex-row'>
      {/* left  */}
      <div className="w-full lg:w-2/3">
        <div className='h-full bg-white p-4 rounded-md'>
        <h1 className='text-xl font-semibold'>Shedule </h1>
        <BigCalendar/>
        </div>
      </div>
      {/* RIGHT  */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalender/>
            <Announcement/>
            </div>
      </div>
      
  )
}

export default StudentPage