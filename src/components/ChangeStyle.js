import React, {useState} from 'react'

const ChangeStyle=()=>{
    const state = useState();
    let color = '#1CD6CE';
    const [newStyle, setBg] = useState(color)
    
    const changeBgColor=()=> {
        let newBgColor = '#D61C4E';
        setBg(newBgColor);
     }

    return(
        <>
        <div style={{backgroundColor : newStyle ,width : '100%'}}>
            <button onClick={changeBgColor}>Click me </button>

        </div>
        </>
    );
}
export default ChangeStyle;