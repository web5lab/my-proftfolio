import { motion } from 'framer-motion';
import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles/';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				className='mt-4 text-primary text-[17px] max-w-3xl leading-[30px]'
			>
				 I’m an experienced Blockchain Developer with expertise in Ethereum, Solidity, Cryptocurrency, and Smart Contracts. <br />
  Responsible for designing blockchain architecture, solving development issues, automating blockchain processes, managing projects, 
  developing REST APIs, and deploying scalable Node.js backends. <br />
  Expertise in blockchain development and experience in MongoDB. <br />
  Let's work together to bring your ideas to life!
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, 'about');
