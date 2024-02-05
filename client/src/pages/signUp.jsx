import React from 'react';
import {Link} from 'react-router-dom';
export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-8'>SignUp</h1>
      
      <form className="flex flex-col gap-4 ">
        <input
          type='text'
          placeholder='UserName'
          className='border p-3 rounded-lg'
          id='username'
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='password'
        />
        <button type='submit' className='bg-blue-300 text-blue p-3 rounded-lg uppercase hover:opacity-98 disabled:opacity-80 '>
          Sign Up
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>
          Having account 
          <Link to ={"/signin"}>
            <span className='text-blue-700'> Sign In</span>
           </Link>
        </p>
      </div>
    </div>
  );
}
