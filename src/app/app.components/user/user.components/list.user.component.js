import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListUserComponent extends Component {

    constructor(props){
        super(props);
        console.log(this.props);
    }

    remove(index, event) {
        this.props.onRemoveUser(index);
    }

    render() {
        const userList = this.props.usersStore.map((elem, index) => {
            return (
                <div className="user" key={index}>
                    {index}.{elem}
                    <div className="remove-user" onClick={this.remove.bind(this, index)}>X</div>
                </div>
            )
        })

        return (
            <div className="user-list">
                {userList}
                <span className={(this.props.usersStore.length)? 'hidden': ''}>No users</span>
            </div>
        )
    }

}

export default connect(
    state => ({
        usersStore: state
    }),
    dispatch => ({
        onRemoveUser: (index) => {
            dispatch({type: 'REMOVE_USER', payload: index})
        }
    })
)(ListUserComponent);

