'use client'
import React, { useContext, useState } from 'react'
import AppContext from '@/components/AppContext'
import { useRouter } from 'next/navigation'

const details = () => {

  const [firstName, setName] = useState(''); 
  const [surname, setSurname] = useState(''); 
  const [cell, setCell] = useState(''); 
  const [errors, setErrors] = useState({});

const router = useRouter()
const context = useContext(AppContext)
console.log(errors)

//Stores states globally
function changeCustomerDetails() {
  context.setName(firstName)
  context.setSurname(surname)
  context.setCell(cell)
}
function handleNext(){
  try {
      validateUserDetails();
      changeCustomerDetails();
      router.push('/customers/new/address');
  } catch (e) {
      console.log({ e });
  }
}

function validateUserDetails(){
  const validationErrors = {};

  if (firstName === '') {
      validationErrors.firstName = 'First Name is required';
  }

  if (surname === '') {
      validationErrors.surname = 'Surname is required';
  }

  if (cell === '') {
      validationErrors.cell= 'Cell is required';
  }

  setErrors(validationErrors);
  if(Object.keys(errors).length===0){
      throw new Error('Validation error');
  }
}

  return (
    <div className=' p-2 h-screen md:h-auto md:p-10 text-3xl'>
      <h1>Add Customer - Details</h1>
      <div className='md:w-4/5'>
        <form action="" className='flex flex-col items-left w-full justify-between p-10' >
          <label className='text-xl text-left font-bold'>First Name</label>
          <input className='border-2 border-gray-400 w-full rounded-lg p-2 mb-7 '
            type='text' name='name' value={firstName} onChange={(e) => {firstName: setName(e.target.value)}} 
          />
          {'firstName' in errors && (<p className='text-sm text-red-700'>{errors.firstName}</p>)}
          <label className='text-xl text-left font-bold'>Last Name</label>
          <input className='border-2 border-gray-400 w-full rounded-lg p-2 mb-7 ' 
            type='text' name='surname' value={surname} onChange={(e) => setSurname(e.target.value)} 
          />
          {'surname' in errors && (<p className='text-sm text-red-700'>{errors.surname}</p>)}
          <label className='text-xl text-left font-bold'>Cell phone</label>
          <input className='border-2 border-gray-400 w-full rounded-lg p-2 mb-7 ' 
            type='tel' name='cell' value={cell} onChange={(e) => setCell(e.target.value)} 
          /> 
          {'cell' in errors && (<p className='text-sm text-red-700'>{errors.cell}</p>)}
        </form>
        <div className='px-4 flex justify-end'>
          <button onClick={handleNext} className='px-4 rounded-md border bg-gray-400 text-lg text-white'>
                Next
            </button>
        </div>
      </div>
    </div>
  )
}

export default details