import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoInput:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({
            todoInput: event.target.value,
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addTodo(this.state.todoInput);
    }   
    componentDidMount() {
        console.log("Mount", this.props);
    }
    render () {
        return (
            <form onSubmit={event => this.handleSubmit(event)}>
                <input
                type="text"
                placeholder="Add todo"
                value={this.state.todoInput}
                onChange={event => this.handleChange(event)}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TodoForm;