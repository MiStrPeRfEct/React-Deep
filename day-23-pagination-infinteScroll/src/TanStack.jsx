import React, { useState } from 'react'
import { getAllProducts } from './api/productApi'
import {keepPreviousData, useQuery } from '@tanstack/react-query'
import ProductCard from './components/ProductCard'


const Tanstack = () => {
    const [page, setPage] = useState(0)
    let limit = 10
    const TanStack = () =>{
        let {data, isPending, isError, isPlaceholderData} = useQuery({
            queryKey: ["products", page],
            queryFn: ()=> {getAllProducts(limit, page) },
            placeholderData: keepPreviousData

        })
    }
    if(isPending) return "loading..."
    if(isError) return "Something went wrong..."

    let totalPages = Math.ceil(data.total / limit)

  return (

    <div className="flex flex-col items-center gap-6">
        
      <div style = {{opacity: isPlaceholderData ? 0.3 : 1}}
      className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex gap-5">
        <button
        disabled={page === 0}
          onClick={() => setPage(page - 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          prev
        </button>
        <p>page {page + 1} of {totalPages}</p>
        <button
        disabled={page>=totalPages-1}
          onClick={() => setPage(page + 1)}
          className="p-3 bg-red-700 text-white rounded-xl"
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Tanstack
