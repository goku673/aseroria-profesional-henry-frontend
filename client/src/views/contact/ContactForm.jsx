import { useState } from "react"
import validationsContact from "./validationsContact"
import Swal from "sweetalert2";
import {useDispatch} from 'react-redux';
import  {sendContact} from '../../Redux/actions';
const ContactForm = () => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    setErrors(validationsContact({
      ...form,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validationsContact(form)
    if(Object.keys(formErrors).length > 0){
      Swal.fire({
        title: 'empty fields',
        icon: 'error',
        confirm: 'acept'
      })
      return;
    }
    setForm({
      name: '',
      email: '',
      message: '',
    })
    console.log("mi formulario",form);
    dispatch(sendContact(form))
    .then(() => {
          Swal.fire({
              title: 'Success',
              text: 'Your message has been sent!',
              icon: 'success',
              confirmButtonText: 'OK',
     })
    })
    .catch ( (error) => {
       Swal.fire({
         title : 'Error',
         text : 'invalid!',
         icon : 'error',
         confirmButtonText : 'Accept',
       })
    })
  
 }

  return (
    <>
    <div id='contact' className='flex flex-col items-center justify-center h-screen p-10 mt-20'>
      <div className="flex flex-col items-center justify-center mt-10">
            <p className="font-medium">Contact us for more information</p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white rounded-md rounded-tr-[100px] flex flex-col w-3/4 items-center justify-center h-screen">
        <div className="items-center flex flex-col w-1/2 py-10">
          <div className="flex flex-col w-[500px] h-20">
            <input
            name='name'
            value={form.name}
            onChange={handleChange}
            className="bg-gray-200 w-[500px] py-2 pl-2 rounded" placeholder="name..." type="text" />
            {errors.name && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.name}</div>)}
          </div>

          <div className="flex flex-col w-[500px] h-20">
            <input
            name='email'
            value={form.email}
            onChange={handleChange}
            className="bg-gray-200 w-[500px] py-2 pl-2 rounded" placeholder="email..." type="email" />
            {errors.email && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span class="material-symbols-outlined">error</span>{errors.email}</div>)}
          </div>

          <div className="flex flex-col w-[500px] h-[250px]">
            <textarea
            name='message'
            value={form.message}
            onChange={handleChange}
            className="bg-gray-200 w-[500px] h-[200px] py-2 pl-2 rounded" placeholder="message..." />
            {errors.message && (<div className="flex ml-1 gap-1 text-red-600 mt-1"><span className="material-symbols-outlined">error</span>{errors.message}</div>)}
          </div>
          <button type="submit" className="w-[200px] bg-blue-950 shadow-lg text-white rounded py-2 font-bold hover:bg-gray-300 hover:text-blue-950">Send</button>
          <span className="material-symbols-outlined mt-20">deployed_code</span>
        </div>
      </form>
    </div>
    </>
  )
}

export default ContactForm