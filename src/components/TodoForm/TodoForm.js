import React from 'react';

const TodoForm = (props) => (
  <div className="card">
    <div className="card-header"><span>New Todo Item</span></div>
    <div className="card-body">
      <form action="">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Reserve a table in the restaurant.." />
        </div>
        <button type="submit" className="btn btn-success float-right">Submit</button>
      </form>
    </div>
  </div>
);

export default TodoForm;
