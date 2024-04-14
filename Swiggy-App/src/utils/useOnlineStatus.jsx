// in this file i  am adding a feature of showing online and offline status to a user

import { useEffect , useState} from "react";

const useOnlineStatus = () => {

    const {OnlineState,setOnlineState}=useState(true)
    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineState(false)
        });

        window.addEventListener("online", () => {
            setOnlineState(true)
        });


      
    }, [])


    return OnlineState;
}

export default useOnlineStatus;