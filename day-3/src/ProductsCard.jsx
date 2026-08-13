import React from 'react'

const ProductsCard = ({ product, del }) => {
   
  return (
    <div className="p-2 border-2 rounded flex flex-col gap-4
    ">
        <div className = "w-40">
            <img src={product.image} alt={product.name} />
        </div>
        <div>
            <h2 className = "font-semibold">{product.name.substring(0, 15)}...</h2>
            <p className='text-xs'>{product.id}</p>
            <p className='text-green-600'>${product.price.toFixed(2)}</p>
        </div>
        <button onClick={() => del(product.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
      
    </div>
  )
}

export default ProductsCard
