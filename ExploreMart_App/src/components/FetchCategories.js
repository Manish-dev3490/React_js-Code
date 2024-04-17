import { useEffect, useState } from "react";

const FetchCategoryList=()=>{
        const [FetchCategory,setFetchedcategory]=useState([]);
        
        const FetchData= async ()=>{
            const response=await fetch("https://dummyjson.com/products/categories");
            const json=await response.json();
            setFetchedcategory(json);
        }
    
    
        useEffect(()=>{
            FetchData();
        },[])
    
        
    return{FetchCategory}   
}

export default FetchCategoryList;

