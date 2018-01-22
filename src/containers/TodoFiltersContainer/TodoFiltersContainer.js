import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodoFilters from 'Components/TodoFilters/TodoFilters';
import { setTodoFilter  } from 'Actions/index';

class TodoFiltersContainerComp extends Component {
  constructor(props) {
    super(props);

    this.handleVisibleItems = this.handleVisibleItems.bind(this);
  }

  handleVisibleItems(e) {
    const filter = e.target.value;

    this.props.onChangeFilter(filter);

    e.preventDefault();
  }

  render() {
    return (<TodoFilters 
              visibleItems={this.props.todoAppUI.activeFilter}
              handleVisibleItems={this.handleVisibleItems}
              />);
  }
}

const mapStateToProps = (state) => {
  return {
    todoAppUI: state.todoAppUI
  }
};


const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: (filter) => {
      dispatch(setTodoFilter(filter));
    }
  }
}

const TodoFiltersContainer = connect(mapStateToProps, mapDispatchToProps)(TodoFiltersContainerComp);



export default TodoFiltersContainer;
