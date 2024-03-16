import React, { useState, useEffect } from 'react';
import babystepsLogo from "../assets/blue_logo.png";
import rightBouquetImage from "../assets/bouquetRight.png";
import leftBouquetImage from "../assets/bouquetLeft.png";
import "../css/calendar.css";
import { motion } from 'framer-motion';
import CalendarComponent from '../components/Calendar';

export default function CalendarPage() {

    // Logo counter state
    const [logoCount, setLogoCount] = useState(() => {
    // Retrieve count from local storage or default to 0
    const storedCount = parseInt(localStorage.getItem('logoCount')) || 0;
    return storedCount;
    });

  // Increment logo counter
  const incrementLogoCount = () => {
    setLogoCount(prevCount => prevCount + 1);
  };

  // Reset logo counter and clear local storage
  const resetLogoCount = () => {
    setLogoCount(0);
    localStorage.removeItem('logoCount');
  };

  // Update local storage when logo count changes
  useEffect(() => {
    localStorage.setItem('logoCount', logoCount.toString());
  }, [logoCount]);

    return (
        <>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 0.3 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}>
                <div className='mainpage'>
                {/* Banner with bouquets and h1 */}
                <div className="banner text-center relative">
                            <img src={leftBouquetImage} alt="bouquet left" className="bouquet-icon" />
                            <h1 className='text-black pt-8'>My Baby Kicks</h1>
                            <img src={rightBouquetImage} alt="bouquet right" className="bouquet-icon" />
                        </div>
                        {/* Logo button (BabySteps Logo) */}
                        <div className="text-center mt-4">
                            <button className="focus:outline-none" onClick={incrementLogoCount}>
                                <img src={babystepsLogo} alt="BabySteps Logo" className="logo mx-auto" />Tap the baby to count kicks.
                            </button>

                            {/* Display logo count */}
                            <div className='kicks'>Baby Kicks Counter: {logoCount}
                            </div>
                            {/* Reset button for logo count */}
                            <button name="reset" onClick={resetLogoCount}>Reset Count</button>
                        </div> 

                        <div className='monthly-calendar grid justify-items-center mx-auto text-black'>
                        <h2 className="text-xl font-bold">Monthly Calendar</h2>       
                        <CalendarComponent />
                    </div>
                </div>
        
            </motion.div>
       </>
    )
}