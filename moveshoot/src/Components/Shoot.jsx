import React from 'react'
import { useState } from 'react';
import '../App.css'
const Shoot = () => {
 const arr = [
   { id: 1, color: Math.floor(Math.random() * 16777215).toString(16) },
   { id: 2, color: Math.floor(Math.random() * 16777215).toString(16) },
   { id: 3, color: Math.floor(Math.random() * 16777215).toString(16) },
   { id: 4, color: Math.floor(Math.random() * 16777215).toString(16) },
   { id: 5, color: Math.floor(Math.random() * 16777215).toString(16) },
 ];

 const [box, setBox] = useState(arr);
 const [inputValue, setInputValue] = useState(null);
 const [emptyDiv, setEmptyDiv] = useState([]);

 // get input value from input box
 const getValue = (v) => {
   setInputValue(v);
 };

 // when we click on button
 const onSubmit = () => {
   let val = box.find((item) => item.id === Number(inputValue));
   if (val) {
     let box2 = box.filter((item) => item.id !== Number(inputValue));
     setBox([...box2]);
     setEmptyDiv([...emptyDiv, val]);
   }
 };

 // send box from empty box to stack
 const backToStack = (id) => {
   let val2 = emptyDiv.find((item) => item.id === id);
   if (val2) {
     let box2 = emptyDiv.filter((item) => item.id !== id);
     setEmptyDiv([...box2]);
     setBox([...box, val2].sort((a, b) => a.id - b.id));
   }
 };

 return (
   <div className="App">
     <div className="empty_div">
       <p>Empty Div</p>
       <div className="box">
         {emptyDiv.length !== 0 &&
           emptyDiv.map((item, index) => (
             <div
               className="ball"
               key={item.id}
               style={{ backgroundColor: `#${item.color}` }}
               onClick={() => backToStack(item.id)}
             >
               {item.id}
             </div>
           ))}
       </div>
     </div>

     {/* circles */}
     <div className="circles">
       {" "}
       {box.map((item) => (
         <div
           className="ball"
           key={item.id}
           style={{ backgroundColor: `#${item.color}` }}
         >
           {item.id}
         </div>
       ))}
     </div>

     {/* input box */}
     <div className="inputs">
       <input
         type="number"
         name="number"
         required
         id=""
         onChange={(e) => getValue(e.target.value)}
       />
       <button onClick={onSubmit}>Shoot</button>
     </div>
   </div>
 );
}

export default Shoot
