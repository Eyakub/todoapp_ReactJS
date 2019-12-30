import "./App.css";
import Todos from "./components/Todos";
import React, { Component } from 'react'

export class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Title 1',
                completed: false,
            },
            {
                id: 2,
                title: 'Title 2',
                completed: true,
            },
            {
                id: 3,
                title: 'Title 3',
                completed: false,
            }
        ]
    }
    render() {
        return (
            <div>
                <Todos todos={this.state.todos}/>
            </div>
        )
    }
}

export default App;
