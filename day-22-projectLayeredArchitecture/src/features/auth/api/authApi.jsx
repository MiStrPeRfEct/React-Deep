import api from "../../../config/api";
export const loginUserApi = async (credentials)=> {
    try{
        const res = await api.post("/auth/login", credentials)
        localStorage.setItem("accessToken", res.data.accessToken)
        return res.data

    }catch(err){
        console.log(err)
        
    }

};
export const hydrateUser = async ()=> {
    let token = localStorage.getItem("accessToken")
    try{
        const res = await api.get("/auth/me",
            { headers : {
    'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
            }
  });
        return res.data

    }catch(err){
        console.log(err)
        
    }

}