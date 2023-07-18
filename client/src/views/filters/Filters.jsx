import { useState,useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { filter, getData, getTypeServices } from "../../Redux/actions"



const Filters = ({setPage}) => {
 
  const dispatch = useDispatch();
  const copyState = useSelector((state) => state.copyState);
  const allActivities = useSelector((state) => state.allActivities);
  const allTypeServices = useSelector((state) => state.typeServices);


  useEffect(() => {
    dispatch(getTypeServices());
  }, []);
  

  const [order, setOrder] = useState('');
  const [filterByType, setFilterByType] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const handleOrder = () => {
    let services = [...copyState];
    if(order === 'asc') services = services.sort((a, b) => a.name.localeCompare(b.name));
    if(order === 'des') services = services.sort((a, b) => b.name.localeCompare(a.name));
    if(order === 'high') services = services.sort((a, b) => b.price - a.price);
    if(order === 'low') services = services.sort((a, b) => a.price - b.price);
    dispatch(filter(services));
  };

  const selectTypeService = (event) => {
    const selectedType = event.target.value;
    setFilterByType(selectedType);
  
    if (selectedType === "all") {
      dispatch(getData())
    } else {
      const filteredServices = allActivities.filter(
        (srv) => srv.typeService === selectedType
      );
      setFilteredServices(filteredServices);
      dispatch(filter(filteredServices));
    };
    setPage(1);
  };

  const reset = () => {
    setOrder('');
    setFilterByType('');
    dispatch(getData());
    setPage(1);
  };

  useEffect(() => {
    handleOrder()
    setPage(1)
  }, [order]);
  

  return (
    <div className="mt-10">

        <select value={order} onChange={(event) => setOrder(event.target.value)} className="bg-salte-300 rounded w-[200px] text-center py-2 mx-2" >
          <option value=''>select by</option>
          <option value='asc'>A-Z</option>
          <option value='des'>Z-A</option>
          <option value='high'>High price</option>
          <option value='low'>Low price</option>
        </select>

        <select
        value={filterByType}
        className="bg-salte-300 rounded w-[200px] text-center py-2 mx-2"
        onChange={selectTypeService}>
        <option value="all">Select a Service type</option>
        {allTypeServices?.map((typeService) => 
          <option key={typeService.id}  value={typeService.type}>{typeService.type}</option>)}
        </select>

        <button className='bg-slate-900 text-white w-[60px] rounded' onClick={reset}>
          <div className='h-[30px] flex items-center justify-center'>
            <span >Reset</span>
          </div>
        </button>


    </div>
  );
};

export default Filters;