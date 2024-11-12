import React from 'react';
import { Container, Typography } from '@mui/material';
import HomeSection from '../PortfolioComponents/HomeSection.js';
import siteData from '../../assets/Data/siteData.json';
import MySkillsComponent from '../PortfolioComponents/MySkillsComponent.js';
import { useEffect, useState } from 'react';
import { getCatsImages } from '../../assets/Data/getCatsImages.js';
import {isMobile} from 'react-device-detect';
import { motion } from 'framer-motion';
import SocialMediaNav from '../MasterPageComponents/SocialMediaNav.js';
import homeImage from '../../assets/Images/waseem-alnounou.jpeg';

const Home = () => {
    const [mySkills, setMySkills] = useState(siteData.mySkills ?? []);
    const [isloaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadMySkills = async () => {
            if (mySkills.length > 0) {
                let catImages = await getCatsImages(mySkills.length ?? 20);
                let myAwsomeSkills = mySkills.map((skills, i) => ({
                    ...skills,
                    imageLink: catImages[i]?.url ?? '',
                }));
                setMySkills(myAwsomeSkills);
                setIsLoaded(true);
            }
        };
        loadMySkills();
    }, []);

    return (
        <Container className='mainSection'>
            <Container>
                {isMobile && <>
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
                    <img className='myImageMobile' src={homeImage} alt='Waseem alnounou' />
                </>
                }
            </Container>
            {
                siteData.professionalSummary.map((e, i) => <HomeSection key={i} title={e.title} link={e.link}><Typography variant="p">{e.body}</Typography></HomeSection>).filter(e => e.key != 0)
            }
            {
                isloaded && <MySkillsComponent skills={mySkills} title='My Skills' />
            }
        </Container>
    );
};

export default Home;