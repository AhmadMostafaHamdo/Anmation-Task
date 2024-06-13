import { useState } from 'react'
import Intro from './Intro'
import Portfolio from './Portfolio'
import './global-rules.css'

export default function App() {
  const [test, setTest] = useState(false);
  setTimeout(()=>{
    setTest(true)
  },4000);
  function bgColor() {
    test 
    ? document.body.style.background = "white"
    : document.body.style.background = "black"
  }
  bgColor();
  return (
    <div>
      {
        test 
        ? <Portfolio/>  
        :<Intro/> 
      }
  </div>
  )
}

