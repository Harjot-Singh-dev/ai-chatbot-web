import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {GoogleGenerativeAi} from "@google/generative-ai";

function App() {
  const [count, setCount] = useState(0)

  const apiKey = import.meta.env.VITE_API_GEMINI_KEY;
  console.log(apiKey)

  // function fetchResponse{
  //   const ai = new GoogleGenAI({ apiKey: "AIzaSyAJMUc-XWzlN6tdSXizy9vWsYQJLoWmB2Y" });
async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

main();
  


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
