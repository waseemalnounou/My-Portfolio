import React from 'react';
import SiteNav from './SiteNav.js';
import SocialMediaNav from './SocialMediaNav.js';
import '../../assets/style/components/header.css';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import homeImage from '../../assets/Images/waseem-alnounou.jpeg';

const Header = (props) => {
  const isMobile = props?.isMobile ?? false;
  return (
    <div className={isMobile?"mobileHeader":"header"}>
      {!isMobile && <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Waseem Alnounou
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <Typography variant="h5" component="h2" gutterBottom>
            Software Developer
          </Typography>
        </motion.div>
        <SocialMediaNav />
      </>
      }
      <SiteNav />
      {!isMobile && <div className='MyPhoto'>
        <img src={homeImage} alt='Waseem alnounou' />
      </div>}
    </div>
  );
};

export default Header;