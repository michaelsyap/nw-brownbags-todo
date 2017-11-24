import React from 'react';
import './TodoForm.css';
import classnames from 'classnames';


const TodoForm = (props) => {
  let formClasses = classnames('card', 'form-card',  { '-active': props.isOpen });

  return (
    <div className={formClasses}>
      <div className="card-header"><span>New Todo Item</span></div>
      <div className="card-body">
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control"  onChange={props.handleChange} placeholder="Reserve a table in the restaurant.." />
          </div>
          <button type="submit" className="btn btn-success float-right">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
