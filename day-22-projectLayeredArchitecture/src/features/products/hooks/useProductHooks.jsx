import { useQuery } from "@tanstack/react-query";
import {
  getAllProductApi,
  getProductByCategory,
  getProductsCategories,
} from "../api/productApis";
import { useState } from "react";
import { useEffect } from "react";

export const useAllProduct = () => {
  
  const[search, setSearch] = useState(null)
  const[debounceSearch, setDebounceSearch] = useState(null)
  useEffect(()=>{
   let timeOut =  setTimeout(()=>{
      setDebounceSearch(search)
    },1000)

    return ()=>{
      clearTimeout(timeOut)
    }
  },[search])

  let { data, isPending, errors } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: ()=> getAllProductApi(debounceSearch),
  });
  return {
    data,
    isPending,
    errors,
    search,
    setSearch
  };
};

export const useAllCategories = () =>{
  return useQuery({
    queryKey : ['AllCategories'],
    queryFn : getProductsCategories,
  })
};

export const useProductByCategory = ()=>{
  const[category, setCategory] = useState(null)
  const[debounceSearch, setDebounceSearch] = useState(null)
  let {data} = useQuery({
    queryKey : ['productsByCategory',category],
    queryFn : ()=> getProductByCategory(category),
  })
  return{
    data,
    category,
    setCategory,
  }
}


