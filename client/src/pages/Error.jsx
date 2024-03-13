import { motion } from 'framer-motion';
export default function Error() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3}}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div>
                <h1 className='text-black'>Page not found</h1>
            </div>
        </motion.div>
    )
}