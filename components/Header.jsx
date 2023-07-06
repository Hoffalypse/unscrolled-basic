import React from 'react'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-200">
    <div className="text-3xl  font-bold italic">Unscrolled</div>
    <div className="space-x-4">
      <button className="px-4 py-2 bg-none rounded">
        Questions
      </button>
      <button className="px-4 py-2 bg-none rounded">
        Results
      </button>
      <button className="px-4 py-2 bg-none  rounded">
        Students
      </button>
    </div>
  </header>

  )
}

export default Header
