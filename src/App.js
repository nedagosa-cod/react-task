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

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id)
    this.setState({tasks: newTasks})
  }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id == id) {
        task.done = !task.done
      } 
      return task;
    })
    this.setState({tasks: newTasks})
  }

  render () {
    return <div>
      <TaskForm addTask={this.addTask} />
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
    </div>
  }
}

export default App;
