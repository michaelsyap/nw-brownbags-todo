import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TodoItem.css';


const TodoItem = (props) => {
  let listClasses = classnames(
    'list-group-item -todo-item',
    {
      '-edit-mode': props.onEditMode === props.details.id
    }
  );

  let textContainerClasses = classnames(
    'text-container -todo-item',
    {
      '-edit-mode': props.onEditMode === props.details.id
    }
  );

  const setInputToFocus = (input) => {

    if(input && props.onEditMode === props.details.id) {
      console.log(input);
      input.focus(); 
      input.setSelectionRange(input.value.length, input.value.length);
    }
  };


  return (
    <li className={listClasses}>
      <div className="checkbox-container">
        <input type="checkbox" className="checkbox" value={props.details.id} onChange={props.handleToggleTodo} checked={props.todoDone} />
      </div>
      <div className={textContainerClasses}>

        <span className="text" onDoubleClick={()=> props.handleEditMode(props.details)}>{props.details.text}</span>

        <input type="text"
          ref={setInputToFocus} 
          className="form-control" 
          value={props.todoText}
          onChange={props.handleInputChange}
          onKeyDown={props.handleKeyPress}
          onBlur={props.handleEditBlur} />

      </div>
      <div className="actions -todo-item">
        <button className="btn btn-danger" onClick={() => props.onTriggerDelete(props.details.id)}><i className="fa fa-trash"></i></button>
      </div>
    </li>
  )
};


TodoItem.propTypes = {
  status: PropTypes.string,
  value: PropTypes.object,
  details: PropTypes.object,
  handleToggleTodo: PropTypes.func,
  handleEditMode: PropTypes.func,
  handleDeleteTodo: PropTypes.func,
  handleInputChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
  handleEditBlur: PropTypes.func,
  todoText: PropTypes.string
};


export default TodoItem;


