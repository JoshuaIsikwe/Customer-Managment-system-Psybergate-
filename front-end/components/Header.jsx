import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo1 from '@/public/images/Logo.png'
import logo2 from '@/public/images/Logo-2.png'

const Header = () => {
  return (
    <div className='h-20 flex items-center bg-slate-400 p-4 justify-between shadow-lg'>
      <div>
        <Link href='/customers'>
          <Image priority alt='Pysbergate solutions' width={50} src={logo1} className=' flex md:hidden'/>
          <Image priority alt='Pysbergate solutions' width={250} src={logo2} className='hidden md:flex'/>
        </Link>
      </div>
      <div className='flex items-center gap-10'>
        <Link href='/customers' >All Customers</Link>
        <Link href='/customers/new/details' className=' hover:scale-105 p-2 rounded-lg hover:border-gray-400 hover:shadow-md hover:bg-gray-300'>Add Customer</Link>
      </div>
    </div>
  )
}

export default Header