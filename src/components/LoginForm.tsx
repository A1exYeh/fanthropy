import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      alert("Enter valid values");
      return;
    }

    console.log('Form Submitted with: ', { email, password });
    
    navigate('/teams');
  };

  return (
    <>
      <div className='z-[1] flex min-h-[325px] w-1/4 min-w-fit flex-col justify-center rounded-lg border-[1.2px] border-gray-500/20 bg-[#0b0b0c] px-4 py-16 text-center text-[white] shadow shadow-md transition-all lg:w-[18%]'>
        <div className='my-8 flex flex-row justify-center gap-8'>
          <button className='rounded-xl bg-red-600 p-6 hover:bg-red-500'>
            <FaGoogle />
          </button>
          <button className='rounded-xl bg-blue-600 p-6 hover:bg-blue-500'>
            <FaGoogle />
          </button>
        </div>
        <div className='mb-10 text-2xl font-bold md:text-3xl lg:text-3xl'>
          <h1>Sign In</h1>
        </div>
        <form
          id='loginForm'
          onSubmit={handleLogin}
          className='flex flex-col items-center justify-center gap-8 px-4 py-2'
        >
          <div className='max-w-fit text-left text-base md:text-lg lg:text-xl'>
            <input
              value={email}
              name='email'
              type='email'
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              className='rounded border-[1px] border-gray-400 p-2.5 text-black transition-all focus:border-opacity-0 focus:outline-none focus:ring focus:ring-blue-500'
            />
          </div>
          <div className='max-w-fit text-left text-base md:text-lg lg:text-xl'>
            <input
              value={password}
              name='password'
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
              className='rounded border-[1px] border-gray-400 p-2.5 text-black transition-all focus:border-opacity-0 focus:outline-none focus:ring focus:ring-blue-500'
            />
          </div>
          <div className='mx-auto'>
            <button
              type='submit'
              className='rounded-2xl bg-blue-600 px-5 py-3 text-lg hover:bg-blue-500 md:text-xl lg:text-xl'
            >
              Login
            </button>
          </div>
        </form>
        <p className='mt-8'>
          Not Registered? <a href='#'>Sign Up</a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
