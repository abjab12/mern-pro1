
import  { Link } from "react-router-dom"
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-sm'>
      <div className='flex justify-between items-center max-w-7xl mx-auto p-6'>
      <Link to='/'>
      <h1 >
        <span className='text-slate-500'>Abraham</span>
        <span className='text-slate-700'>Estate</span>
      </h1>
      </Link>
      <form className='bg-slate-120 p-3 rounded-lg flex items-center'>
      <input type='text' placeholder='Search..'></input>
      </form>
     
      <ul className='flex gap-4 items-center '>
        <Link to='/Home'>
        <li className='hidden sm:inline text-slate-700 hover:underline '>Home</li>
        </Link>
        <Link to ='/About'>
        <li className='hidden sm:inline text-slate-700 hover:underline '>About</li>
        </Link>
        <Link to ='/signin'>
        <li className=' text-slate-700 hover:underline '>Sign in</li>
        </Link>
        
      </ul>
      </div>
    </header>
  );
}
