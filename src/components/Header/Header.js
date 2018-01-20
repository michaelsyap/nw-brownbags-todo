import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import classnames from 'classnames';

import TodoFormContainer from 'Containers/TodoFormContainer/TodoFormContainer';

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
        <TodoFormContainer todoFormOpen={props.todoFormOpen} addTodoProxy={props.addTodoProxy} />
      </div>
    </header>
  );
};


Header.propTypes = {
  todoFormOpen: PropTypes.bool,
  openTodoForm: PropTypes.func,
  addTodoProxy: PropTypes.func
};

export default Header;
