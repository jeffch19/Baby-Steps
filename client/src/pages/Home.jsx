import { motion } from 'framer-motion';
export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}>
            <div className='mainpage'>
                <h1 className='text-black text-center pt-8'>My Pregnancy Journal</h1>
                <p className='text-black text-center'>Where your dreams come true</p>
            </div>
        </motion.div>
    )
}