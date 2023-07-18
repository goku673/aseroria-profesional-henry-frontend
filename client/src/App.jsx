import { Form, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from './Redux/actions';
import Home from './components/Home';
import Services from './components/Services';
import OneService from './views/service/OneService';
import Navbar from './components/navbar/Navbar';
import Payment from './views/payment/Payment';
import LandingLogin from './views/login/LandingLogin';
import ContactForm from './views/contact/ContactForm';
import AllServices from './views/services/AllServices';
import EditProfile from './views/edit profile/EditProfile';
import CreateServices from './views/create service/CreateServices';
import Register from './views/register/Register';
import AdminLogin from './views/admin/login/AdminLogin';
import AdminHome from './views/admin/AdminHome';
import AdminNav from './views/admin/login/AdminNav';
import AdminUsers from './views/admin/login/AdminUsers';
import MiServices from './views/miServices/MiServices';
import EditService from './views/edit service/EditService';
import FormReview from './views/service/FormReview';
import Loader from './components/loader/Loader';
import MyShopping from './views/myShopping/MyShopping';
import AdminAllServices from './views/admin/AdminAllServices';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isLoginAdmin = location.pathname === '/adminLogin';
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';
  const myToken = localStorage.getItem('token');

  useEffect(() => {
    const user = localStorage.getItem('user');
    const userData = JSON.parse(user);
    if (userData) {
      dispatch(refreshUser(userData));
    }
  }, [dispatch]);

  return (
    <div className='h-screen flex flex-col'>
      {location.pathname === '/' ? (
        <Home />
      ) : (
        <>
          {!isLoginAdmin 
           && myToken
           && !hideNavbar
           && (isAdminRoute ? <AdminNav /> : <Navbar />)}
          <Routes>
            <Route path='/login' element={<LandingLogin />} />
            <Route path='/home' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/allServices/:id' element={<OneService />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/contact' element={<ContactForm />} />
            <Route path='/allServices' element={<AllServices />} />
            <Route path='/editProfile' element={<EditProfile />} />
            <Route path='/createServices' element={<CreateServices />} />
            <Route path='/register' element={<Register />} />
            <Route path='/miServices' element={<MiServices />} />
            <Route path='/editService/:id' element={<EditService />} />
            <Route path='/review' element={<FormReview />} />
            <Route path='/myShopping' element={<MyShopping />} />
          </Routes>
          <Routes>
            <Route path='/adminLogin' index element={<AdminLogin />} />
            <Route path='/adminHome' element={<AdminHome />} />
            <Route path='/adminUsers' element={<AdminUsers />} />
            <Route path='/adminServices' element={<AdminAllServices />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
