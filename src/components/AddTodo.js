import React, { Component } from "react";
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: '',
    }
    onChange = (e) => {
        this.setState({
            // this e.target.name here name will follow
            // the name attr from the input 
            // where it's Title now
            // so state.title will change
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        // submit the text as title
        this.props.addTodo(this.state.title);
        this.setState({ title: ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: '10', padding: '5px'}}
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange} />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex:'1'}} />
            </form>
        );
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.object.isRequired
}

export default AddTodo;
