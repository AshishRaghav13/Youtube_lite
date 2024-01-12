import React from "react";
const ChatMessage = ({name,message}) => {
  return (
    
     <div className="flex items-center shadow-lg p-2">
      <img
        className="w-9 h-9"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="px-2 font-bold">{name}: </span>
      <span>{message}</span>
      </div>

  );
};

export default ChatMessage;
