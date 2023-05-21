import { CgMenuGridO } from 'react-icons/cg'
import {  AiOutlineUser } from 'react-icons/ai'

function Navbar() {
  return (
    <header className='px-3 py-2 flex justify-end'>
      <nav className='flex flex-row gap-3 items-center'>
            <a className="text-[.9rem] text-gray-700 hover:underline" href="#">Gmail</a>
            <a className="text-[.9rem] text-gray-700 hover:underline" href="#">Images</a>
            <a href="#">
                <CgMenuGridO size={25}/>
            </a>
            <div className='w-9 h-9 text-white bg-green-800 rounded-full flex items-center cursor-pointer justify-center'>
                <AiOutlineUser/>
            </div>
      </nav>
    </header>
  )
}

export default Navbar
