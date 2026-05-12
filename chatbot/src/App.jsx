import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="heading">AI Chatbot</h1>

      <div className="container">

        <div className="response">
          <p>Hi, How can I help you ?</p>
        </div>

        <div className="container-input">
          <input type="text" name="input" placeholder="Enter your querry" className="input"/>
          <button type="button">Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
