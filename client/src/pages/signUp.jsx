import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setLoading(false);
      navigate('/sign in');
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup.');
      setLoading(false);

    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-8'>SignUp</h1>

      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input
          type='text'
          placeholder='UserName'
          className='border p-3 rounded-lg'
          id='username'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='Email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          type='submit'
          className='bg-blue-300 text-blue p-3 rounded-lg uppercase hover:opacity-98 disabled:opacity-80 '
        >
          {loading ? 'Loading.....' : 'Sign Up'}
        </button>
      </form>
      {error && <p className='text-red-500 mt-2'>{error}</p>}
      <div className='flex gap-2 mt-5'>
        <p>
          Having an account{' '}
          <Link to={'/signin'}>
            <span className='text-blue-700'>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
