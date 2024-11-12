import React from 'react';
import IconButton from '@mui/material/IconButton';
import LinkedIn from '@mui/icons-material/LinkedIn';
import GitHub from '@mui/icons-material/GitHub';
import siteData from '../../assets/Data/siteData.json'

const SocialMediaNav = () => {
    return (
        <div className="socialMedia">
            <IconButton
                color="secondary"
                aria-label="Github"
                onClick={() => window.open(siteData.Github)}
            >
                <GitHub />
            </IconButton>
            <IconButton
                color="secondary"
                aria-label="LinkedIn"
                onClick={() => window.open(siteData.Linkedin)}
            >
                <LinkedIn />
            </IconButton>
        </div>
    );
};

export default SocialMediaNav;