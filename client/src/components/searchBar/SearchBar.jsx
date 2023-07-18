import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getServiceName } from '../../Redux/actions';

const SearchBar = ({ copyState, updateFilter }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');

  const eventChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    dispatch(getServiceName(searchValue));
  }, [dispatch, searchValue]);

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = copyState.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filtered.length === 0) {
      Swal.fire({
        title: 'service not found',
        icon: 'error',
      });
      navigate('/allServices');
    } else {
      updateFilter(filtered);
    }
    setSearchValue('');
  };

  const handleClear = () => {
    setSearchValue('');
    updateFilter(copyState);
  };

  return (
    <div className='my-10'>
      <form
        onSubmit={handleSearch}
        className='flex gap-2 items-center justify-center h-[40px]'
      >
        <input
          value={searchValue}
          onChange={eventChange}
          className='w-[600px] bg-slate-100 py-1 px-2 placeholder-slate-500'
          placeholder='search a service...'
        />
        <button
          type='submit'
          className='bg-slate-900 text-white w-[60px] rounded'
        >
          <div className='h-[30px] flex items-center justify-center'>
            <span className='material-symbols-outlined'>search</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
