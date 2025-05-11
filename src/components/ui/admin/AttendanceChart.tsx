"use client"
import Image from 'next/image';
import React from 'react'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 35,
    absent: 45,
  },
  {
    name: 'Wed',
    present: 40,
    absent: 42,
  },
  {
    name: 'Thu',
    present: 49,
    absent: 40,
  },
  {
    name: 'Fri',
    present: 50,
    absent: 60 ,
  },
 
];

const AttendanceChart = () => {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className="flex justify-between items-center">
            <h1 className='text-lg font-semibold'>Attendance</h1>
            <Image src="/moreDark.png" alt="" height={20} width={20}  />
        </div>
        <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="2 2" vertical={false} stroke='#dddd' />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}}/>
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:'20px', paddingBottom:'40px'}}/>
          <Bar dataKey="present" fill="#Fae276"  legendType='circle' radius={[10,10,0,0]}/>
          <Bar dataKey="absent" fill="#c3ebfa"  legendType='circle' radius={[10,10,0,0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart