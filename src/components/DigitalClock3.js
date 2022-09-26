import React, {useState} from 'react';

const DigitalClock3=()=>{
    const state = useState();
    let time = new Date().toLocaleTimeString();
    const [changedTime, setTime] = useState(time);
    const TimeFunc=()=>{
        let newTime =  new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setTimeout(TimeFunc, 1000)
    return(
        <>
            <h1>{changedTime}</h1>
        </>
    )

}

export default DigitalClock3;