import { useEffect, useState } from "react"
import validationsEdit from "./validations"
import { useDispatch, useSelector } from "react-redux"
import { personalUserData, editUser } from "../../Redux/actions"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);
  
  const [edit, setEdit] = useState({
    name: '',
    password: '',
    repeatPassword: '',
    profilePict: null
  })

  const [errors, setErrors] = useState({
    name: '',
    password: '',
    repeatPassword: '',
    profilePict: null,
  });
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token === null) {
      navigate('/home')
    }
  }, [])
  

  
  useEffect(() => {
    dispatch(personalUserData());
    setEdit({
      ...edit,
      name: user.name,
    });
  }, []);

  const handleChange = (event) => {
    setEdit({
      ...edit,
      [event.target.name]: event.target.value,
    })
    setErrors(validationsEdit({
      ...edit,
      [event.target.name]: event.target.value,
    }))
  }

  const handleFile = (event) => {
    const file = event.target.files[0]
    setEdit({
      ...edit,
      profilePict: file
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validationsEdit(edit);

    console.log(edit, 'edit');
    console.log(errors, 'errors');
    if(Object.keys(formErrors).length > 0){
      Swal.fire({
        title: 'empty fields',
        icon: 'error',
        confirm: 'acept'
      })
      return;
    };

    dispatch(editUser(edit));
    
    setEdit({
      ...edit,
      password: '',
      repeatPassword: '',
      profilePict: null
    });

    Swal.fire({
      title: 'Success',
      text: 'El Perfil fue editado!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };



  return (
    <div className="w-full bg-white h-screen flex items-center justify-center">
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col items-center justify-center w-1/2"
      >

        <span className='font-bold text-slate-950 w-[200px] pl-3 py-2 uppercase'>
          Edit User
        </span>
        
        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>name</label>
          <input
          name='name'
          value={edit.name}
          onChange={handleChange}
          className="bg-gray-300 w-full py-2 rounded pl-2" placeholder="name..." type='text' />
           {errors.name && (<div 
              className="flex ml-1 gap-1 text-red-600 mt-1">
              <span class="material-symbols-outlined">error</span>
              {errors.name}
            </div>)}
        </div>

        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>password</label>
          <input
          name='password'
          value={edit.password}
          onChange={handleChange}
          className="bg-gray-300 w-full py-2 rounded pl-2" 
          placeholder="password..." 
          type='password' />
           {errors.password && (<div 
              className="flex ml-1 gap-1 text-red-600 mt-1">
              <span class="material-symbols-outlined">error</span>
              {errors.password}
            </div>)}
        </div>

        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>repeat password</label>
          <input
          name='repeatPassword'
          value={edit.repeatPassword}
          onChange={handleChange}
          className="bg-gray-300 w-full py-2 rounded pl-2" 
          placeholder="repeat password..." 
          type='password' />
          {errors.repeatPassword && (<div 
              className="flex ml-1 gap-1 text-red-600 mt-1">
              <span class="material-symbols-outlined">error</span>
              {errors.repeatPassword}
            </div>)}
        </div>

        <div className="flex flex-col items-left w-1/2 h-[110px]">
          <label>picture</label>
          <input
          name='picture'
          onChange={handleFile}
          className="bg-gray-300 w-full py-2 rounded pl-2" 
          type='file' />
           {errors.picture && (<div 
              className="flex ml-1 gap-1 text-red-600 mt-1">
              <span class="material-symbols-outlined">error</span>
              {errors.picture}
            </div>)}
        </div>

        <button type="submit" className="shadow-lg bg-gray-500 w-[200px] py-2 rounded uppercase text-white font-bold mx-auto mt-10 hover:bg-gray-800">edit profile</button>
      </form>
    </div>
  )
}

export default EditProfile