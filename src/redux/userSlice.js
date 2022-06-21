import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

const token = localStorage.getItem("jwt");
const user = JSON.parse(localStorage.getItem("user"));
const {id}= user;
const initialState = user ? { isLoggedIn: true ,user}: { isLoggedIn: false, user: null };
const userSlice = createSlice({
  name:"user",
  initialState,
  reducers: {
  },
  extraReducers:(builder)=> {
    builder.addCase(register.pending,(state,action)=>{
    }).addCase(register.fulfilled,(state,action)=>{
    }).addCase(login.fulfilled,(state,action)=>{
      state.isLoggedIn = true;
      state.user = action.payload
    })
    .addCase(logout.fulfilled,(state,action)=>{
      state.isLoggedIn = false;
      state.user = null
    }).addCase(login.rejected,(state,action)=>{
      state.isLoggedIn = false;
      state.user = null;
    })
   
  }
})

export const register = createAsyncThunk("user/register",async (newUser)=>{
    try {
      const res = await axios({
        method: "post",
        url: "https://localhost:7252/api/register",
        data: newUser,
      });
      return res.data
    } catch (error) {
      console.log(error);
    }
})

export const login   = createAsyncThunk("user/login",async (user) => {
    const res =   await axios({
      method: "post",     
      url: "https://localhost:7252/api/login",
      headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
      data: user,
    });

    localStorage.setItem("jwt",JSON.stringify(res.data.jwt));
    localStorage.setItem("user",JSON.stringify(res.data.user));
    return res.data.user;
})
export const getUser = createAsyncThunk("user/getuser", async ()=>{
  const user =   await axios({
    method: "get",     
    url: "https://localhost:7252/api/user",
    headers: {
      'Authorization': `Basic ${token}` 
    }
  });
  return user;
})
export const logout   = createAsyncThunk("user/logout", () => {
  console.log("ccc");
   localStorage.removeItem("jwt");
})
export const remove = createAsyncThunk("user/remove",async (id)=>{
  await axios({
    method: "post",     
    url: "https://localhost:7252/api/remove",
    data: id,
  })
})
const {reducer} = userSlice;
export default reducer