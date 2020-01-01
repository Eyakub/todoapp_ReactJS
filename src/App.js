import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import React, { Component } from "react";

export class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: "Title 1",
                completed: false
            },
            {
                id: 2,
                title: "Title 2",
                completed: true
            },
            {
                id: 3,
                title: "Title 3",
                completed: false
            }
        ]
    };

    // Toggle complete
    markComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    delTodo = id => {
        this.setState({
            // return any todo that not equal to the clicked one ID
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    };
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo />
                    <Todos
                        todos={this.state.todos}
                        markComplete={this.markComplete}
                        delTodo={this.delTodo}
                    />
                </div>
            </div>
        );
    }
}

export default App;
