import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItemContainer from 'Containers/TodoItemContainer/TodoItemContainer';

const TodoList = (props) => {
  const activeFilter = props.todoAppUI.activeFilter;

  // Array.prototype.map
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  var todos = props.todoItems
                .filter((todo) => {
                  
                  switch(activeFilter) {
                    case 'PENDING':
                      return todo.done === false
                    case 'DONE':
                      return todo.done === true
                    default :
                      return true
                  }
                })
                .reverse()
                .map((todo) => {
                  return <TodoItemContainer 
                            key={todo.id.toString()}
                            details={todo}
                            onEditMode={props.onEditMode === todo.id}
                             />
                });
  console.log(props.todoAppUI.todoItemsFetching);

  return (
    <section className="todo-list">
      <div className="container">
        <ul className="list-group">
          {todos}
        </ul>

        {props.todoAppUI.todoItemsFetching ? 
          (
            <div className="loading-container">
              <p className="text">Loading...</p>
            </div>
          ) 
          : ''}
        
      </div>
    </section>
  );
};

TodoList.propTypes = {
  details: PropTypes.object
};


export default TodoList;
