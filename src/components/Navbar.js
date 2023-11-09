import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

//props.title is for getting title
// props.aboutText is for getting about text
export default function Navbar(props) {

  // for dark mode 
  // declaring use state to change the state of different variable ( for dark and light mode)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [buttonText, setButtonText] = useState('Dark Mode');
  // function to toggle light and dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme={`${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            {/* <button className="btn btn-dark m-1" onClick={toggleDarkMode}>{`${isDarkMode ? 'Light Mode' : 'Dark Mode'}`}</button> */}





          </ul>
          <form className="d-flex" role="search">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label ${props.mode === 'dark' ? 'text-light' : 'text-dark'} `} htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
            </div>
            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button> */}
          </form>
        </div>
      </div>
    </nav>
  )
}
// type rfc for react function based components

// for defining more about proptypes
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

// for setting default values for props
Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'set about text here'
};

