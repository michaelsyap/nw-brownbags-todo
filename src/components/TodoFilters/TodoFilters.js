import React from 'react';
import classnames from 'classnames';
import './TodoFilters.css';

const filterTypes = [
  {
    name: 'ALL',
    label: 'All'
  },
  {
    name: 'PENDING',
    label: 'Pending'
  },
  {
    name: 'DONE',
    label: 'Done'
  }
];



const TodoFilters = (props) => (
  <section className="todo-filers">
    <div className="container">
      <div className="btn-group -todo-filters" role="group" aria-label="Basic example">

        {filterTypes.map((filter, key) => {
          let filterButtonClass = classnames('btn btn-warning', { 'active': filter.name === props.visibleItems });
          
          return <button type="button" key={key} className={filterButtonClass} value={filter.name} onClick={props.handleVisibleItems} value={filter.name}>{filter.label}</button>
        })}

      </div>
    </div>
  </section>
);

export default TodoFilters;
