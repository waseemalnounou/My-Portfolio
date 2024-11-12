import React from "react";
import YouTube from "react-youtube";

const YouTubeVid = (props) => {
  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
    },
  };
  return <YouTube videoId={props.vidId} options={options} id="video" />;
}

export default YouTubeVid;