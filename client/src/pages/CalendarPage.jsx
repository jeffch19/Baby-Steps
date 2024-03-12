import { motion } from 'framer-motion';
import CalendarComponent from '../components/Calendar';
export default function CalendarPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='mainpage'>
                <CalendarComponent />
            </div>
        </motion.div>
    )
}