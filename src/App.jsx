import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Heading from './Components/Heading'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      </div>
      <Heading text="Ahsan's React Website!" />
      <h3 className='text-2xl text-slate-500 mt-6'>This is where I will be playing around with Tailwind</h3>
      <Form />
    </>
  )
}

export default App
