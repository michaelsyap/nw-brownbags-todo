import React from 'react';
import './Header.css';

import TodoFormContainer from 'Containers/TodoFormContainer/TodoFormContainer';

const Header = (props) => (
  <header className="app-header">
    <div className="container -app-header">
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">Todo App</a>
        <button className="btn btn-primary float-right"> <i className="fa fa-plus"></i> Add Todo</button>
      </nav>
      <TodoFormContainer />
    </div>
  </header>
);

export default Header;
