import React from 'react';
import PropTypes from 'prop-types';
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
            
            <input type="text" className="form-control"  onChange={props.handleChange} placeholder="Reserve a table in the restaurant.."  disabled={props.isCreating} />
          </div>
          <button type="submit" className="btn btn-success float-right" disabled={props.isCreating}>Submit</button>
        </form>
      </div>
    </div>
  );
};

TodoForm.propTypes = {
  isOpen: PropTypes.bool,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func
};

export default TodoForm;


