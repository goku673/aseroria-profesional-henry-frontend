
const Pagination = ({max, page, setPage}) => {

    const handlePrevPage = () => {
        if(page < 2) return;
        setPage(page - 1)
    }
    
    const handleNextPage = () => {
        setPage(page + 1)
    }

    return (
    <div className="flex gap-10 mx-auto bg-slate-300 w-full items-center justify-center">
        <div className='flex gap-10'>
            <button onClick={handlePrevPage} className="bg-slate-900 w-[100px] py-2 my-20 text-white rounded">prev</button>
            <div className="mt-20 py-2 w-[100px] text-center bg-green-700 text-white h-[40px]">
                <span>Page: </span>{page}
            </div>
            <button disabled={page >= max} onClick={handleNextPage} className="bg-slate-900 w-[100px] py-2 my-20 text-white rounded">next</button>
        </div>
    </div>
  )
}

export default Pagination