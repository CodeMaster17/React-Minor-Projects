import React, {useState} from 'react';

const DigitalClock2=()=>{
    const state = useState();
    const time = new Date().toLocaleTimeString();
    const [ChamgeTime, setTime] = useState(time);
    
    const MangaeTime=()=>{
        const Newtime = new Date().toLocaleTimeString();
        setTime(Newtime);
        
    }
    setTimeout(MangaeTime, 1000);
    return(
        <>
            <h1>{ChamgeTime}</h1>
        </>
    );
}
export default DigitalClock2