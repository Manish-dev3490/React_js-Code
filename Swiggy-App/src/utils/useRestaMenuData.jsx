import { useEffect,useState } from "react"
import { Api_data } from "../utils/constant";

// in this file i am writing a custom hook becuase my one files is javing 2 responsibility and also for optimizing and making maintable and testable code i  am writing it  

const useRestaMenuData=(resId)=>{

    const [RestaMenuData, setRestaMenuData] = useState("");

    const fetchdata= async ()=>{
        const response= await fetch(Api_data + resId);
        const json=await response.json();

        setRestaMenuData(json.data?.cards[2].card.card.info);
    }

    useEffect(()=>{
        fetchdata();
    },[]);

    return RestaMenuData;

}

export default useRestaMenuData;