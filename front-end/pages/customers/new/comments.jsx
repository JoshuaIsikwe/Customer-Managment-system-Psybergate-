'use client'
import React, { useContext, useRef } from 'react'
import Link from 'next/link'
import AppContext from '@/components/AppContext';
import { useRouter } from 'next/navigation';

export default function comments() {
    const context = useContext(AppContext)
    const router = useRouter()
    const comment= useRef(); 


function handleFinalSubmit(){
  
  changeCustomerComment();
  handleSubmit();
}

    //Stores states with context api
    function changeCustomerComment() {
        context.setComment(comment.current.value)
    }
    //Make POST request to Api
    async function handleSubmit (){

      
      const newCustomer = {
        firstName: context.firstName,
        surname: context.surname,
        cell: context.cell,
        physicalAddress: context.physicalAddress,
        postalAddress: context.postalAddress,
        comment: context.comment,
      };console.log({newCustomer})
      try {
        const response = await fetch("http://localhost:3000/customers", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCustomer),
          mode: 'cors'
        });
        const result = await response.json();
        alert("Customer was added to database successfully :)")
        console.log("Success:", result); router.push({ pathname: "/customers", query: { form: "submitted" } });
      } catch (error) {
        console.error("Error:", error);
      }
        
    }
    return (
        <div className='md:p-10 text-3xl'>
          <div className=' flex flex-col'>
            <form action="" className='flex flex-col items-left w-full md:w-4/5   justify-between p-10' >
              <label className='text-xl text-left font-bold'>Additional comments</label>
              <textarea id="" cols="30" rows="10" className='border' name='comment' ref={comment}/>
              <div className='flex p-4 justify-between'>
                <Link href='/customers/new/address' className='bg-gray-400 text-lg rounded px-3 text-center text-white'>back</Link>
                <Link href='/customers/new/comments' onClick={handleFinalSubmit}   className='bg-gray-400 text-lg rounded px-3 text-center text-white'>Submit</Link>
                </div>
            </form>
          </div>
        </div>
    )
  }


