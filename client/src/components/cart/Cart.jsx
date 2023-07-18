import { useSelector, useDispatch } from "react-redux"
import Data from "./Data"
import { NavLink } from "react-router-dom"
import { removeFromCart, removeAll } from "../../Redux/actions"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

const Cart = ({handleCloseCart}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector((state) => state.items)

  const [dataCart, setDataCart] = useState([])
 
  const totalPrice = items.reduce((acc, curr) => acc + curr.price, 0)

  let data = items
  useEffect(() => {
    for(let values in data){
      if(data.hasOwnProperty(values)){
        let val = data[values]
        setDataCart(val)
      }
      break;
    }
  }, [])

  const handleDeleteItem = (itemId) => {
    dispatch(removeFromCart(itemId))
    navigate('/allServices')
    if(items.length === 1){
      handleCloseCart()
    } else {
      return;
    }
  }

  const handleDeleteAll = () => {
    Swal.fire({
      title: 'Are you sure to cancel the payment?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No', 
      showCancelButton: true,
      showCloseButton: true,
      cancelButtonColor: 'red',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeAll());
        navigate('/allServices');
        handleCloseCart();
      }
    });
  };

  return (
    <div className="p-10 fixed right-0 top-0 h-[900px] bg-white shadow-lg w-[60%]">
      <div className="p-4 rounded h-full">

        <div className="flex gap-4 w-full items-center justify-between ">
          <div className="flex gap-4">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p>items in the cart: {items.length}</p>
          </div>
          <button className="bg-slate-800 text-white w-[30px] rounded" onClick={handleCloseCart}>X</button>
        </div>

            <div className="h-[600px] overflow-y-auto mt-8 px-4">
            <Data dataCart={dataCart} handleDeleteItem={handleDeleteItem} items={items} />           
            </div>

          <div className="flex w-full">
            <p className="mx-auto mt-10">Total: {totalPrice}</p>
          </div>

        <div className="flex items-center justify-around w-full mt-10">
          <div className="flex bg-green-600 items-center justify-center gap-2 text-white rounded w-[140px] px-2">
            <span class="material-symbols-outlined">payments</span>
            <NavLink to='/payment'><button onClick={handleCloseCart} className="py-2">go to pay</button></NavLink>
          </div>
          <div className="flex bg-red-600 items-center justify-center gap-2 text-white rounded w-[140px] px-2">
            <span className="material-symbols-outlined">delete</span>
            <button onClick={handleDeleteAll} className="py-2">delete items</button>         
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart