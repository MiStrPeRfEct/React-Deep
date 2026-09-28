import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { AxiosInstance } from "../config/AxiosInstance";

const ProductPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);

  let getProductsData = async () => {
    try {
      let res = await AxiosInstance.get("/products");
      setProductsData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  if(loading) return <h1 className="text-4xl">Loading...</h1>
  return (
    <div className="grid grid-cols-4 gap-5">
      {productsData.map((val) => (
        <ProductCard key={val.id} product={val} />
      ))}
    </div>
  );
};

export default ProductPage;
