import { NavLink } from "react-router-dom"

const NotFound = () => {

  return (
        <div className="flex items-center flex-col my-2">
            <p className="text-2xl text-black font-bold my-4">Services not found</p>
            <NavLink to='/allServices' className="bg-white rounded py-2 text-slate-900 font-bold text-center w-[180px] hover:bg-slate-600 cursor-pointer hover:text-white">
                Back to Services
            </NavLink>
        </div>
  )
}

export default NotFound