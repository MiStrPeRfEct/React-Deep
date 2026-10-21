import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllProducts } from "./api/productApi";
import ProductCard from "./components/ProductCard";

const Infinite = () => {
    let limit = 10;

    const{data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage} = useInfiniteQuery({
        queryKey: ["products"],
        queryFn: ({pageParam})=> getAllProducts(limit, pageParam),
        initalPageParam: 0,
        getNextPageParam: (lastPage, AllPages) => {
            let loadedData = AllPages.length * limit;
            if(loadedData < lastPage.total) return loadedData;
            return undefined;

        }

    })
    if(isPending) return "loading..."

    let allProducts = data?.pages?.flatMap((val)=> val.products)??[]
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid w-full p-4 grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       {
        allProducts.map((val)=> <ProductCard key={val.id} product={val}/>)
       }
      </div>
      {
        hasNextPage && <button onclick={()=> fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More"}</button>
      }
    </div>
  );
};

export default Infinite;
