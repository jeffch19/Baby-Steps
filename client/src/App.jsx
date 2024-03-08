import './App.css'
import { Outlet, useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import Journal from './pages/Journal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <main>
        <Navbar />
        <AnimatePresence initial={true} mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Home />}/>
            <Route path='/journal' element={<Journal />}/>
            <Route path='*' element={<Error />}/>
          </Routes>
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
