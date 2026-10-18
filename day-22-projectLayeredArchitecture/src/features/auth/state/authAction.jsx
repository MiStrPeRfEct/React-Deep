import { createAsyncThunk } from "@reduxjs/toolkit";
import {api} from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk("/auth/login",async(credentials, thunkApi)=>{
     try{
            const res = await api.post("/auth/login", credentials)
            toast.success("Login successful")
            localStorage.setItem("accessToken", res.data.accessToken)
            return res.data
    
        }catch(err){
            toast.error("Login failed")
            return thunkApi.rejectWithValue("login failed")
            
        }

})

export const hydrateUserAction = createAsyncThunk("/auth/hydrate",async (_,thunkApi)=>{
     let token = localStorage.getItem("accessToken")
    try{
        const res = await api.get("/auth/me",
            { headers : {
    'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
            }
  });
        return res.data

    }catch(err){
        toast.error("Unauthorized user")
        return thunkApi.rejectWithValue("unauthorized user")
        
    }

} ) 