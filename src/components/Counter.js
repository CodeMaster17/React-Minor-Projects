import React, { useState } from 'react';
import '../css/Counter.css';

const Counter = () => {

  const state = useState();
  // console.log(state);

  const [counter, setCounter] = useState(0)
  // [current value, final value] = useState(initial value)

  const Increase = () => {
    setCounter(counter + 1);
    console.log(counter);
  };

  return (
    <div>
      <h1>{counter} </h1>
      <button onClick={Increase}>Click Me</button>
    </div>
  );
};

export default Counter
