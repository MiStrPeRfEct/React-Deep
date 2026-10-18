import {api} from "../../../config/api";
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
   

}