import React from 'react';
import { Container, Button, Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomeSection = (props) => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={0} >
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h2" gutterBottom>
                        {props.title}
                    </Typography>
                </motion.div>
                <div>{props.children}</div>
                {props.link ? <Button color="secondary" component={Link} to={props.link}>Read More...</Button> : ""}
            </Paper>
        </Container>
    );
};

export default HomeSection;