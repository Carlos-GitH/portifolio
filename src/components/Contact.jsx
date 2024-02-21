import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { IoIosMail } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";



const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>
        <div className="flex gap-5 flex-direction-row align-items: center">
          <a href="https://wa.me/5581981463245" target="_blank" rel="noreferrer">
            <RiWhatsappFill className="text-8xl mt-3"/>
          </a>
          <a href="https://linkedin.com/in/carlosaluizio/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-8xl mt-3"/>
          </a>
          <a href="mailto:carlosagcf@outlook.com" target="_blank" rel="noreferrer">
              <IoIosMail className='text-9xl'/>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');