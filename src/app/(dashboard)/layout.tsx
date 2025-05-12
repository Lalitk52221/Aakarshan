
import Image from "next/image";
import Link from "next/link";
import Menu from "@/components/ui/admin/Menu";
import Navbar from "@/components/ui/admin/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* left  */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 overflow-y-scroll scroll-smooth">
        <Link href="/" className="flex items-center justify-center p-4">
        {/* <Image src="/logo.png" alt="logo" width={32} height={32}/> */}
        <Image src="/SMF_logo.png" alt="logo" width={130} height={130}/>
        {/* <span className="hidden lg:block font-bold ">Aakarshan</span> */}
        </Link>
        <Menu/>
      </div>
      {/* Right  */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] overflow-scroll flex flex-col ">  
      <Navbar/>
      {children}
      </div>
    </div>
  );
}
