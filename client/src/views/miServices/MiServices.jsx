import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getServicesByUser, getService, deleteService, getData } from '../../Redux/actions'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import NotFound from './NotFound';

const MiServices = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getServicesByUser());
      dispatch(getData())
    }, [])
    
    const services = useSelector((state) => state.userServices)

    const handleDelete = (id) => {
      Swal.fire({
        icon: 'warning',
        title: 'Delete Service',
        text: 'Are you sure you want to delete this service',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteService(id))
        }
      })
    }
    
    const handleEdit = (id) => {
      dispatch(getService(id))
  }  

  return (
    
    <div className="bg-slate-400 w-full h-screen p-20 flex flex-col items-center justify-center gap-5">
    <div className='container w-full mx-auto flex items-center justify-center'>
    {services && services.length > 0 ? (
      <table className='bg-slate-100 w-full'>
        <thead className=''>
          <tr className=''>
            <th className='border border-gray-400 h-auto w-auto py-4'>Type Service</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Name Service</th>
            <th className='border border-gray-400 h-auto w-auto py-4'>Price</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody className='w-full'>
          {services.map((serv) => (
          <tr key={serv.id}>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>{serv.typeServices}</td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto cursor-pointer text-center hover:bg-slate-600 hover:text-white' >
              {serv.name}
            </td>
            <td className='border border-gray-400 px-4 py-2 h-auto w-auto text-center'>
                <p>${serv.price}</p>
            </td>
            <td className="flex items-center gap-2 justify-center w-full py-2">
              <NavLink to={`/editService/${serv.id}`}> 
                <button onClick={() => handleEdit(serv.id)} className="bg-blue-500 w-[100px] rounded py-1 text-white">edit</button>
              </NavLink>
                <button onClick={() => handleDelete(serv.id)} className="bg-red-500 w-[100px] rounded py-1 text-white">delete</button>
            </td>
          </tr>
          ))}
        </tbody>
    </table>

    ) : (
      <NotFound />
    )}

  </div>
  </div>
  )
}

export default MiServices