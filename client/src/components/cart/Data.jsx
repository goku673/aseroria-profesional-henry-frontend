import React from "react"
import { useSelector } from "react-redux"


const Data = ({handleDeleteItem}) => {

    const items = useSelector((state) => state.items)

  return (
    <div>
            {items.map((it) => (
            <div key={it.id} className="bg-slate-300 flex p-3 my-1 rounded items-center justify-center">
                <div className="flex w-2/3 items-center justify-between">
                    <p>{it.name}</p>
                    <p>${it.price}</p>
                    <div className="bg-red-600 text-white rounded w-[30px] h-[30px] flex items-center justify-center cursor-pointer">
                        <button onClick={() => handleDeleteItem(it.id)}>
                            <span className="material-symbols-outlined">delete</span>
                        </button>
                    </div>
                </div>
            </div>
            ))}
    </div>



  )
}

export default Data