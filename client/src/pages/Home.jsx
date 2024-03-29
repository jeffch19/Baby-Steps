import React from 'react';
import Background from "../assets/pastelBackground.png";
import Grouped from "../assets/groupimage.png";
import '../css/home.css';
import { motion } from 'framer-motion';


export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, duration: 0.3 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}>
            <div className='mainpage' style={{ backgroundImage: `url(${Background})` }}>
                <div className='babysteps text-4x1 text-black text-center font-lucida-calligraphy'>Baby Steps
                </div>
                    <h1 className='text-black text-center pt-8'>Pregnancy Journal</h1>
                    <p className='text-black text-center'>Every moment, a precious keepsake.</p>
                <div className="image-container">
                    <img src={Grouped} alt="Group of Icons" className="grouped" />
                </div>
            </div>
          
        </motion.div>
    )
}