import React from 'react'

const App = () => {

  const sbmtform=(e)=>{
    e.preventDefault()
    console.log("form submitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        sbmtform(e)
      }}>
      <input type="text" placeholder='Type name'/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default App
