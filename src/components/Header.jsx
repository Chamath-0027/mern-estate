import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Garbage</span>
        <span className='text-slate-700'>Manager</span>
      </h1>
    </Link>
      <form className='flex items-center'>
          <input 
            type="text" 
            placeholder='Search...' 
            className="border rounded-l p-2 focus:outline-none" 
          />
          <button 
            type="submit" 
            className="bg-slate-300 rounded-r p-2 focus:outline-none"
          >
            <FaSearch className='text-slate-500' />
          </button>
        </form>
        <ul className='flex gap-4'>
        <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
       </Link>
       
       <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
       </Link>
       
       <Link to='/signin'>
             <li className='text-slate-700 hover:underline'>Sign in</li>
       </Link>
        </ul>
    </div>
  </header>
  )
}
