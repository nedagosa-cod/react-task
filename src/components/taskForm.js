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
            <form onSubmit={this.onSubmit} style={formStyle}>
                <h1>Creación de tareas</h1>
                <input type="text" placeholder="Titulo de tarea" onChange={this.onChange} name="title" value={this.state.title} style={inputText} />
                <textarea
                    placeholder="Escribe una descripción"
                    onChange={this.onChange} name="description"
                    value={this.state.description}
                    style={inputArea}
                ></textarea>
                <br />
                <input type="submit" />
            </form>
        )
    }
}

const formStyle = {
    "display": "flex",
    "flexDirection": "column",
    "textAlign": "center",
    "alignItems": "center",

}

const inputText = {
    "width": "30%",
    "height": "22px",
    "paddingLeft": "20px",
    "margin": "10px",
    "border": "1px solid #000",
    "borderRadius": "8px",
    "outline": "none",
    "boxShadow": "-1px 2px 3px 1px black",
    "background": "white"
}

const inputArea = {
    "width": "40%",
    "height": "80px",
    "paddingLeft": "20px",
    "margin": "10px",
    "border": "1px solid #000",
    "borderRadius": "8px",
    "outline": "none",
    "boxShadow": "-1px 2px 3px 1px black",
    "background": "white",
    "padding": "10px 20px",
}