import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {

    TareaHecha () {
        return {
            fontSize : '20px',
            color : this.props.task.done ? 'gray' : 'black',
            textDecoration : this.props.task.done ? 'line-through' : 'none'
        }
    }

    render (){ 
        const {task} = this.props;

        return <div style={this.TareaHecha()}>
            {task.title} - 
            {task.descripcion} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <button style={closeTask} onClick={this.props.deleteTask.bind(this, task.id)}>
                X
            </button>
        </div>
    }
}

const closeTask = {
    fontSize : '18px',
    border : 'none',
    borderRadius : '50%',
    background : 'red',
    cursor : 'pointer'
}

export default Task;