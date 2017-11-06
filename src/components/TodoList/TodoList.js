import React from 'react';
import './TodoList.css';
import TodoItem from 'Components/TodoItem/TodoItem';


const TodoList = (props) => (
  <section className="todo-list">
    <div className="container">
      <ul className="list-group">
        <TodoItem />
        <TodoItem />
        <TodoItem status="edit" />
      </ul>
    </div>
  </section>
);


export default TodoList;
