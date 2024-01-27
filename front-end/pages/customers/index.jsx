'use client'
import { FaChevronDown } from "react-icons/fa";
import {useState, useEffect} from "react";
import Link from "next/link";
import Lottie from "lottie-react";
import unavailable from "@/public/images/Animation - 1706087584140.json"
import { useRouter } from "next/navigation";

export default function Customers() { 
    const router = useRouter();
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3000/customers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, [])
    console.log({ customers });

    //Success message
    useEffect(() => {
      if(router.query?.form === 'submited')
       {
         alert('Customer was successfully');
         router.replace('/customers', undefined, { shallow: true });
       }
     
     }, [router.query]);

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
                    { customers.length>0?
            customers.map((e) => (

                <div key={e.id} className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-4  border border-gray-100">
                    <div className="border-gray-100 text-lg flex text-center justify-center"><h1 className="text-lg">{e.firstName}</h1></div>
                    <div className="border-gray-100 text-lg flex text-center justify-center">{e.surname}</div>
                    <div className="border-gray-100 text-lg flex text-center justify-center">{e.cell}</div>
                    <div className="border-gray-100 text-lg flex text-center justify-center"> <Link className="text-base text-green-600 font-bold hover:underline" href={`/customers/${e.id}`}>Read more</Link></div>
                </div>
                )): <div className="flex flex-col justify-center items-center m-auto h-80 w-3/5">
                  <h1 className="text-4xl">No customer data available :(</h1>
                  <Lottie animationData={unavailable}/>
                </div>
            }
                </div>
            </div>
        </div>
        );
};