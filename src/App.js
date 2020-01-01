import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import uuid from "uuid";

export class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: "Title 1",
                completed: false
            },
            {
                id: uuid.v4(),
                title: "Title 2",
                completed: true
            },
            {
                id: uuid.v4(),
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

    addTodo = title => {
        const new_todo = {
            id: uuid.v4(),
            title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, new_todo]
        });
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route path="/" render={props => ()} />
                        <AddTodo addTodo={this.addTodo} />
                        <Todos
                            todos={this.state.todos}
                            markComplete={this.markComplete}
                            delTodo={this.delTodo}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
