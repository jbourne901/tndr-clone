import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import './header.css';
import Person from "@material-ui/icons/Person";
import Forum from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";

interface IProps {
  backButton?: string;
}

const Header = (props: IProps) => {
  const history = useHistory();
  let ctl;
  if(props.backButton) {
    ctl = (
            <IconButton onClick={() => history.replace(props.backButton || "")}>              
              <ArrowBackIos                 
                fontSize="large"
                className="header-icon"
              />        
            </IconButton>
    );
  } else {
    ctl = (
            <IconButton>
              <Person 
                fontSize="large"
                className="header-icon"
              />                      
            </IconButton>
    );
  }
  return (
    <div className="header">
      {ctl}
      <Link to="/">
        <img 
          className="header-logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=""
        />
      </Link>
      
      <Link to="/chat">
        <IconButton>
          <Forum
            fontSize="large"
            className="header-icon"
          />
        </IconButton>  
      </Link>      
    </div>
  );
}

export default Header;
