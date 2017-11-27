import React from 'react';
import './TodoList.css';
import TodoItemContainer from 'Containers/TodoItemContainer/TodoItemContainer';
import TodoFilters from 'Components/TodoFilters/TodoFilters';

// <TodoItem status="edit" />
const TodoList = (props) => {
  console.log(props);
  
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


export default TodoList;
