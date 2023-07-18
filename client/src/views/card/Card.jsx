import { Link } from 'react-router-dom';

const Card = ({ serv }) => {
  return (
    <div
      className='flex items-end rounded h-[400px]'
      style={{
        backgroundImage: `url(${serv.files})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className='bg-slate-600 w-full h-1/2 flex items-center justify-center flex-col hover:h-full hover:transition-all duration-500'>
        <p className='font-bold uppercase text-white'>{serv.name}</p>
        <div>
          <p className='text-white'>${serv.price}</p>
        </div>
        <Link
          to={`/allServices/${serv.id}`}
          className='bg-slate-100 text-slate-950 uppercase w-[150px] py-2 mt-2 text-center shadow-lg rounded hover:bg-slate-300 cursor-pointer'
        >
          more
        </Link>
      </div>
    </div>
  );
};

export default Card;
