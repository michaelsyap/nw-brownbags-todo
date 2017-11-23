import React from 'react';
import './TodoList.css';
import TodoItem from 'Components/TodoItem/TodoItem';

// <TodoItem status="edit" />
const TodoList = (props) => {
  console.log(props.todoItems);
  var todos = props.todoItems.map((todo) => {
    return <TodoItem key={todo.id.toString()} details={todo} />
  })


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


export default TodoList;
