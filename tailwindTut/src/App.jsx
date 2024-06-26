import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-200 text-black p-4 rounded-xl mb-4'>Tailwind CSS Tutorial</h1>
      <Card name="macbook" btnText='read' />
      <Card name="laptop" btnText='view' />
    </>
  )
}

export default App
