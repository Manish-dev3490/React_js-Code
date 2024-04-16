import {All_Products_URL } from "./constant";
import { useState, useEffect } from "react";


// I am writing a custom hook for fetching data from apis

const useAllProduct=()=>{
    const [PopularData,setPopulardata]=useState([]);

    const FetchData= async ()=>{
        try{
            const response=await fetch(All_Products_URL);
            const json=await response.json();
            setPopulardata(json.products);

        }

        catch(err){
            console.log("Something is wrong in your custom hook" + err);
        }
    }

    useEffect(()=>{
        FetchData()
    },[])

    return {PopularData,setPopulardata,FetchData};

}


export default useAllProduct;