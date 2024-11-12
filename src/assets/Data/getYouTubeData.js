import axios from 'axios';
import siteData from './siteData.json';

export const getYouTubeChannelVideos = async () => {
  try {
    const response = await axios.get(`${siteData.youTubeAPI.serverLink}/search`, {
      params: {
        part: 'snippet', channelId: siteData.youTubeAPI.channelId, maxResults: 20, key:siteData.youTubeAPI.key
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error', error);
    return null;
  }
};


