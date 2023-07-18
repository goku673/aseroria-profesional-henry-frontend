import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import Filters from '../filters/Filters';
import Pagination from '../../components/pagination/Pagination';
import Card from '../card/Card';
import { getData } from '../../Redux/actions';
import Loader from '../../components/loader/Loader';

const AllServices = () => {
  const dispatch = useDispatch();

  const copyState = useSelector((state) => state.copyState);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(6);
  const [filteredCopy, setFilteredCopy] = useState(copyState);
  const [isLoading, setIsLoading] = useState(true)

  const idxLast = page * perPage;
  const idxFirst = idxLast - perPage;
  const currentData = copyState.slice(idxFirst, idxLast);
  const max = Math.ceil(copyState.length / perPage);

  useEffect(() => {
    const fetchData = () => {
      try {
        dispatch(getData())
        setTimeout(() => {
          setIsLoading(false)
        }, 2500)
      } catch (err) {
        setIsLoading(false)
      }
    }
    fetchData()
    setPage(1)
  }, []);


  const updateFilter = (filteredData) => {
    setFilteredCopy(filteredData);
  };

  const updateFilterSelect = (filteredData) => {
    setFilteredCopy(filteredData);
  };

  return (
    <div className='flex flex-col mx-auto w-full items-center border bg-slate-300 py-20'>
      <div className='flex gap-3'>
        <SearchBar copyState={copyState} updateFilter={updateFilter} />
        <Filters copyState ={copyState} updateFilterSelect={updateFilterSelect} setPage={setPage}/>
      </div>
      <div className='flex flex-wrap justify-center gap-4 w-full min-h-screen max-w-screen-lg mx-auto'>
        {isLoading ? (
          <Loader />
        ) : (
          currentData?.map((serv, idx) => (
            <div key={idx} className='rounded text-gray-900 w-[300px]'>
              <Card serv={serv} />
            </div>
          ))
        )}
      </div>
      <Pagination page={page} setPage={setPage} perPage={perPage} max={max} />
    </div>
  );
};

export default AllServices;
