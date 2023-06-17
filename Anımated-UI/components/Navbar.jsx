import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [navData, setNav] = useState([]);
  const [setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/personal-datas/1/');
        setNav(response.data.data.attributes);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          {navData.artist_firstname} <span></span>
          {navData.artist_endname}
        </h2>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={handleMenuClick}
        />
        {showMenu && (
          <ul className="absolute top-10 mt-0 h-250 p-2 z-10 bg-black right-28 top-16 dark:bg-gray-900 dark:border-gray-700 text-white">
            <li
              className="cursor-pointer"
              onClick={() => {
                const aboutSection = document.getElementById('hakkimda');
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hakkımda
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                const artworkSection = document.getElementById('eserlerim');
                artworkSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Eserler
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                const exhibitionsSection = document.getElementById('sanatım-hakkında');
                exhibitionsSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sanatım Hakkında
            </li>
            <li
              className="cursor-pointer"
              onClick={() => {
                const exhibitionsSection = document.getElementById('sergilerim');
                exhibitionsSection.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sergiler
            </li>
          </ul>
        )}
      </div>
    </motion.nav>
  ); }

export default Navbar;
