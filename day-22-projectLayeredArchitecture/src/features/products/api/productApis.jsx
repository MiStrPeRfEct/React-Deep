import {api } from "../../../config/api" 
export const getAllProductApi = async(search)=>{
    try{
        let url = search ? `/products?search=${search}` : "/products?limit=100"
        let res = await api.get(url)
        return res.data

    }catch(error){
        console.log(error)
    }
}
export const getProductsCategories = async()=>{
   try{
        let res = await api.get("/products/categories")
        return res.data

    }catch(error){
        console.log(error)
    }
}

export const getProductByCategory = async(category)=>{
   try{
        let res = await api.get(`/products/categories/${category}`)
        return res.data

    }catch(error){
        console.log(error)
    }
}