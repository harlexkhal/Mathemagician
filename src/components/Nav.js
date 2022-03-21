import logo from '../logo.gif';
import './Nav.css';
import React from 'react';

class Nav extends React.PureComponent {
  render = () => {
    return (
      <div className="nav-area">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className="app-name-logo">Mathemagician</h3>
      </div>
    );
  }
}
export default Nav;
