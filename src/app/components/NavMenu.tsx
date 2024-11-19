import React from 'react'

const NavMenu = () => {
  return (
    <div className='mx-auto flex max-w-8xl items-center justify-between lg:px-8 bg-NavBackground'>
      <ul className='flex text-white justify-between w-full'>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3 '>HOME</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3 '>NEWS</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3 '>TRENDING</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3 '>INDIA</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3 '>INTERNATIONAL</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3'>BRAND</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3'>ADVERTISEMENT</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3'>BE A PARTNER</li>
        <li className='ml-2 cursor-pointer hover:bg-orange-500 p-3'>GET IN TOUCH</li>
      </ul>
    </div>
  )
}

export default NavMenu
