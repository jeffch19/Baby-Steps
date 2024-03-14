import React from 'react';
import Background from "../assets/pastelBackground.png";
import MobileImage from "../assets/mobile.png";
import CribImage from "../assets/Crib.png";
import MotherImage from "../assets/mother.png";
import RattleImage from "../assets/rattle.png";
import BearImage from "../assets/bear.png";
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
                <h1 className='text-black text-center pt-8'>My Pregnancy Journal</h1>
                <p className='text-black text-center'>Every moment, a precious keepsake.</p>
                <div className="image-container">
                    <img src={CribImage} alt="Crib" className="crib" />
                    <img src={MobileImage} alt="Mobile" className="mobile" />
                    <img src={MotherImage} alt="Mother" className="mother" />
                </div>
                <div className="image-container2">
                    <img src={RattleImage} alt="Rattle" className="rattle" />
                    <img src={BearImage} alt="Bear" className="bear" />
                </div>
            </div>
        </motion.div>
    )
}