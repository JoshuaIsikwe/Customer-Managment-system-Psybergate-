'use client'
import AppContext from '@/components/AppContext'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext, useRef, useState } from 'react'

const address = () => {

  const context = useContext(AppContext)
  const router = useRouter();

  const [physicalAddress, setPhysicalAddress] = useState(''); 
  const [postalAddress, setPostalAddress] = useState('');
  const physicalAddress1 = useRef(null)
  const physicalAddress2 = useRef(null)
  const physicalAddress3 = useRef(null)
  const physicalAddress4 = useRef(null)
  const postalAddress1 = useRef(null)
  const postalAddress2 = useRef(null)
  const postalAddress3 = useRef(null)
  const postalAddress4 = useRef(null)
  const [errors, setErrors] = useState({});
  
//Stores states globally
function changeCustomerAddress() {
  context.setPhysicalAddress(`${physicalAddress1.current.value}${physicalAddress2.current.value},${physicalAddress3.current.value},${physicalAddress4.current.value}`)
  context.setPostalAddress(`${postalAddress1.current.value}${postalAddress2.current.value},${postalAddress3.current.value},${postalAddress4.current.value}`)
}
function handleNext(){
  try {
      //validateUserDetails();
      changeCustomerAddress();
      router.push('/customers/new/comments');
  } catch (e) {
      console.log({ e });
  }
}

function validateUserDetails(){
  const validationErrors = {};

  if (
    physicalAddress1.current.value=== '' &&
    physicalAddress2.current.value=== '' &&
    physicalAddress3.current.value=== '' &&
    physicalAddress4.current.value=== ''
    ) {
    validationErrors.physicalAddress = 'Address is required';
}
if (
  postalAddress1.current.value=== '' &&
  postalAddress2.current.value=== '' &&
  postalAddress3.current.value=== '' &&
  postalAddress4.current.value=== ''
  ) {
  validationErrors.postalAddress = 'Postal Address is required';
}

  setErrors(validationErrors);
  if(Object.keys(errors).length===0){
      throw new Error('Validation error');
  }
}

  return (
    <div className='md:p-10 h-screen md:h-auto text-3xl'>
      
      <div className=' w-full md:w-4/5 flex flex-col'>
        <form action="" className='flex flex-col items-left w-full justify-between p-10' >
          <label className='text-xl text-left font-bold'>Physical Address</label>
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3' 
            type='text' name='physicalAddress' ref={physicalAddress1} 
          />
          {/*{'Physical Address' in errors && (<p className='text-sm text-red-700'>{errors.physicalAddress1}</p>)}*/}
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3 ' 
            type='text' name='physicalAddress' ref={physicalAddress2} 
          />
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3 ' 
            type='tel' name='physicalAddress' ref={physicalAddress3} 
          />
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3 ' 
            type='tel' name='physicalAddress' ref={physicalAddress4} 
          />
          {'Physical Address' in errors && (<p className='text-sm text-red-700'>{errors.h}</p>)}
          <label className='text-xl text-left font-bold'>Postal Address</label>
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3 ' 
            type='text' name='postalAddress' ref={postalAddress1} 
          />
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3 ' 
            type='text' name='postalAddress' ref={postalAddress2} 
          />
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3 ' 
            type='tel' name='postalAddress' ref={postalAddress3} 
          />
          <input className='border-2 border-gray-400 w-full rounded-lg  mb-3 ' 
            type='tel' name='postalAddress' ref={postalAddress4} 
          />
          {'Postal address' in errors && (<p className='text-sm text-red-700'>{errors.postalAddress}</p>)}
        </form>
        <div className='flex p-4 justify-between'>
          <Link href='/customers/new/details' className='bg-gray-400 text-lg rounded px-3 text-center text-white'>Back</Link>
          <button href="/customers/new/comments" onClick={handleNext} className='bg-gray-400 text-lg rounded px-3 text-center text-white'>Next</button>
        </div>
      </div>
    </div>
  )
}

export default address