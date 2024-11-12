import axios from 'axios';
import siteData from './siteData.json';

export const getCatsImages = async (limit = 13) => {
    try { const response = await axios.get(siteData.catImageApi.serverLink+"?api_key="+siteData.catImageApi.key+"&limit="+limit??15+"&q=developer"); return response.data;}
    catch (error) {
        console.error('Error fetching repositories:', error); return [];
    }
};

