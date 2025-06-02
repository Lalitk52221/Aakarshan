"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { JSX, useState } from "react";
// import TeacherForm from "../forms/TeacherForm";
// import StudentForm from "../forms/StudentForm";

const TeacherForm = dynamic(()=> import("../forms/TeacherForm"),{
  loading:()=> <h1>Loading...</h1>,
})
const StudentForm = dynamic(()=> import("../forms/StudentForm"),{
  loading:()=> <h1>Loading...</h1>,
})

const forms:{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key:string]: (type: "create" | "update", data?: any) => JSX.Element;
}={
  teacher:(type,data)=><TeacherForm type={type} data={data}/>,
  student:(type,data)=><StudentForm type={type} data={data}/>,
}

const FormModals = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "attendance"
    | "result"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";
  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          All data will be lost. Are you sure you want to delte this {table}?
        </span>
<button className="bg-red-700 text-white py-2 px-4 border-none w-max self-center">Delete</button>
      </form>
    ) : type==="create" || type==="update" ? (
      // <TeacherForm type="update" data={data}/>
      forms[table](type,data)
    ):(
      "Form not found "
    );
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt={type} width={16} height={16} />
      </button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black opacity-90 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%]">
            <Form/>
            <div className="absolute top-4 right-4 cursor-pointer ">
              <Image
                src="/close.png"
                alt="close"
                width={14}
                height={14}
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
         </div>
      )}
    </>
  );
};

export default FormModals;
