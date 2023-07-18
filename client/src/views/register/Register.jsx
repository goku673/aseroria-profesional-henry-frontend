import React, { useState } from 'react'
import bgd from '../../assets/background.jpg'
import goog from '../../assets/iconGoogle.png'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import validationsRegister from './validationsRegister'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Redux/actions'



const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    profilePict: "https://w7.pngwing.com/pngs/802/786/png-transparent-google-account-google-search-customer-service-google-logo-login-button-blue-sphere-car-rental-thumbnail.png"
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const handleChange = (event) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    })
    setErrors({
      ...errors,
      [event.target.name]: validationsRegister({
        [event.target.name]: event.target.value
      })[event.target.value]
    })
  }


 
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validationsRegister(register);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      Swal.fire({
        title: 'Must complete all fields',
        icon: 'error',
        confirm: 'Accept',
      });
      return;
    }

    dispatch(signUp(register))
    .then(() => {
        Swal.fire({
          title: 'You have been registered!',
          icon: 'success',
          confirmButtonText: 'Accept',
          customClass: {
            confirmButton: 'bg-red-500 text-white',
          },
        }).then(() => {
          navigate('/');
        });
      })
      .catch((error) => {
        console.log("aqui esta el error de catch",error);
        Swal.fire({
          title: 'Error',
          text: error.response?.data?.error || 'An error occurred during registration.',
          icon: 'error',
          confirmButtonText: 'Accept',
        });
      });
  };

  return (
    
    <div className="flex flex-col w-full h-screen items-center justify-center bg-cover bg-center" style={{backgroundImage:`url(${bgd})`}}>
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center mx-auto w-[500px] bg-white h-[650px] rounded-md rounded-tr-[100px]">
      <div className="w-full ml-10 flex items-start flex-col gap-4">
    
          <p className="font-bold uppercase ml-6">Register</p>
          <div className="flex flex-col">
              <input name='name'
              value={register.name}  
              onChange={handleChange}         
              className="ml-6 bg-gray-200 der-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black"
              placeholder="name..."
              type="text" />
              {errors.name &&  (
                    <div className="text-red-600 absolute ml-[340px] mt-[8px]">
                      <span className="material-symbols-outlined">error</span>
                    </div>
              )}
          </div>

          <div className="flex flex-col">
              <input name='email'
              value={register.email}
              onChange={handleChange}              
              className="ml-6 bg-gray-200 der-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black"
              placeholder="email..."
              type="text" />
              {errors.email &&  (
                    <div className="text-red-600 absolute ml-[340px] mt-[8px]">
                      <span className="material-symbols-outlined">error</span>
                    </div>
              )}
          </div>

          <div className="flex flex-col">
              <input
              name='password'
              value={register.password}
              onChange={handleChange}   
              className="ml-6 bg-gray-200 border border-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black"
              placeholder="password..."
              type="password" />
              {errors.password &&  (
                    <div className="text-red-600 absolute ml-[340px] mt-[8px]">
                      <span className="material-symbols-outlined">error</span>
                    </div>
              )}
          </div>

          <div className="flex flex-col">
              <input
              name='repeatPassword'
              value={register.repeatPassword}
              onChange={handleChange}   
              className=" ml-6 bg-gray-200 border border-gray-300 w-[350px] h-[35px] p-3 py-5 rounded text-black"
              placeholder="repeat password..."
              type="password" />
              {errors.repeatPassword &&  (
                    <div className="text-red-600 absolute ml-[340px] mt-[8px]">
                      <span className="material-symbols-outlined">error</span>
                    </div>
              )}
          </div>


        <div >
          <button type="submit" className="ml-6 shadow uppercase bg-gray-700 w-[200px] py-3 text-white rounded">register</button>
        </div>
        
      </div>
        <div className="flex items-center flex-col gap-3 mt-10 w-full">
          <p>or <span className='font-bold underline mx-1'>Register </span>with</p>
        </div>
        <div className='flex flex-col items-center justify-center mx-auto mt-12'>
            <img className="w-[40px]" src={goog} />
            <span className="font-bold uppercase mt-4">logo</span>
        </div>

    </form>
  
</div>
  )
}

export default Register