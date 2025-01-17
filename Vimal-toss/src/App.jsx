import { useState } from 'react'
import Flip from './components/Flip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Flip/>
    </>
  )
}

export default App
