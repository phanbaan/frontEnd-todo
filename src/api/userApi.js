import axiosClient from "./axiosClient";;

const  userApi = {
  register: (user)=>{
    const url ='/register';
    return axiosClient.post(url, { user });
  }
}

export default userApi;