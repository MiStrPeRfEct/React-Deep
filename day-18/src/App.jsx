import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [searchData, setSearchData] = useState(null);
  const [productsData, setProductsData] = useState([]);
  const[scrollY,setScrollY] = useState(null);

  let throttle = false;

  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
  };

  let filteredData = () => {
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchData.toLowerCase());
    });
    setProductsData(result);
  };
  // full part known as debouncing
  useEffect(() => {
    if (!searchData) return;
    let timeout = setTimeout(() => {
      filteredData();
    }, 700);

    return ()=> clearTimeout(timeout);
  }, [searchData]);
  // debouncing end

  //throttling

  useEffect(() => {
    let handleScroll = () => {
      if(throttle) return;
      throttle = true;
      setScrollY(window.scrollY);

      setTimeout(() => {
        throttle = false;
      }, 10000);

    }
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[])

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <h1>Debouncing</h1>

      <input
        style={{ padding: "10px 30px" }}
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearchData(e.target.value)}
      />

      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
