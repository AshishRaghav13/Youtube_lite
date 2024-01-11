import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {

  const [searchQuery, setsearchQuery] = useState("");
  // console.log(searchQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store)=>store.search);
  const dispatch = useDispatch();

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1],
    }));
  };

  useEffect(() => {
    // make an API call after every keyPress , but if the difference between two keypresses is <200ms
    //decline the API call
    const timer = setTimeout(() => {
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }
    else{
      getSearchSuggestions();
    }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // for every key press eg: a
  // render the component
  // useEffect()
  // start timer -> make api call after 200ms

  // if key press before 200ms
  // destroy the rendering component(useEffect return method)
  // re-render the component
  // useEffect
  // start timer -> make API call after 200 ms

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-6 my-[18px] cursor-pointer"
          src="https://blog.hubspot.com/hs-fs/hubfs/What%20is%20a%20Hamburger%20Button.png?width=338&name=What%20is%20a%20Hamburger%20Button.png"
          alt="hamburger icon"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img
            className="h-16 mx-2"
            src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
            alt="Youtube logo"
          />
        </a>
      </div>
      <div className="col-span-10 text-center">
        <div>
          <input
            className="text-black px-32 py-2 my-2 rounded-l-full border-2 border-gray-300 shadow-lg "
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setsearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-2 bg-gray-200 border-gray-200 px-4 py-2 rounded-r-full hover:bg-gray-300 ">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white px-5 ml-[20rem] w-[27rem] text-left shadow-lg rounded-xl">
            <ul>
              {suggestions.map((result) => (
                <li
                  key={result}
                  className="py-2 px-1 shadow-sm hover:bg-slate-100"
                >
                  {result}
                </li>
              ))}

              {/* <li className="py-2 px-1 shadow-sm hover:bg-slate-100">{suggestions[1]}</li> */}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-10 col-span-1"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&usqp=CAU"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Header;
