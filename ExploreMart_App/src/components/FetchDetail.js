import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

// in this file i am going to fetch the data according to the id 

const FetchProductDetail=()=>{

    const [FetchedData,setFetchedData]=useState([]);
    
    const FetchData= async ()=>{
        const response=await fetch("https://dummyjson.com/products/"+useParams.resId);
        const json=await response.json();
        setFetchedData(json);
    }


    useEffect(()=>{
        FetchData();
    },[])


    return {useParams , FetchedData};
}

export  default FetchProductDetail;