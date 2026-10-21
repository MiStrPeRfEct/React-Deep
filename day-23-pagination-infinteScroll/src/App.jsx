import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  let limit = 10;
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);

  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip =${page * limit}`,
      );
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
 

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.products.map((val) => (
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
  );
};

export default App;
