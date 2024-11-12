import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutMe = ({ children }) => {
    return (
        <Container className="about-me" maxWidth="md">
            <Box my={4}>
                {children}
            </Box>
        </Container>
    );
};

export default AboutMe;
