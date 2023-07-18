import Swal from 'sweetalert2';
import bgd from '../../assets/background.jpg';
import goog from '../../assets/iconGoogle.png';
import validations from './validations';
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { handleLogIn } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../Redux/actions';

const LandingLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validations({
        ...data,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validations(data);
    if (Object.keys(formErrors).length > 0) {
      Swal.fire({
        title: 'empty fields',
        icon: 'error',
        confirm: 'acept',
      });
      return;
    }
    dispatch(signIn(data))
      .then(() => {
        Swal.fire({
          title: 'Welcome!',
          icon: 'success',
          confirmButtonText: 'Accept',
          customClass: {
            confirmButton: 'bg-red-500 text-white',
          },
        }).then(() => {
          navigate('/home');
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: error.response?.data?.error || 'invalid credentials',
          icon: 'error',
          confirmButtonText: 'Accept',
        });
      });
  };

  const handleClickLogin = (event) => {
    event.preventDefault();
    new Promise((resolve, reject) => {
      dispatch(handleLogIn());
      resolve();
    })
      .then(() => {
        navigate('/home');
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Martin, por favor, arregla el inicio de sesión.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      });
  };

  return (
    <div
      className='flex flex-col w-full h-screen items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${bgd})` }}
    >
      <form
        onSubmit={handleSubmit}
        className='drop-shadow-lg flex flex-col justify-center items-center mx-auto w-[500px] bg-white h-[650px] rounded-md rounded-tr-[100px]'
      >
        <div className='h-[300px] w-full flex items-start justify-center flex-col'>
          <p className='font-bold uppercase ml-10'>login</p>
          <div className='my-4 flex flex-col ml-10'>
            <input
              name='email'
              value={data.email}
              onChange={handleChange}
              className='bg-gray-200 der-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black'
              placeholder='email...'
              type='email'
            />
            {errors.email && (
              <div className='text-red-600 absolute ml-80 mt-[8px]'>
                <span className='material-symbols-outlined'>error</span>
              </div>
            )}
          </div>

          <div className='flex flex-col ml-10'>
            <input
              name='password'
              value={data.password}
              onChange={handleChange}
              className='bg-gray-200 der-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black'
              placeholder='password...'
              type='password'
            />
          </div>
          <div className='flex flex-col ml-10 mt-4'>
            <button
              type='submit'
              className='drop-shadow-md uppercase bg-gray-700 w-[200px] py-3 text-white rounded mt-2'
            >
              login
            </button>
          </div>
        </div>
        <div className='flex items-center justify-center gap-3 mt-6 w-full py-2'>
          <p className='font-light mt-1'>You don´t have account?</p>
          <Link to='/register'>
            <span className='ml-1 font-bold cursor-pointer underline'>
              Register
            </span>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center mx-auto mt-2'>
          <p className='py-4'>or Login with</p>
        </div>
        <button
          onClick={handleClickLogin}
          className='bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex items-center'
        >
          <img className='w-[40px]' src={goog} />
        </button>
      </form>
    </div>
  );
};

export default LandingLogin;
