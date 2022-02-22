import React from 'react';
import './App.css';
import Task from './basesDeDatos/task.json'
import Tasks from './components/tasks.js'
import TaskForm from './components/taskForm.js'

class App extends React.Component {

  state = {
    tasks: Task
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      descripcion: description,
      id: this.state.tasks.length
    }
    console.log(newTask)
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render () {
    return <div>
      <TaskForm addTask={this.addTask} />
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}

export default App;
