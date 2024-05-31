'use client'
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Table from "@/components/Table";
import EmptyTable from "@/components/EmptyTable";
import { useEffect, useState } from "react";

export default function Customers() { 
    
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
  fetch('http://localhost:3000/customers')
    .then((res) => res.json())
    .then((data) => {
      setCustomers(data.customers);
    });
}, []);
 
    return ( 
        <div
            className=''
            >
            <div className="h-screen">
                <div className="w-4/5 items-center p-10">
                  <div className="mb-3 flex justify-between">
                    <h1 className="md:text-4xl font-bold">All Customers({customers.length})</h1>
                    <Link className="rounded-lg shadow-md hover:scale-90 justify-center md:p-3 bg-gray-300 " href="/customers/new/details">Add Customer</Link>
                  </div>
                  <div className="hidden md:grid grid-cols-4 bg-slate-400 h-10 items-center rounded-t-lg">
                    <div className="flex gap-2 items-center justify-center h-full border-white"><h1>Name</h1><FaChevronDown/></div>
                    <div className="flex gap-2 items-center justify-center h-full border-l border-white"><h1>Surname</h1><FaChevronDown/></div>
                    <div className="flex gap-2 items-center justify-center h-full border-l border-white"><h1>Cell Number</h1><FaChevronDown/></div>
                    <div className="flex gap-2 items-center justify-center h-full border-l border-white"><h1>Action</h1><FaChevronDown/></div>
                  </div>
                    { customers.length > 0 ? <Table/> : <EmptyTable/>}
                </div>
            </div>
        </div>
        );
};