
import { Link, NavLink } from 'react-router-dom'
import img1 from "../assets/images/IMAGE (1).svg"
import { FaMoon } from 'react-icons/fa'


function Navbar({setDarkMode, darkMode}) {
  return (
    <nav className="flex items-center justify-between w-full h-20 px-4 dark:bg-gray-600 dark:text-white">
        <div className='flex space-x-8'>
        <NavLink to={"/"} className="text-lg font-semibold" >Home </NavLink>
       <NavLink to={"/about"} className="text-lg font-semibold ">About</NavLink>
       </div>
       <div className='absolute left-1/2 transform-translate-x-1/2'>
       <Link to={"/"} className=' '>
        <img className='' src={img1} alt="logo" />
    </Link>
       </div>
       <button onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer'>
      <FaMoon />
      </button>
    </nav>
  )
}

export default Navbar