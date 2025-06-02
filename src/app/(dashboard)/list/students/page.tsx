import Pagination from "@/components/ui/Pagination";
import TableSearch from "@/components/ui/TableSearch";
import Image from "next/image";
import React from "react";
import Table from "@/components/ui/Table";
import Link from "next/link";
import { role, studentsData } from "@/lib/data";
import FormModals from "@/components/ui/FormModals";


type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo?: string;
  phone?: string;
  grade: number;
  class:string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
 
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];
const StudentListPage = () => {
  const renderRow = (item: Student) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex items-center gap-2 p-4">
        <Image
          src={item.photo || "/avatar.png"}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block rounded-full h-10 w-10 object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>
        <td className="hidden lg:table-cell">{item.phone}</td>
        <td className="hidden lg:table-cell">{item.address}</td>
      
      <td>
        <div className="flex items-center gap-2 ">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky cursor-pointer">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          </Link> 
          {role === "admin" && (
            // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-300 cursor-pointer">
            //   <Image src="/delete.png" alt="" width={16} height={16} />
            // </button>
            <FormModals type="delete" id={item.id} table="student"/>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* top section  */}
      <div className="flex justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-3 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role==='admin' &&
            <FormModals type="create"  table="student"/>
            }
          </div>
        </div>
      </div>
      {/* LIST  */}
      <Table columns={columns} renderRow = {renderRow} data={studentsData} />
      <div className=""></div>
      {/* PAGINATION  */}
      <Pagination />
    </div>
  );
};

export default StudentListPage;
