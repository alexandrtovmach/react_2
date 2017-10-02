import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterUserComponent extends Component {


    constructor(props){
        super(props);
    }

    search(bindObj, event) {
        event.preventDefault();
        this.props.onAddUser(this.refs.searchInput.value);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.search.bind(this, event)}>
                    <input name="name" defaultValue="" ref="searchInput"/>
                    <button type="submit">Search</button>
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
            dispatch({type: 'SEARCH_USER', payload: name})
        }
    })
)(FilterUserComponent);