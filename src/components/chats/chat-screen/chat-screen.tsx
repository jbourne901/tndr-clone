import React, {useState, useEffect, useRef} from 'react';
import './chat-screen.css';
import IChat, {testChats2, testSelf, testSelfPic} from "../../../types/chat";
import { Avatar } from '@material-ui/core';

const ChatScreen = () => {
  const self = testSelf;
  const selfPic = testSelfPic;
  const msgs = testChats2;

  const [input, setInput] = useState<string>("");
  const onSend = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if(input) {
      setInput("");
      const msg: IChat = {
        _id: ""+(messages.length+1),
        name: self,
        message: input,
        timestamp: new Date().toLocaleDateString(),
        profilePic: selfPic
      }
      setMessages([...messages, msg]);
    }
  }
  
  
  const [messages, setMessages] = useState<IChat[]>(msgs);
  let name;
  let ts;
  if(messages) {
    name = messages[0].name;
    ts = messages[0].timestamp;
  }

  
  const ref = React.createRef<HTMLDivElement>();

  useEffect( () => {
    if(ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }    
  }, [messages]);

  const formatMessage = (m: IChat) => {
    if(m.name===self) {
      return (
        <div  key={m._id}
            className="chat-screen-message"
        >          
          <p className="chat-screen-text-self">
            {m.message}
          </p>
          <Avatar src={m.profilePic} 
                className="chat-screen-avatar-self"
                alt="" 
          />
        </div>        
      );
    } else {
      return (
        <div  key={m._id}
            className="chat-screen-message"
        >
          <Avatar src={m.profilePic} 
                className="chat-screen-avatar"
                alt="" 
          />
          <p className="chat-screen-text">
            {m.message}
          </p>
        </div>        
      );
    }
  } 

  return (
    <div className="chat-screen">
      <p>YOU MATCHED WITH {name} {ts}</p>
      <div 
        className="chat-screen-messages"
        ref={ref}
      >
        {messages.map(m => formatMessage(m))}
      </div>      
      <form action="" 
            className="chat-screen-form"
      >
          <input 
            className="chat-screen-input"
            placeholder="Type a message"
            type="text"
            value={input}
            onChange = {(e) => setInput(e.target.value)}
          />
          <button 
            className="chat-screen-button"
            onClick = {(e) => onSend(e)}
          >
              SEND
          </button>
      </form>
    </div>
  );
}

export default ChatScreen;
