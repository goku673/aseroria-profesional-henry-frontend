import { useState } from "react"
import validationsAdmin from "./validations"
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'


const AdminLogin = () => {

  const navigate = useNavigate()

  const [admin, setAdmin] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const handleData = (event) => {
    setAdmin({
      ...admin,
      [event.target.name] : event.target.value,
    })
    setErrors(validationsAdmin({
      ...admin,
      [event.target.name] : event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(admin.email === '' || admin.password === ''){
      Swal.fire({
        title: 'Error',   
        text: 'Please fill in all fields',
        icon: 'error'
      })
      return
    }

    const validationsError = validationsAdmin(admin)
    setErrors(validationsError)

    if(Object.keys(validationsError).length === 0){
      Swal.fire({
        title:'Welcome!',
        icon: 'success'
      }).then(() => {
        navigate('/adminHome')
      })
    }
    console.log(admin);
  }

  return (
    <div className="bg-slate-400 w-full h-screen flex items-center justify-center px-40">
      <div className="w-1/3 flex items-center justify-center h-screen flex-col gap-2 text-slate-950">
        <span className="material-symbols-outlined">deployed_code</span>
        <p className="font-medium italic text-slate-950">Panel admin</p>
      </div>
        <form onSubmit={handleSubmit} className="shadow-lg bg-slate-500 flex flex-col justify-center items-center w-1/2 mx-auto h-[800px]">
          <div className="flex flex-col h-40 mx-auto w-1/2">
              <label className="my-2 text-white font-medium italic">Email</label>
              <input
              name='email'
              value={admin.email}
              onChange={handleData}
              type="email" className="px-2 my-2 py-2 rounded bg-white w-full" />
              {errors.email && <span className="text-yellow-300">{errors.email}</span>}
          </div>
          <div className="flex flex-col h-40 mx-auto w-1/2">
              <label className="my-2 text-white font-medium italic">Password</label>
              <input
              name='password'
              value={admin.password}
              onChange={handleData}
              type="password" className="px-2 my-2 py-2 rounded bg-white w-full" />
              {errors.password && <span className="text-yellow-300">{errors.password}</span>}
          </div>
          <button className="bg-slate-900 w-[180px] text-white py-2 rounded uppercase hover:bg-slate-800">login</button>
        </form>
    </div>
  )
}

export default AdminLogin