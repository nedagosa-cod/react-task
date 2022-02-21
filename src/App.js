import React from 'react';
import './App.css';
import Task from './basesDeDatos/task.json'
import Tasks from './components/tasks.js'
import TaskForm from './components/taskForm.js'

class App extends React.Component {

  state = {
    tasks: Task
  }

  render () {
    return <div>
      <TaskForm />
      <Tasks tasks={this.state.tasks} />
    </div>
  }
}

export default App;
