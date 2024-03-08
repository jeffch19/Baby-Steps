import { motion } from 'framer-motion';
import JournalCard from '../components/JournalCard';
export default function Journal() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='mainpage'>
                <h1 className='text-black text-center pt-8'>Da journal</h1>
                <JournalCard />
            </div>
        </motion.div>
    )
}