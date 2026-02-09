import React from 'react'

const App = () => {
  //  const btnClicked=()=>{
    
  //       console.log("button is clicked ")
  //     }
  return (
    <div>
     
      <button id='btn' onClick={(elem)=>{
        console.log(elem.pageX)
      }}>
        Click here 
      </button>
    </div>
  )
}

export default App
