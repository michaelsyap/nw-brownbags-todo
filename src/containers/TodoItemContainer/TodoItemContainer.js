import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoItem from 'Components/TodoItem/TodoItem';

class TodoItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: props.details.text
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEditBlur = this.handleEditBlur.bind(this);
  }

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

  handleInputChange(e) {

    this.setState({
      todoText: e.target.value
    });

  }

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
        handleEditBlur={this.handleEditBlur}
        handleInputChange={this.handleInputChange}
        handleKeyPress={this.handleKeyPress}
        todoText={this.state.todoText}
        />
    )

  }
}


export default TodoItemContainer;
