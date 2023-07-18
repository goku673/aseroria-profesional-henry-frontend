
const Loader = () => {

  return (
    <div className="bg-black mt-10 w-full h-screen flex flex-col items-center justify-center gap-10">
        <div className="animate-spin text-white">
        <span class="material-symbols-outlined">deployed_code</span>
        </div>
        <p className="text-white">Loading...</p>
    </div>
  )
}

export default Loader