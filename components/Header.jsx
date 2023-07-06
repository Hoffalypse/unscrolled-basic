import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
    <div className="text-3xl  font-bold italic">Unscrolled</div>
    <div className="space-x-4">
        <Link href='/' className='hover:text-white text-bold'>
          Home
        </Link>
         <Link href="/questions" className='hover:text-white text-bold'>
          Questions
        </Link>
        <Link href="/results" className='hover:text-white text-bold'>
          Results
        </Link>
        <Link href="/students" className='hover:text-white text-bold'>
          Students
        </Link>
    </div>
  </header>

  )
}

export default Header
