import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddUserComponent extends Component {


    constructor(props){
        super(props);
        this.state = {
            showForm: false
        }
    }

    save(bindObj, event) {
        event.preventDefault();
        this.props.onAddUser(this.refs.nameInput.value);
        this.refs.nameInput.value = '';
    }

    showForm() {
        this.setState({
            showForm: true
        })
    }
    
    render() {
        return (
            <div>
                <button className={this.state.showForm? 'hidden': ''} onClick={this.showForm.bind(this)}>Add</button>

                <form className={!this.state.showForm? 'hidden': ''} onSubmit={this.save.bind(this, event)}>
                    <input name="name" defaultValue="" ref="nameInput" required/>
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }

}

export default connect(
    state => ({
        usersStore: state
    }),
    dispatch => ({
        onAddUser: (name) => {
            dispatch({type: 'ADD_USER', payload: name})
        }
    })
)(AddUserComponent);