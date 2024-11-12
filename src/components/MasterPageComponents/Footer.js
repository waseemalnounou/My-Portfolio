import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = (props) => {
    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    {props.title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    {props.children}
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href={props.link}>
                        {props.myName}
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;