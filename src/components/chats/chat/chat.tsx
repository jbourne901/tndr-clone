import React from 'react';
import './chat.css';
import {Link} from "react-router-dom";
import IChat from '../../../types/chat';
import Avatar from "@material-ui/core/Avatar";

interface IProps {
  chat: IChat;
}

const Chat = (props: IProps) => {

  return (
    <Link to={`/chat/${props.chat.name}`}>
      <div className="chat">      
        <Avatar src={props.chat.profilePic}
              className="chat-avatar"
              alt={props.chat.name}
        />
        <div className="chat-details">
          <h2>{props.chat.name}</h2>
          <p className="chat-message">{props.chat.message}</p>                
        </div>
        <p className="chat-timestamp">
          {props.chat.timestamp}
        </p>
      </div>
    </Link>      
  );
}

export default Chat;
