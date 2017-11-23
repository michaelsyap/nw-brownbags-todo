import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TodoItem.css';


const TodoItem = (props) => {
  let listClasses = classnames(
    'list-group-item -todo-item',
    {
      '-edit-mode': props.status
    }
  );

  let textContainerClasses = classnames(
    'text-container -todo-item',
    {
      '-edit-mode': props.status
    }
  );

  return (
    <li className={listClasses}>
      <div className="checkbox-container">
        <input type="checkbox" className="checkbox"/>
      </div>
      <div className={textContainerClasses}>
        <span className="text">{props.details.text}</span>
        <input type="text" className="form-control" value={props.details.text} />
      </div>
      <div className="actions -todo-item">
        <button className="btn btn-danger"><i className="fa fa-trash"></i></button>
      </div>
    </li>
  )
};


TodoItem.propTypes = {
  status: PropTypes.string
};


export default TodoItem;


