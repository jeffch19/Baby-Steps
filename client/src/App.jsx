import './App.css'
import { Outlet, useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Error from './pages/Error';
import Journal from './pages/Journal';
import Login from './pages/Login';
import { AnimatePresence } from 'framer-motion';
import Signup from './pages/Signup';

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
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={< Signup/>} />
            <Route path='*' element={<Error />}/>
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default App
