'use client'
import { data } from 'autoprefixer';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';


export default function CustomerDetails() {
  
  const router = useRouter();
  const {id} = router.query;
  console.log(router.query)
  const [customer, setCustomer] = useState(null);

    useEffect(() => {
    fetch(`http://localhost:3000/customers/${router.query.customerId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCustomer(data);
      });
    }, [])
      //console.log(customer)
      
      if (!customer){
        return (<p>Not found</p>)
      }
    

  return(
    <div className='p-10 flex flex-col flex-wrap my-40'>
      <div>
          <FaUserAlt className= "text-8xl mb-10"/>
      </div>
      <div className='flex flex-col gap-3'>
        <h1 className='text-4xl'>Name: {customer.firstName} {customer.surname}</h1>
        <h1>Cell number: {customer.cell} </h1>
        <h1>Physical Address: {customer.physicalAddress}</h1>
        <h1>Postal Address: {customer.postalAddress} </h1>
        <h1>Comments: {customer.comment} </h1>
      </div>
    </div>
  )
}