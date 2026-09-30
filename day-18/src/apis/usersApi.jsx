import axios from "axios";

export let getData = async ()=>{
        let res = await axios.get("https://fakestoreapi.com/users")
        console.log(res.data);
    }
   