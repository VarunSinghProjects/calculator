import React from 'react';
import './App.css';
import Keypad from './components/keypad';
import { useState } from "react"

function App() {
   //setting the state
   let [input, setInput] = useState("")           
     
   // function to handle the click events of digits
   function handleClick(value) {
    setInput(input + value)
  }
   
  // function to calculate the commands
  function calculate() {
    let outputVal = eval(input)
    setInput(outputVal)
   }
    
   // function to clear the input box
   function handleClear() {
    setInput("")
  }
     
      return (
        <>
         <div className="container">
            <div className="caculator">
                  <input type="text" 
                         value={input}
                         className="output"  
                  />
                  {/* rendering the key buttons component  */}
                  <Keypad handleClick={handleClick} 
                          handleClear={handleClear} 
                          calculate={calculate}
                  />

            </div>
         </div>
        </>
           
      )
}

export default App;


