import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import TodoItem from 'Components/TodoItem/TodoItem';

import { toggleTodo, setActiveTodoEdit, deleteTodo, updateTodo } from 'Actions/index';

class TodoItemContainerComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: props.details.text,
      todoDone: props.details.done
    };

    this.handleEditMode = this.handleEditMode.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEditBlur = this.handleEditBlur.bind(this);
  }

  handleEditMode(todo) {
    let id = todo ? todo.id : 0;

    console.log(id);

    this.props.onTriggerToEdit(id);
  }


  // When user leaves focus on editing the input field
  handleEditBlur(e) {

    this.setState({
      todoText: this.props.details.text
    });

    this.handleEditMode();
  }

  // Track the keycodes of the keypresses of the user
  handleKeyPress(e) {
    const newTodo = {
      ...this.props.details,
      text: e.target.value
    };
    

    if(e.keyCode === 13 && e.target.value.length > 0) {
      console.log('Save');

      this.props.onTriggerUpdateTodo(newTodo);

      this.handleEditMode();

    } else if ((e.keyCode === 13 && e.target.value.length === 0) || e.keyCode === 27) {

      this.handleEditBlur();
    }
  }
  

  // Save to state all changes to the todo item text being edited
  handleInputChange(e) {

    this.setState({
      todoText: e.target.value
    });

  }

  handleToggleTodo(todo) {
    let id = todo.id;

    this.setState({
      todoDone: !this.state.todoDone
    });
    
    this.props.onToggleTodo(todo);
  }


  render() {
    console.log(this.props.todoAppUI);

    return (
      <TodoItem
        details={this.props.details}
        todoText={this.state.todoText}
        todoDone={this.state.todoDone}
        handleToggleTodo={this.handleToggleTodo}
        handleEditBlur={this.handleEditBlur}
        handleInputChange={this.handleInputChange}
        handleKeyPress={this.handleKeyPress}
        handleEditMode={this.handleEditMode}
        onEditMode={this.props.todoAppUI.activeEditItem}
        isUpdating={this.props.todoAppUI.todoItemUpdating}
        onTriggerDelete={this.props.onTriggerDelete}
        />
    )

  }
}

const mapStateToProps = (state) => {
  return {
    todoAppUI: state.todoAppUI
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (todo) => {
      return dispatch(toggleTodo(todo))
    },
    onTriggerToEdit: (id) => {
      return dispatch(setActiveTodoEdit(id))
    },
    onTriggerDelete: (todo) => {
      return dispatch(deleteTodo(todo.id, todo.remoteId))
    },
    onTriggerUpdateTodo: (todo) => {
      return dispatch(updateTodo(todo));
    }
  }
};


const TodoItemContainer = connect(mapStateToProps, mapDispatchToProps)(TodoItemContainerComp);


export default TodoItemContainer;
