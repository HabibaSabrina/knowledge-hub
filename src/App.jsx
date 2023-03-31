import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarked from './components/Bookmarked/Bookmarked'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App mx-48">
      <Header></Header>
      <div className='grid grid-cols-3 gap-10'>
        <Blogs></Blogs>
        <Bookmarked></Bookmarked>
      </div>
    </div>
  )
}

export default App
