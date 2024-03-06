import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

function App() {

  return (
    <>
      <main>
        <Navbar />
        <AnimatePresence initial={'false'} mode={'wait'}>
          <Outlet />
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
