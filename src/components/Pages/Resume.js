import React from 'react';
import { Container, Typography, Paper, Grid2, List, ListItem, ListItemText, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import siteData from '../../assets/Data/siteData.json';
import { Link } from 'react-router-dom';

const Resume = () => {
    return (
        <Container className='mainSection'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h2" gutterBottom>
                    My Resume
                </Typography>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Grid2 container spacing={3}>
                        <Grid2 className='fullwidth'>
                            <Typography variant="h4" gutterBottom>
                                {siteData.professionalSummary[0].title}
                            </Typography>
                            <div>
                                {siteData.professionalSummary[0].body}
                            </div>
                        </Grid2>
                    </Grid2>
                </Paper>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Grid2 container spacing={3}>
                        <Grid2 className='fullwidth'>
                            <Typography variant="h4" gutterBottom>
                                Experience
                            </Typography>
                            <List>
                                {siteData.experience.map((exp, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={exp.roleName} secondary={`${exp.employer}, ${exp.startDate}-${exp.endDate}`} />
                                        {
                                            exp.skills ?? <Typography variant="p" gutterBottom>{exp.skills}</Typography>
                                        }
                                    </ListItem>
                                ))}
                            </List>
                        </Grid2>
                    </Grid2>
                </Paper>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Grid2 container spacing={3}>
                        <Grid2 className='fullwidth'>
                            <Typography variant="h4" gutterBottom>
                                Education
                            </Typography>
                            <List>
                                {siteData.education.map((edu, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={edu.course} secondary={`${edu.school}, ${edu.startDate}-${edu.endDate}`} />
                                        {
                                            edu.skills ?? <Typography variant="p" gutterBottom>Skills: {edu.skills}</Typography>
                                        }
                                    </ListItem>
                                ))}
                            </List>
                        </Grid2>
                    </Grid2>
                </Paper>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                    <Grid2 container spacing={3}>
                        <Grid2 className='fullwidth'>
                            <Typography variant="h4" gutterBottom>
                                Certifications
                            </Typography>
                            <List >
                                {siteData.Certifications.map((crt, index) => (
                                    <ListItem key={index}>
                                        <ListItemText primary={crt.name} secondary={`${crt.date}`} />
                                        <Button component={Link} className="" variant="contained" rel="noopener noreferrer" target="_blank" to={crt.link}>View</Button>
                                    </ListItem>
                                ))}
                            </List>
                        </Grid2>
                    </Grid2>
                </Paper>
            </motion.div>
        </Container>
    );
};

export default Resume;