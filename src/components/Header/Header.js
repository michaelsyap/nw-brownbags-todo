import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="app-header">
        <div className="container">
          <h1>Todo Brownbags App</h1>
        </div>
      </header>
    )
  }
}

export default Header;
