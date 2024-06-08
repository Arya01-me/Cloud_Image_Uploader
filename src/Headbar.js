import { User, User2Icon, UserIcon } from 'lucide-react'
import React from 'react'

function Headbar() {
  return (
    <div className='flex mb-10'>
        <button className='text-black flex-shrink font-bold border-4 rounded-lg w-44 bg-green-700  border-white '>
            LOGIN
        </button>
        <UserIcon className='m-5 h-8 w-8 -ml-11 text-black'/>
      
    </div>
  )
}

export default Headbar