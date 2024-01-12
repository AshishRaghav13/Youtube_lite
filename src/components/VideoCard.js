import React from "react";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;


  return (
    <div className="w-[311px] m-2  p-2 shadow-md rounded-lg  ">

      <img
        className="rounded-xl pb-2"
        src={thumbnails.standard?.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
