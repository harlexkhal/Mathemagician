import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif';
import './Nav.css';

class Nav extends React.PureComponent {
  render() {
    return (
      <nav className="nav-area">
        <Link className="logo-container" to="/">
          <img src={logo} className="App-logo" alt="logo" />
          <h3 className="app-name-logo">Mathemagician</h3>
        </Link>
        <div className="menu-container">
          <ul className="menu">
            <li><Link to="/" className="menu-option-style">Home</Link></li>
            <li><Link to="/calculator" className="menu-option-style">Calculator</Link></li>
            <li><Link to="/quotes" className="menu-option-style">Quotes</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
