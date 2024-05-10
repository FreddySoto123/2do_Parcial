
import { useState } from 'react'
import Componente1 from '../Componente1'
import Componente2 from '../Componente2'
import Composicion from '../Composicion'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


    <Componente1/>
    <Componente2/>
    <Composicion/>

    </>
  )
}

export default App


