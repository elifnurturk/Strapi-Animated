import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => 
{
  const [aboutData, setAboutMe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://t:1337/api/personal-datas/1/');
        setAboutMe(response.data.data.attributes);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        
  
        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
  
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white">
              {aboutData.artist_endname}
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 Created by Elif Nur TÜRK
            </p>
  
            <div className="flex gap-4">
                <a href={aboutData.artist_instagram}>
                <img
                key='instagram'
                src='/instagram.svg'
                alt='instagram'
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              /></a>
              <a href={aboutData.artist_facebook}>
                <img
                key='facebook'
                src='/facebook.svg'
                alt='facebook'
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              /></a>
              <a href={aboutData.artist_twitter}>
                <img
                key='twitter'
                src='/twitter.svg'
                alt='twitter'
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              /></a>
              
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
