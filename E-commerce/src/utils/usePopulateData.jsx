import { useEffect , useState } from "react";

const usePopulateData=()=>{
     // Local state hook variables
     const [popularData, setPopularData] = useState([]);

     // Fetching the data over network
     const fetchDataFromApi = async () => {
         try {
             const response = await fetch("https://fakestoreapi.com/products?limit=5");
             const json = await response.json();
             setPopularData(json);
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