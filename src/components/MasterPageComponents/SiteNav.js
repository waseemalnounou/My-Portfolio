import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid2 } from '@mui/material';
import { motion } from 'framer-motion';

const SiteNav = () => {
    return (
        <div className="mainNav">
            <Grid2 container spacing={4}>
                <Grid2 item xs={8}>
                    <motion.div
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    ><Link to="/"><Typography variant="h6">Home</Typography></Link></motion.div>
                </Grid2>
                <Grid2 item xs={8}>
                    <motion.div
                        initial={{ opacity: 0.4 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    ><Link to="/portfolio"><Typography variant="h6">Portfolio</Typography></Link></motion.div>
                </Grid2>
                <Grid2 item xs={8}>
                    <motion.div
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    ><Link to="/resume"><Typography variant="h6">Resume</Typography></Link></motion.div>
                </Grid2>
                <Grid2 item xs={8}>
                    <motion.div
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    ><Link to="/about"><Typography variant="h6">About me</Typography></Link></motion.div>
                </Grid2>
                <Grid2 item xs={8}>
                    <motion.div
                        initial={{ opacity: 0.1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    ><Link to="/contactme"><Typography variant="h6">Get in touch</Typography></Link></motion.div>
                </Grid2>
            </Grid2>
        </div>
    );
};

export default SiteNav;