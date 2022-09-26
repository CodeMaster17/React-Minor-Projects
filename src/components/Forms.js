//  forms in React js including controlled and uncontrolled components

import React from 'react';
import { useState } from 'react';


const Forms = () => {
    const state = useState();
    const [name, setName] = useState("");
    const [fullInput, setfullInput] = useState("");
    const inputHandler = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }
    const printName = () => {
        setfullInput(name);
    }
    return (
        <>
            <h1>Hello {fullInput}</h1>{ /* fullInput will be changed accordingly as we input the text */}


            <input type="text"
                placeholder="Enter your Name"
                onChange={inputHandler}
                value={name} // to make input feild
            />
            <button onClick={printName}>Click me</button>
        </>
    );
}
export default Forms;