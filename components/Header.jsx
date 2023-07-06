import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
    <div className="text-3xl  font-bold italic">Unscrolled</div>
    <div className="space-x-4">
      {/* <button className="px-4 py-2 bg-none rounded">
        Questions
      </button>
      <button className="px-4 py-2 bg-none rounded">
        Results
      </button>
      <button className="px-4 py-2 bg-none  rounded">
        Students
      </button> */}
         <Link href="/questions">
          Questions
        </Link>
        <Link href="/results">
          Results
        </Link>
        <Link href="/students">
          Students
        </Link>
    </div>
  </header>

  )
}

export default Header
