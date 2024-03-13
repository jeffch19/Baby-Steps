import { motion } from 'framer-motion';
import '../css/home.css';
export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='mainpage'>
                <h1 className='text-black text-center pt-8'>My Pregnancy Journal</h1>
                <p className='text-black text-center'>Every moment, a precious keepsake.</p>
            </div>
        </motion.div>
    )
}