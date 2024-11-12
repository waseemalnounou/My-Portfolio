import React from 'react';
import { Container, Avatar, Grid2, Paper, Typography } from '@mui/material';
import AboutMe from '../PortfolioComponents/AboutMe';
import { motion } from 'framer-motion';
import siteData from '../../assets/Data/siteData.json';
import myImage from '../../assets/Images/waseem-alnounou.jpeg'

const About = () => {
    return (
        <Container className='mainSection'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h2" gutterBottom>
                    About Me
                </Typography>
            </motion.div>
            <Paper>
                <Grid2 container spacing={1}>
                    <Grid2 item xs={12} sm={4}>
                        <div className='myAvatar'>
                            <Avatar
                                alt={siteData.myName}
                                sx={{ width: 56, height: 56 }}
                                src={myImage}
                            />
                            <Typography variant='p' gutterBottom>Waseem (He/Him)</Typography>
                        </div>
                    </Grid2>
                    <Grid2 item xs={12} sm={8}>
                        <AboutMe>
                            Hey there! I'm Waseem, a passionate Software Developer with over five years of experience. I specialize in the .NET stack and cloud technologies, currently honing my skills at Knight Frank in Brisbane.
                            Currently studying at QUT, focusing on data explorations and mining, software development, and security.
                            When I'm not coding, you'll likely find me hiking or exploring new travel destinations. These adventures keep me inspired and ready to tackle new challenges.
                            Let's connect and see how technology can drive your business forward!
                        </AboutMe>
                    </Grid2>
                </Grid2>
            </Paper>
        </Container>
    );
};

export default About;