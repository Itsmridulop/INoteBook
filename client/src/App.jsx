import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Display from './component/Display'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Display/>
    </>
  )
}

export default App
