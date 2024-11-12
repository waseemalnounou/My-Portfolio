import React from 'react';
import { Container, Grid2, Card, CardContent, Typography, CardMedia, Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';
import { getRepositories } from '../../assets/Data/getGitHubData';
import { getYouTubeChannelVideos } from '../../assets/Data/getYouTubeData';
import { useEffect, useState } from 'react';
import GitHub from '../../assets/Images/github_icon.png';
import { Link } from 'react-router-dom';
import YouTubeVid from '../PortfolioComponents/YouTubeVid';
import siteData from '../../assets/Data/siteData.json';
import { isMobile } from 'react-device-detect';

const Portfolio = () => {
    const [repositories, setRepositories] = useState([]);
    const [videos, setVideos] = useState(siteData.YouTubeVideos);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const loadRepos = async () => {
            let Data = await getRepositories();
            if (search) {
                Data = Data.filter(e => e.name.toLowerCase().includes(search.toLowerCase()));
            }
            setRepositories(Data)
        };
        const loadVideos = async () => {
            const Data = await getYouTubeChannelVideos(siteData.channelId);
            if (Data != null) { setVideos(Data); }
        };
        loadRepos();
        loadVideos();
    }, [search]);
    console.log({ repositories, videos })
    return (
        <Container className='mainSection'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Grid2 container spacing={4}>
                    <Grid2 item >
                        <Typography variant="h2">My Portfolio</Typography>
                    </Grid2>
                    {!isMobile &&
                        <Grid2 item className='searchBox' >
                            <TextField id="outlined-search" label="Search For Repo" type="search" onChange={(e) => setSearch(e.target.value)} />
                        </Grid2>
                    }
                </Grid2>
            </motion.div>

            <Grid2 container spacing={4}>
                {repositories.map((project, index) => (
                    <Grid2 item xs={12} sm={12} md={4} key={index}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="150"
                                image={GitHub}
                                alt={project.name}
                            />
                            <CardContent>
                                <Button component={Link} to={project.clone_url} target='_Blank'>
                                    <Typography className="blackColor" variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                </Button>
                                <Typography variant="body2" color="text.secondary">
                                    <div>
                                        <div><Typography variant='p'>Date Updated: {project.updated_at.split('T')[0]}</Typography></div>
                                        <div><Typography variant='p'>Stack: {project.language}</Typography></div>
                                    </div>
                                    <Button component={Link} to={project.clone_url} target='_Blank'>Visit Repo</Button>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                ))}
            </Grid2>
            <Grid2 className="paddingTop10" container spacing={4}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h2" gutterBottom>My Projects Videos</Typography>
                </motion.div>
                {videos.map((video, index) => <YouTubeVid key={index} vidId={video.ID} />)}
            </Grid2>
        </Container>
    );
};

export default Portfolio;