import React from 'react';
import PropTypes from 'prop-types';

class Task extends React.Component {

    TareaHecha () {
        return {
            fontSize : '20px',
            color : this.props.task.done ? 'gray' : 'black',
            textDecoration : this.props.task.done ? 'line-through' : 'none',
            margin : '20px auto',
            border: '1px solid #000',
            borderRadius: '8px',
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 1px 5px 1px black',
            padding: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'white',
        }
    }

    render (){ 
        const {task} = this.props;

        return <div style={this.TareaHecha()}>
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
            <div>
                {task.title.toUpperCase()} <br />
                {task.descripcion}
                {task.done}
            </div>
                <button style={closeTask} onClick={this.props.deleteTask.bind(this, task.id)}>
                    x
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