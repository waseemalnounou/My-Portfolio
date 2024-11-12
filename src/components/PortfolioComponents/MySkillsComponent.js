import React from "react";
import { Container, Grid2, CardMedia, CardContent, Card, Typography, Box, Rating } from "@mui/material";
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const MySkillsComponent = (props) => {
    return (
        <Container>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h2" gutterBottom>{props.title}</Typography>
            </motion.div>
            <Grid2 container spacing={4}>
                {props.skills.map((skill, index) => (
                    <Grid2 item key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="150"
                                image={skill?.imageLink}
                                alt={skill.name}
                            />
                            <CardContent>
                                <Typography className="blackColor" variant="h5" component="div">
                                    {skill.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                        <Rating
                                            name="text-feedback"
                                            value={skill?.rank ?? 0}
                                            readOnly
                                            precision={0.5}
                                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                        />
                                        <Box sx={{ ml: 2 }}>{labels[skill?.rank ?? 0]}</Box>
                                    </Box>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
        </Container>
    );
}

export default MySkillsComponent;