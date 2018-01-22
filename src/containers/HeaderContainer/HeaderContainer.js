import React, {Component} from 'react';
import Header from 'Components/Header/Header';
import { toggleTodoForm } from 'Actions';
import { connect } from 'react-redux';

class HeaderContainerComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  
  render() {
    return (
      <Header 
        todoFormOpen={this.props.todoFormOpen} 
        openTodoForm={this.props.openTodoForm}  />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todoFormOpen: state.todoAppUI.todoFormOpen
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openTodoForm: () => {
      return dispatch(toggleTodoForm());
    }
  }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerComp);



export default HeaderContainer;
