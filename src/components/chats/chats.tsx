import React from 'react';
import './chats.css';
import IChat, {testChats} from "../../types/chat";
import Chat from "./chat";

const Chats = () => {
  const chats = testChats;
  
  return (
    <div className="chats">
      {chats.map(c => (
        <Chat key={c._id} chat={c} />
      ))}
    </div>
  );
}

export default Chats;
