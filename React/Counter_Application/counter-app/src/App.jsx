import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Counter Application</h1>
    <p> Count: {count}</p>
    <button onClick={() => setCount(count + 1)} style ={{color:"green", padding:"10px", margin:"10px"}}>➕ Increment</button>
    <button onClick={() => setCount(count - 1)} style ={{color:"red", padding:"10px", margin:"10px"}}>➖ Decrement</button>
    <button onClick={() => setCount(0)} style ={{color:"blue", padding:"10px", margin:"10px"}}>🔄 Reset</button>
    </>
  )
}

export default App
