import React from "react";
import { useSelector } from "react-redux";

// import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //early return  ,can do this or can use ternary operator

  if(!isMenuOpen) return null;
  return(
    <div className="m-4 px-8 shadow-lg rounded-md w-48">
      <ul className="">
        <li>
          Home
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
        {/* <li>Watch Later</li> */}
      </ul>

      <h1 className="font-bold pt-4">You</h1>
      <ul className="">
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>

      <h1 className="font-bold pt-4">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-4">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>live</li>
        <li>News</li>
      </ul>
    </div>
  );
};

export default SideBar;
