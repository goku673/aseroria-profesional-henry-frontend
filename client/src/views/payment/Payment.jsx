import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { removeAll } from '../../Redux/actions';
const URL_BASE = import.meta.env.VITE_URL_BASE;
initMercadoPago(import.meta.env.VITE_MP_SECRET);

const Payment = () => {
  const items = useSelector((state) => state.items);
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const itemsMapped = items.map((item) => ({
    item_id: item.id,
    name: item.name,
    price: item.price,
    quantity: 1,
    seller_id: item.user_id,
    totalAmount: totalPrice,
  }));

  const handleClick = () => {
    const token = localStorage.getItem('token');
    const config = { headers: { Authorization: ` Bearer ${token}` } };
    axios
      .post(`${URL_BASE}/orderMP/`, itemsMapped, config)
      .then((response) => {
        return response.data.id;
      })
      .then((preference) => {
        window.open(preference, '_blank', 'width=1300,height=830');
      })
      .then(() => {
        dispatch(removeAll());
        navigate('/allServices');
      })
      .catch((error) => {
        console.error(error, 'ACA ERROR');
      });
  };

  const handleChange = () => {
    Swal.fire({
      title: 'Are you sure to cancel the payment?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Yes',
      cancelButtonColor: 'No',
      showCancelButton: true,
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/allServices');
        dispatch(removeAll());
      }
    });
  };

  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
      <div className='bg-white mx-auto w-full p-10 flex flex-col h-[800px] mt-40'>
        <div className='w-3/4 h-[600px] rounded bg-slate-400 mx-auto shadow-md flex items-center justify-center flex-col py-2'>
          {items.map((item) => (
            <div
              key={item.id}
              className='flex items-center justify-around w-3/4 border rounded bg-gray-200 py-2 my-1'
            >
              <div className='flex'>
                <div className='flex gap-2 items-center'>
                  <span className='font-medium'>{item.name}</span>
                </div>
                <div className='flex text-center px-2 w-[600px]'>
                  <span className='italic'>{item.description}</span>
                </div>
              </div>
              <div className='flex'>
                <span>$ {item.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col h-[700px] w-1/2 mx-auto items-center justify-center py-2 my-10'>
          <div className='flex items-center justify-around w-full mx-auto gap-4'>
            <button
              className='bg-green-600 w-[120px] rounded py-2 text-white shadow-md hover:bg-green-500'
              onClick={handleClick}
            >
              Pay
            </button>
            <button
              onClick={handleChange}
              className='bg-red-600 px-4 py-2 rounded shadow-md hover:bg-red-500 text-white w-[120px] text-center'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
