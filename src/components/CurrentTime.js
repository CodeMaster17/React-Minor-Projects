// import React, {useState} from 'react';

// const CurrentTime=() => {
//     let Time = new Date().toLocaleTimeString();
//     const [CurrentTime, setTime] = useState(Time);

//     const ChangeTIme=()=>{
//         let NewTime =  Time = new Date().toLocaleTimeString();
//         setTime(NewTime)
//     }

//     return(
//         <>
//             <h1>{Time}</h1>
//             <button onClick={ChangeTIme} >Get Time</button>
//         </>
//     )
// }
// export default CurrentTime;












import React, {useState} from 'react';

const CurrentTime = ()=>{
    const state = useState();
    let currentTime = new Date().toLocaleTimeString();
    const [time, setTime] = useState();

    const changeTime=()=>{
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    return(
        <>
            <h1>{currentTime}</h1>
            <button onClick={changeTime}>Get Time</button>
        </>
    )
}

export default CurrentTime;