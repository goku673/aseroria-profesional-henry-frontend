import { boughtProducts, idReview } from '../../Redux/actions';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom'

const MyShopping = () => {

    const dispatch = useDispatch();
    const shopping = useSelector((state) => state.myShopping);
    const [review, setReview] = useState({
        reviewDescription: 'aaaaa',
        score: 4
    })

    useEffect(() => {
        dispatch(boughtProducts());
    }, []);

    const handleReview = (id) => {
        dispatch(idReview(id));
    };

    console.log(shopping);
    
  return (
    <div className='w-full h-screen bg-slate300 flex items-center justify-center'>
        <table className='w-3/4 shadow-md bg-white text-slate-900 flex items-center justify-center' >
            <thead className='flex justify-center border w-full py-4 text-center ' >
                <tr className='flex gap-[400px]' >
                    <th>Profile</th>
                    <th>Service</th>
                    <th>Price</th>
                    <th>Review</th>
                </tr>
            </thead>
            <tbody className='flex flex-col'> 
                {shopping && shopping.map((service) => 
                <tr className='flex items-center gap-4'>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td><img src={service.photo} /></td>
                    <div onClick={() => handleReview(service.id)}><NavLink className='bg-slate-800 text-white rounded w-[180px] py-2 mx-2' to='/review' >review</NavLink></div>
                </tr>
                )}
            </tbody>
        </table>
    </div> 
    )
}

export default MyShopping