import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoItem from 'Components/TodoItem/TodoItem';

class TodoItemContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: props.details.text
    };

    this.setRef = this.setRef.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleEditBlur = this.handleEditBlur.bind(this);
  }

  setRef(ref) {
    this.editField = ref;
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.onEditMode) {
  //     var node = ReactDOM.findDOMNode(this.editField);
  //     node.focus();
  //     node.setSelectionRange(node.value.length, node.value.length);
  //   }
  // }

  handleKeyPress(e) {
    console.log(e.keyCode);

    if(e.keyCode === 13) {
      console.log('Save');
    } else if (e.keyCode === 27) {

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
        setRef={this.setRef} 
        handleEditBlur={this.handleEditBlur}
        handleInputChange={this.handleInputChange}
        handleKeyPress={this.handleKeyPress}
        todoText={this.state.todoText}
        />
    )

  }
}


export default TodoItemContainer;
