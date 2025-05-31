import Announcement from "@/components/ui/admin/Announcement";
import BigCalendar from "@/components/ui/admin/Big-Calendar";
import Performance from "@/components/ui/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css"

const singleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT  */}
      <div className="w-full">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4 ">
          {/* USER INFO  */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4 lg:w-[60%]">
            <div className="w-1/3">
              <Image
                src="https://avatar.iran.liara.run/public/21"
                width={144}
                height={144}
                alt="Yash Kumar "
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Lalit kumar</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    alt="blood group"
                    width={14}
                    height={14}
                  />
                  <span>B+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/date.png"
                    alt="date"
                    width={14}
                    height={14}
                  />
                  <span>April 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/mail.png"
                    alt="mail"
                    width={14}
                    height={14}
                  />
                  <span className="flex">yash.kumar12@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/phone.png"
                    alt="phone"
                    width={14}
                    height={14}
                  />
                  <span>+91 8851245368</span>
                </div>
              </div>
            </div>
          </div>
          {/* SMALL CARDS  */}
          <div className="flex gap-4 flex-wrap lg:w-[45%]">
            {/* CARD */}
            <div className="bg-white p-4 flex rounded-md gap-4 w-full md:w-[48%] xl:w-[40%] 2xl:w-[48%]">
                <Image src='/singleAttendance.png' alt="" width={24} height={24} className="w-6 h-6 "/>
                <div className="">
                    <h1 className="text-xl font-semibold">90%</h1>
                    <span className="text-sm text-gray-400" >Attendance</span>
                </div>
            </div>
            <div className="bg-white p-4 flex rounded-md gap-4 w-full md:w-[48%] xl:w-[40%] 2xl:w-[48%]">
                <Image src='/singleLesson.png' alt="" width={24} height={24} className="w-6 h-6 "/>
                <div className="">
                    <h1 className="text-xl font-semibold">6</h1>
                    <span className="text-sm text-gray-400" >Lesson</span>
                </div>
            </div>
            <div className="bg-white p-4 flex rounded-md gap-4 w-full md:w-[48%] xl:w-[40%] 2xl:w-[48%]">
                <Image src='/singleBranch.png' alt="" width={24} height={24} className="w-6 h-6 "/>
                <div className="">
                    <h1 className="text-xl font-semibold">2</h1>
                    <span className="text-sm text-gray-400" >Grade</span>
                </div>
            </div>
            <div className="bg-white p-4 flex rounded-md gap-4 w-full md:w-[48%] xl:w-[40%] 2xl:w-[48%]">
                <Image src='/singleClass.png' alt="" width={24} height={24} className="w-6 h-6 "/>
                <div className="">
                    <h1 className="text-xl font-semibold">Computer & English</h1>
                    <span className="text-sm text-gray-400" >Class</span>
                </div>
            </div>
          </div>
        </div>
        {/* BOTTOM  */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px] ">
          <h1>Student&apos;s Shedule</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full xl:w-1/3 flex flex-col gap-2">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex gap-2 flex-wrap text-xs text-gray-500">
          <Link href='/' className="p-2 rounded-md bg-lamaSkyLight">Student&apos;s Lessons</Link>
          <Link href='/' className="p-2 rounded-md bg-lamaPurpleLight">Student&apos;s Teachers</Link>
          <Link href='/' className="p-2 rounded-md bg-lamaYellowLight">Student&apos;s Results</Link>
          <Link href='/' className="p-2 rounded-md bg-pink-50">Student&apos;s Exams</Link>
          <Link href='/' className="p-2 rounded-md bg-lamaSkyLight">Student&apos;s Assignments</Link>
        </div>
      </div>
      <Performance/>
      <Announcement/>
      </div>
    </div>
  );
};

export default singleStudentPage;
