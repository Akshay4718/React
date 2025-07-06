import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <h1 className='bg-white text-black'>Tailwind CSS</h1>
      <Card name="Nike"/>
      <Card/>
    </>
  )
}

export default App
