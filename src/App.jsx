import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Answer from './components/Answer/Answer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App md:mx-48 mx-5">
      <Header></Header>
      <Blogs></Blogs>
      <Answer></Answer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
