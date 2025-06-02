/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Button } from "../ui/button";
import InputField from "../ui/InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long!" }),
  firstname: z.string().min(1, { message: "First name is required!" }),
  lastname: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone Number is required!" }),
  address: z.string().min(2, { message: "Address is required!" }),
  bloodtype: z.string().min(1, { message: "Blood type is required!" }),
  // birthday: z.date({ message: "Birthday is required!" }),
  birthday: z
    .string()
    .min(1, { message: "Birthday is required!" })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format!",
    }),
  gender: z.enum(["male", "female", "others"], {
    message: "Gender is required!",
  }),
  img: z.instanceof(File, { message: "Image is requied" }).optional(),
});
type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onsubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8 p-3" onSubmit={onsubmit}>
      <h1 className="text-xl font-semibold">Create a new Teacher</h1>
      <span className="text-xs font-medium text-gray-400">
        Authentication Information
      </span>
<div className="flex justify-between flex-wrap gap-4">
      <InputField
        label="username"
        name="username"
        defaultValue={data?.username}
        register={register}
        error={errors?.username}
      />
      <InputField
        label="Email"
        name="email"
        defaultValue={data?.email}
        register={register}
        error={errors?.email}
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        defaultValue={data?.password}
        register={register}
        error={errors?.password}
      />
      </div>


      <span className="text-xs font-medium text-gray-400">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
        label="First Name"
        name="firstname"
        defaultValue={data?.firstname}
        register={register}
        error={errors?.firstname}
      />
      <InputField
        label="Last Name"
        name="lastname"
        defaultValue={data?.lastname}
        register={register}
        error={errors?.lastname}
      />
      <InputField
        label="Phone Number"
        name="phone"
        defaultValue={data?.phone}
        register={register}
        error={errors?.phone}
      />
      <InputField
        label="Address"
        name="address"
        defaultValue={data?.address}
        register={register}
        error={errors?.address}
      />
      <InputField
        label="Blood Type"
        name="bloodtype"
        defaultValue={data?.bloodtype}
        register={register}
        error={errors?.bloodtype}
      />
      <InputField
        label="Birthday"
        name="birthday"
        type="date"
        defaultValue={data?.birthday}
        register={register}
        error={errors?.birthday}
      />
      
      <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label>Gender</label>
      <select
        {...register("gender")}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
        defaultValue={data?.gender}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>
      {errors.gender?.message && (
        <p className="text-xs text-red-500 ">{errors.gender?.message.toString()}</p>
      )}
    </div>

    <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
      <label className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
        <Image src="/upload.png"  alt="" width={28} height={28}/>
        <span>Upload a photo</span>
      </label>
      <input type="file" id="img" {...register("img")} className="hidden"/>
        
      {errors.gender?.message && (
        <p className="text-xs text-red-500 ">{errors.gender?.message.toString()}</p>
      )}
    </div>
</div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
