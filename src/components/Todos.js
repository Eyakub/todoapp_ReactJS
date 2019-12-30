import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

import React, { Component } from 'react'

export class Todos extends Component {
    render() {
        return (
            this.props.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))
        )
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos
