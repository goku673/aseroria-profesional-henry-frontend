import { NavLink } from 'react-router-dom';
import bgd from '../assets/background.jpg';

const Hero = () => {

  return (
    <div className="h-screen w-full flex items-center justify-center bg-center bg-cover gap-2" style={{backgroundImage:`url(${bgd})`}}>
           <div className='flex w-full mx-auto items-center justify-center gap-20'>
            <p className="text-6xl font-bold text-gray-50">Servicios de asesoria comercial</p>
            {location.pathname !== '/home' && (
              <NavLink to='/login'>
                <button className='bg-slate-900 text-white w-[150px] rounded h-[40px] mt-4 hover:bg-slate-800'>Login</button>
                </NavLink>
            )}
           </div>
    </div>
  )
}

export default Hero;