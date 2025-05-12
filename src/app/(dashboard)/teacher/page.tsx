import Announcement from '@/components/ui/admin/Announcement'
import BigCalendar from '@/components/ui/admin/Big-Calendar'
import EventCalender from '@/components/ui/admin/EventCalender'
import "react-big-calendar/lib/css/react-big-calendar.css"
import React from 'react'

const TeacherPage = () => {
  return (
    <div className='flex flex-1 p-4 gap-4 flex-col xl:flex-row'>
      {/* left  */}
      <div className="w-full xl:w-2/3">
        <div className='h-full bg-white p-4 rounded-md'>
        <h1 className='text-xl font-semibold'>Shedule (Basic Computer)</h1>
        <BigCalendar/>
        </div>
      </div>
      {/* RIGHT  */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <Announcement/>
            <div className="invisible">
              <EventCalender/>
              
              </div> 
            </div>
      </div>
      
  )
}

export default TeacherPage