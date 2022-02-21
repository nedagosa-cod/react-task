import React from 'react'

export default class TaskForm extends React.Component {

    state = {
        title : '',
        description : ''
    }

    onSubmit = e => {
        e.preventDefault();
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
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
