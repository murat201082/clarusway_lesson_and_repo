import React, { useState } from 'react';
import {useEffect, useRef} from 'react'

const UseRefComponent = () => {

  const inputRef = useRef(null);
  const divRef = useRef(null);

  const [value, setValue] = useState(0)

  useEffect(() => {
    // document.querySelector("input").focus();
    inputRef.current.focus();
    // inputRef.current.parentNode.style.backgroundColor = "red";
 
  }, [])

  const changeBgColor = () => {
    // divRef.current.style.backgroundColor = "orange";
    const colors = ["orange", "pink", "purple", "red", "#00ff00", "rgb(150,150,150"];

    const random = Math.trunc(Math.random() *(colors.length));
    // inputRef.current.parentNode.style.backgroundColor = colors[random];
    divRef.current.style.backgroundColor =inputRef.current.value;

  }

  const increase = () => {
    setValue(value + 1);
  }
  
  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref = {inputRef} placeholder="Enter text..." />
      <button onClick={changeBgColor} >ChangeColor</button>
    </div>
  );
};

export default UseRefComponent;
