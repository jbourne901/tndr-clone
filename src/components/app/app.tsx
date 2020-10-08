import React from 'react';
import './app.css';
import Header from "../header";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import TinderCards from "../tinder-cards";
import SwipeButtons from "../swipe-buttons";
import Chats from "../chats";
import ChatScreen from "../chats/chat-screen";

const App = () => {
  return (    
    <div className="app">      
      <BrowserRouter>            
        <Switch>
          <Route exact path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route exact path="/chat/:person">
            <Header backButton="/" />             
            <ChatScreen />
          </Route>
          <Route exact path="/chat">
            <Header backButton="/" />                
            <Chats />
          </Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;

