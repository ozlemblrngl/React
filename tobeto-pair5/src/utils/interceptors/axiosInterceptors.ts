import axios from'axios';

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/",
});

axiosInstance.interceptors.request.use((config:any) =>{
    config.headers.Authorization ="my token";
    console.log("bir istek atıldı..");
    return config;
});

axiosInstance.interceptors.response.use((value)=>{
    console.log("başarılı bir ceva alındı..")
    return value;
},
error =>{
    console.log("bir hata ile karşılaşıldı",error)
    return Promise.reject(error);
    // if(error.type =="BusinessExcepion"){
    //     //error.message => toastr ile göster
    // }
}

);


export default axiosInstance;