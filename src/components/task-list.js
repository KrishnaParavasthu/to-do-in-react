import React, {Component} from 'react';

class TaskList extends Component {

  render() {
    let listItems = this.props.tasks.map((item) => {
        return (
          <li key={item.key}> {item.text} </li>
        );
      });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default TaskList;
