import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BootstrapCarousel from './components/Carrosel';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container mt-4">
      <BootstrapCarousel />
    </div>
    </>
  )
}

export default App
