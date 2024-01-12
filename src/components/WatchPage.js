import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import Livechat from "./Livechat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("v"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex-col w-full">
      <div className="px-20 py-4 flex">
        <div>
          <iframe
            className="rounded-xl"
            width="900"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" w-full">
          <Livechat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
