import React from 'react';
import './swipe-buttons.css';
import Replay from "@material-ui/icons/Replay";
import Close from "@material-ui/icons/Close";
import StarRate from "@material-ui/icons/StarRate";
import Favorite from "@material-ui/icons/Favorite";
import FlashOn from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipe-buttons">
      <IconButton className="swipe-buttons-repeat">
        <Replay fontSize="large" />
      </IconButton>
      
      <IconButton className="swipe-buttons-left">
        <Close fontSize="large" />
      </IconButton>
      
      <IconButton className="swipe-buttons-star">
        <StarRate fontSize="large" />
      </IconButton>
      
      <IconButton className="swipe-buttons-right">
        <Favorite fontSize="large" />
      </IconButton>
      
      <IconButton className="swipe-buttons-flash">
        <FlashOn fontSize="large" />
      </IconButton>
      
    </div>
  );
}

export default SwipeButtons;
