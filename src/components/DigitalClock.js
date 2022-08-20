import React, {useState} from 'react'

const DigitalClock=()=>{

    const state = useState();
    let Time = new Date().toLocaleTimeString();
    const [newTime, setTime] = useState(Time);
    const timeChange=()=>{
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setTimeout(timeChange, 1000);
    
    return(
        <>
            <h1>{Time}</h1>
        </>
    )
}
export default DigitalClock;