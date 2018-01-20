import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import TodoItem from 'Components/TodoItem/TodoItem';

import { toggleTodo } from 'Actions';

class TodoItemContainerComp extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      todoText: props.details.text,
      todoDone: props.details.done
    };

    this.handleToggleTodo = this.handleToggleTodo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEditBlur = this.handleEditBlur.bind(this);
  }

  // Track the keycodes of the keypresses of the user
  handleKeyPress(e) {
    console.log(e.keyCode);

    if(e.keyCode === 13 && e.target.value.length > 0) {
      console.log('Save');

      this.props.editTodoText({
        ...this.props.details,
        text: e.target.value
      });

     this.props.handleEditMode();

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

  
  handleToggleTodo(e) {
    let id = e.target.value;

    this.setState({
      todoDone: !this.state.todoDone
    });
    
    this.props.onToggleTodo(id);
  }

  // When user leaves focus on editing the input field
  handleEditBlur(e) {

    this.setState({
      todoText: this.props.details.text
    });

    this.props.handleEditMode();
  }

  render() {

    return (
      <TodoItem 
        {...this.props}
        handleToggleTodo={this.handleToggleTodo}
        handleEditBlur={this.handleEditBlur}
        handleInputChange={this.handleInputChange}
        handleKeyPress={this.handleKeyPress}
        todoText={this.state.todoText}
        todoDone={this.state.todoDone}
        />
    )

  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: (id) => {
      return dispatch(toggleTodo(id))
    }
  }
};


const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItemContainerComp);


export default TodoItemContainer;
