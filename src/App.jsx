import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

const options = {
  method: 'GET',
  url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
  params: {q: 'john wick'},
  headers: {
    'x-rapidapi-key': 'cb71281a97msh036212d3e3bc848p18e3e2jsn541ec39839d0',
    'x-rapidapi-host': 'online-movie-database.p.rapidapi.com'
  }
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    </>
  )
}

export default App
