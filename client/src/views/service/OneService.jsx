import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { addToCart, getService } from '../../Redux/actions';
import Swal from 'sweetalert2';
import Review from '../../components/reviews/Reviews'

const OneService = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const copyState = useSelector((state) => state.oneActivity);
  const items = useSelector((state) => state.items);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getService(id));
  }, []);

  const addCart = () => {
    const isItemExist = items.find((item) => item.id === copyState.id);
    const token = localStorage.getItem('token')
    if(!token){
      Swal.fire({
        icon: 'warning',
        title: 'you must login before to buy',
        timer:'2500',
        confirmButtonText: 'ok',
      })
      navigate('/login')
      return;
    }
    if (isItemExist) {
      Swal.fire({
        title: 'The product is already in the cart',
        icon: 'warning',
      });
    } else {
      dispatch(addToCart(copyState));
      Swal.fire({
        title: 'Item added',
        icon: 'success',
      });
    }
  };

  return (
    <>
      <div className='flex items-center px-4 h-screen bg-slate-300 w-full'>
        <div className='bg-white shadow-lg w-3/4 h-3/4 mx-auto rounded flex'>
          <div className='bg-slate-800 w-[30%] h-full flex flex-col items-center justify-between gap-4'>
            <img className='py-4' src={copyState?.files} />
            <div className='flex flex-col items-center mb-20 h-1/2 w-full text-center justify-center'>
              <p className='text-white text-2xl font-bold'>
                Mr. {copyState?.name}
              </p>
            </div>
            <div className='mb-10 text-white'>
              <span class='material-symbols-outlined'>deployed_code</span>
            </div>
          </div>

          <div className='w-[70%] flex items-center px-10'>
            <div className='w-full flex flex-col gap-5'>
              <>
                <p className='h-[10%] text-2xl bg-slate-100 py-2 pl-2 font-semibold'>
                  Service
                </p>
                <p>{copyState?.description}</p>
                <div className='flex gap-4 w-full justify-center'>
                  <p className='italic font-medium'>Hour service</p>
                  <span>${copyState?.price}</span>
                </div>
                <div className='flex mx-auto gap-4'>
                  <button
                    onClick={addCart}
                    className='bg-green-600 rounded w-[150px] py-2 text-white hover:bg-green-700'
                  >
                    Add to cart
                  </button>
                </div>
                <div className='flex flex-row px-4 '>
                  <Review />
                </div>
                <div className='flex gap-10 mx-auto mt-4'></div>
                <div className='mx-auto mt-4'>
                  <NavLink to='/allServices'>
                    <button className='bg-slate-800 rounded w-[150px] py-2 text-white hover:bg-slate-900 '>
                      more services
                    </button>
                  </NavLink>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneService;
