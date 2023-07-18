import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllUsers, isAdminChange } from "../../../Redux/actions"

const AdminUsers = () => {

  const dispatch = useDispatch()
  const users = useSelector((state) =>  state.allUsers)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  
  const handleAdminChange = (userId, value) => {
    const updateUser = {...users.find((user) => user.id === userId), isAdmin: value === 'true'}
    dispatch(isAdminChange(updateUser))
  }
  
  


  return (
    <div className="bg-slate-300 w-full h-screen p-20 flex flex-col items-center justify-center gap-5">
      <div className='container w-full mx-auto flex items-center justify-center shadow-lg'>
        <table className='bg-slate-100 w-full'>
          <thead className=''>
            <tr className=''>
              <th className='border border-gray-400 h-auto w-auto py-4'>Profile</th>
              <th className='border border-gray-400 h-auto w-auto py-4'>Name</th>
              <th className='border border-gray-400 h-auto w-auto py-4'>isAdmin</th>
            </tr>
          </thead>
          <tbody className='w-full'>
          {users.map((user) => (
            <tr key={user.id}>
              <div className='flex items-center justify-center'>
                <img className='my-2 w-[50px] h-[50px] mx-auto text-center rounded-full' src={user.profilePict} />
              </div>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white'>
                <NavLink to='/adminUsers'>{user.name}</NavLink>
              </td>
              <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
              <select className='w-full h-full text-center px-2'
                    value={user.isAdmin}
                    onChange={(e) => handleAdminChange(user.id, e.target.value)}
                    >
                      <option value={true} selected={user.isAdmin}>true</option>
                      <option value={false} selected={user.isAdmin}>false</option>
                    </select>
              </td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
    </div>
  )
}

export default AdminUsers