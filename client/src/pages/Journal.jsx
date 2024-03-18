import { motion } from 'framer-motion';
import JournalCard from '../components/JournalCard';
import '../css/journalcard.css';

export default function Journal() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='mainpage'>
                <h1 className='text-black text-center' style={{ marginTop: '20px' }}>Thoughts...</h1>
                <JournalCard />
                {/* <CloudButton /> */}
            </div>
        </motion.div>
        
    )
}