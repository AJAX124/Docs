import React from 'react'
import Back from "./components/Back"
import Fore from './components/Fore'

function App(){
  return (
    <div className='bg-zinc-800 w-full h-screen relative'>
      <Back/>
      <Fore/>
    </div>
  )
}

export default App