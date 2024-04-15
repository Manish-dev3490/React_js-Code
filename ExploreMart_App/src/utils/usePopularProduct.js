import {Limit_product_api } from "./constant";
import { useState, useEffect } from "react";
// I am writing a custom hook for fetching data from apis

const usePopularProduct=()=>{
    const [PopularData,setPopulardata]=useState([]);

    const FetchData= async ()=>{
        try{
            const response=await fetch(Limit_product_api);
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


export default usePopularProduct;