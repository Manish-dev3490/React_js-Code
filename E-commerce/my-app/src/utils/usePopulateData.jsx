import { useEffect , useState } from "react";

const usePopulateData=()=>{
     // Local state hook variables
     const [popularData, setPopularData] = useState([]);

     // Fetching the data over network
     const fetchDataFromApi = async () => {
         try {
             const response = await fetch("https://dummyjson.com/products?limit=15");
             const json = await response.json();
             setPopularData(json.products);
         } catch (error) {
             console.error("Error fetching data:", error);
             // Handle error state here if needed
         }
     };
 
     // useEffect Hook for fetching the data over a network
     useEffect(() => {
         fetchDataFromApi();
     }, []);
 
     
     return {popularData,fetchDataFromApi , setPopularData}
}

export default usePopulateData;