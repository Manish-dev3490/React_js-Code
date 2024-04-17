import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FetchProductDetail=()=>{
    const {resId}=useParams();
        const [FetchedData,setFetchedData]=useState([]);
        
        const FetchData= async ()=>{
            const response=await fetch("https://dummyjson.com/products/"+resId);
            const json=await response.json();
            setFetchedData(json);
        }
    
    
        useEffect(()=>{
            FetchData();
        },[])
    
        
    return{FetchedData}   
}

export default FetchProductDetail;