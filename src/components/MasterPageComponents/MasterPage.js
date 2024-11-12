import React, { useEffect } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import siteData from '../../assets/Data/siteData.json'
import {isMobile} from 'react-device-detect';

const MasterPage = ({ children }) => {
    useEffect(() => {
    }, [isMobile])
    
    return (
        <div className='Body'>
            <AppBar position="static">
                <Toolbar>
                    <Header isMobile={isMobile} />
                </Toolbar>
            </AppBar>
            <Box my={4}>
                {children}
            </Box>
            <Box mt={4} py={2} textAlign="center" bgcolor="grey.200">
                <Footer myName={siteData.myName}  body="Thank you for visiting my site" link={siteData.siteLink}>
                    Thank for visiting my site
                </Footer>
            </Box>
        </div>
    );
};

export default MasterPage