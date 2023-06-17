import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { EserCard, TitleText, TypingText } from '../components';

const Eserler = () => {
  const [artPictures, setArtPictures] = useState([]);
  const [active, setActive] = useState('world-2');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/art-pictures');
        setArtPictures(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={`${styles.paddings}`} id="eserlerim">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Eserlerim" textStyles="text-center" />
        <TitleText
          title={<>Eserlerime göz at. </>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
        {artPictures.map((artPicture, index) => (
            <EserCard
              key={artPicture.id}
              id={artPicture.id}
              title={artPicture.attributes.arttitle}
              desc={artPicture.attributes.artdesc}
              imgUrl={artPicture.attributes.imgurl}
              index={artPicture.id}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Eserler;
