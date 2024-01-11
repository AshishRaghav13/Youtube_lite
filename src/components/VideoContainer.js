import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json.items);
    setVideo(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap mx-2">
      {videos.map((item) => (
        <Link key={item.id} to={"/watch?v=" + item.id}>
          <VideoCard  info={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
