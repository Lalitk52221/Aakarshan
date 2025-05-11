import Announcement from "@/components/ui/admin/Announcement";
import AttendanceChart from "@/components/ui/admin/AttendanceChart";
import CountCharts from "@/components/ui/admin/CountChart";
import EventCalender from "@/components/ui/admin/EventCalender";
import FinanceChart from "@/components/ui/admin/FinanceChart";
import UserCard from "@/components/ui/admin/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex p-4 gap-4 flex-col md:flex-row">
      {/* LEFT  */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARDS  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staffs" />
        </div>
        {/* MIDDLE CLASS  */}
        <div className="flex gap-4 lg:flex-row flex-col ">
            {/* COUNT CHART  */}
            <div className="w-full lg:w-1/3 h-[450px] ">
            <CountCharts/>
            </div>
            {/* ATTENDANCE CHART  */}
            <div className="w-full lg:w-2/3 h-[450px]"><AttendanceChart/></div>
        </div>

        {/* BOTTOM CLASS  */}
        <div className="h-[500px] w-full">
          <FinanceChart/>
        </div>
      </div>
      {/* RIGHT  */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalender/>
      <Announcement/>
      </div>
    </div>
  );
};

export default AdminPage;
