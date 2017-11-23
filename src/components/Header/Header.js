import React from 'react';
import './Header.css';
import classnames from 'classnames';

import TodoForm from 'Components/TodoForm/TodoForm';

const Header = (props) => {

  let openButtonClass = classnames('btn', 'float-right', {
    'btn-primary': !props.todoFormOpen,
    'btn-danger': props.todoFormOpen
  });

  let openButtonLabel = !props.todoFormOpen ? 'Add Todo' : 'Close Form'; 

  return (
    <header className="app-header">
      <div className="container -app-header">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">Todo App</a>
          <button className={openButtonClass} onClick={props.openTodoForm}> 
            { !props.todoFormOpen ? <i className="fa fa-plus"></i> : <i className="fa fa-close"></i>  }
            {' '}
            {openButtonLabel}
          </button>
        </nav>
        <TodoForm isOpen={props.todoFormOpen} addTodoProxy={props.addTodoProxy} />
      </div>
    </header>
  );
};

export default Header;
