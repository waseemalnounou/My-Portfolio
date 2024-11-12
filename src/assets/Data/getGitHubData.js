import axios from 'axios';
import siteData from './siteData.json';

export const getRepositories = async () => {
    try { const response = await axios.get(siteData.githubAPI.serverLink+"users/"+siteData.githubAPI.profile+"/repos"); return response.data; }
    catch (error) {
        console.error('Error fetching repositories:', error); return [];
    }
};

