import Lottie from 'lottie-react';
import Link from 'next/link';
import React from 'react'
import {useState, useEffect} from "react";
const Table = () => {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
    fetch('http://localhost:3000/customers')
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.customers);
      });
  }, []);

  return (
    <div>
        { customers.map((e) => (

            <div key={e.id} className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:grid-rows-4  border border-gray-100">
                <div className="border-gray-100 text-lg flex text-center justify-center"><h1 className="text-lg">{e.firstName}</h1></div>
                <div className="border-gray-100 text-lg flex text-center justify-center">{e.surname}</div>
                <div className="border-gray-100 text-lg flex text-center justify-center">{e.cell}</div>
                <div className="border-gray-100 text-lg flex text-center justify-center"> <Link className="text-base text-green-600 font-bold hover:underline" href={`/customers/${e.id}`}>Read more</Link></div>
            </div>
))
            }
    </div>
  )
}

export default Table