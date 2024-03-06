import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div>
          <p className='text-4xl underline'>Bebe steps</p>
        </div>
        <Outlet />
      </main>
    </>
  )
}

export default App
