import React from 'react';
import PropTypes from 'prop-types';
import './TodoList.css';
import TodoItemContainer from 'Containers/TodoItemContainer/TodoItemContainer';
import TodoFilters from 'Components/TodoFilters/TodoFilters';

const TodoList = (props) => {
  console.log(props);
  
  // Array.prototype.map
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  var todos = props.todoItems.map((todo) => {
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
      <TodoFilters 
        visibleItems={props.visibleItems} 
        handleVisibleItems={props.handleVisibleItems}
        />
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
