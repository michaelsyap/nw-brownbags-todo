import React from 'react';
import './TodoFilters.css';


const TodoFilters = (props) => (
  <section className="todo-filers">
    <div className="container">
      <div className="btn-group -todo-filters" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-warning active">All</button>
        <button type="button" className="btn btn-warning">Pending</button>
        <button type="button" className="btn btn-warning">Done</button>
      </div>
    </div>
  </section>
);

export default TodoFilters;
