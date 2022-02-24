import React from "react";
import Task from './task.js'

class Tasks extends React.Component {
    render() {
        return this.props.tasks.map(task => <Task 
            key={task.id}
            task={task}
            deleteTask={this.props.deleteTask}
            checkDone={this.props.checkDone}
            /> 
        )
    }
}
export default Tasks;