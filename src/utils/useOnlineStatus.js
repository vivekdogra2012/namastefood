import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnlineStatus] = useState(true);
    // check online status
    useEffect(()=>{
        window.addEventListener('online', ()=>{setOnlineStatus(true)});
        window.addEventListener('offline', ()=>{setOnlineStatus(false)});
    }, []);
    // return status
    return onlineStatus;
};

export default useOnlineStatus;