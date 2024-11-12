import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Container className='mainSection' >
            <Typography variant='h4'>404 - Page Not Found</Typography>
            <Typography variant='p'>Sorry, the page you are looking for does not exist.</Typography>
            <Button color="secondary" component={Link} to="/">Home</Button>
        </Container>
    );
};

export default NotFound;