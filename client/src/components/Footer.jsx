// import React from 'react';
import bouquetLeft from '../assets/bouquetLeft.png';
import bouquetRight from '../assets/bouquetRight.png';
import blueFetus from '../assets/blueFetus.png';
import '../css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={bouquetLeft} alt="bouquet left" className="footer-icon" />
        <p className="footer-text">Created with</p>
        <img src={blueFetus} alt="blue heart and fetus" className="footer-image" />
        <p className="footer-text">by JAHZ</p>
        <img src={bouquetRight} alt="bouquet right" className="footer-icon" />
      </div>
    </footer>
  );
};


export default Footer;
