import './App.css'
import { useLocation, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Error from './pages/Error';
import Journal from './pages/Journal';
import CalendarPage from './pages/CalendarPage';
import Footer from './components/Footer';
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
            <Route path='/calendar' element={<CalendarPage />}/>
            <Route path='*' element={<Error />}/>
          </Routes>
        </AnimatePresence>
        <Footer />
      </main>
    </>
  )
}

export default App
