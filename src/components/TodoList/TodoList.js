import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItemContainer from 'Containers/TodoItemContainer/TodoItemContainer';

const TodoList = (props) => {
  console.log(props);
  
  const activeFilter = props.todoAppUI.activeFilter;

  // Array.prototype.map
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  var todos = props.todoItems
                .filter((todo) => {
                  console.log(todo);
                  console.log(todo.done === true);
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
                            handleToggleTodo={props.handleToggleTodo}
                            handleEditMode={props.handleEditMode}
                            editTodoText={props.editTodoText}
                            onEditMode={props.onEditMode === todo.id}
                            handleDeleteTodo={props.handleDeleteTodo}
                             />
                });


  return (
    <section className="todo-list">
      <div className="container">
        <ul className="list-group">
          {todos}
        </ul>
      </div>
    </section>
  );
};

TodoList.propTypes = {
  visibleItems: PropTypes.string,
  handleVisibleItems: PropTypes.func,
  handleToggleTodo: PropTypes.func,
  handleEditMode: PropTypes.func,
  editTodoText: PropTypes.func,
  onEditMode: PropTypes.number,
  handleDeleteTodo: PropTypes.func
};


export default TodoList;
