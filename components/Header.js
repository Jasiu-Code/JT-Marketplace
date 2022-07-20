import Image from 'next/image';
import Logo from '../public/Logo.png';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 w-full grid grid-cols-3 bg-slate-400 shadow-md p-5 md:px-10'>
      {/* LEFT */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src={Logo}
          width='200px'
          height='200px'
          objectPosition='left'
          alt='Just time logo'
          priority
        />
      </div>
      {/* MIDDLE */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm '>
        <input
          className='pl-2 bg-transparent flex-grow outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='Search'
        />
        <SearchIcon className='hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex md:mx-2' />
      </div>
      {/* RIGHT */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer text-white'>
          Post your offer
        </p>
        <GlobeAltIcon className='h-6 cursor-pointer text-white' />
        <div className='flex items-center space-x-2 border-2 rounded-full text-white'>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer ' />
        </div>
      </div>
    </header>
  );
}

export default Header;
