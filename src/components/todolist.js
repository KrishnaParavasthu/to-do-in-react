import React, {Component} from 'react';
import TaskList from './task-list';

class ToDoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      items: []
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    let taskList = this.state.items;
    console.log(this.state.newTask);
    let newTaskItem = {
      text: this.state.newTask,
      key: Date.now()
    };
    taskList.push(newTaskItem);
    this.setState({items: taskList});
    this.setState({newTask: ''});
    console.log(this.state.items);
    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="addContainer">
          <form onSubmit={this.addItem}>
            <input type="text"
                   placeholder="enter task"
                   value={this.state.newTask}
                   onChange={(e) => {this.setState({newTask: e.target.value})}}>
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
        <div className="displayContainer">
          <TaskList tasks={this.state.items} />
        </div>
      </div>
    );
  }
}

export default ToDoList;
