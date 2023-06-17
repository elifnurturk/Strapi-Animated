import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import styles from '../styles';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';

const Sanat = () =>  {
  const [artData, setArt] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/content-sections/2/');
        setArt(response.data.data.attributes);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={`${styles.paddings} relative z-10`} id="sanatım-hakkında">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <img
            src={artData.content_imgurl}
            alt="get-started"
            className="w-[60%] h-[90%] object-contain rounded-full"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| Sanatım hakkında" />
          <TitleText title={<>{artData.work_desc}</>} />
          <div className="mt-[31px] flex flex-col max-w-[700px] gap-[24px]">
              <StartSteps
                number={1}
                text={artData.work_detail1}
              />
              <StartSteps
                number={2}
                text={artData.work_detail2}
              />
              <StartSteps
                number={3}
                text={artData.work_detail3}
              />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Sanat;
