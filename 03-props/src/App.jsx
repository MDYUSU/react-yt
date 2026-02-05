import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className="parent">
      <Card user="yusuf" age={21} img="https://images.unsplash.com/photo-1769863467291-23cf7902f686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user="Annu" age={4} img="https://images.unsplash.com/photo-1768475965443-800a23634f0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
      <Card user="Shaki" age={50} img="https://images.unsplash.com/photo-1768209198274-01dd8d79cd1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App