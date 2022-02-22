import React from 'react'

export default class TaskForm extends React.Component {

    state = {
        title : '',
        description : ''
    }

    onSubmit = e => {
        this.props.addTask(this.state.title, this.state.description)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Escribe una tarea" onChange={this.onChange} name="title" value={this.state.title} />
                <br />
                <br />
                <textarea placeholder="Escribe una descripción" onChange={this.onChange} name="description" value={this.state.description}></textarea>
                <input type="submit" />
            </form>
        )
    }
}
