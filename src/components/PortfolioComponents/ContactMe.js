import React from 'react';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';
import { useState } from 'react';
import sendEmail from '../../utilities/sendEmail.js';

const ContactMe = () => {
    const [contact, setContact] = useState(false);
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const sendContactEmail = async () => {
        if (email != '' && subject != '' && text != '' && email.match(isValidEmail)) {
            sendEmail(email, subject, text);
            setContact(true);
        } else {
            setError(true);
            setContact(false);
        }
    }

    return (
        <Container maxWidth="sm">
            {
                contact && <Alert severity="success" onClose={() => { setContact(false) }}> Thanks for sending the email, will contact you shortly.</Alert>
            }
            {
                error && <Alert severity="warning" onClose={() => { setError(false) }}> Please insert valid details.</Alert>
            }
            {!contact &&
                <Box
                    component="form"
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        mt: 4,
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Get in touch
                    </Typography>
                    <TextField
                        required
                        id="name"
                        label="Name"
                        variant="outlined"
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <TextField
                        required
                        id="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        required
                        id="message"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={() => sendContactEmail()}>
                        Submit
                    </Button>
                </Box>}
        </Container>
    );
};

export default ContactMe;