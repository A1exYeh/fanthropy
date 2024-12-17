import LoginForm from '../../components/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <>
      <div className='flex min-h-screen flex-col items-center justify-center bg-black'>
        <div className='gradient-blue absolute z-[0] h-full w-full opacity-85'>
          "TEST"
        </div>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
