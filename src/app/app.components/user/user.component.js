import React, { Component } from 'react';
import ListUserComponent from './user.components/list.user.component';
import AddUserComponent from './user.components/add.user.component';
import FilterUserComponent from './user.components/filter.user.component';

export class UserComponent extends Component {
    // constructor(props){
    //     super(props);
    // }

    // addUser(callback) {
    //     let data = [...this.state.data];
    //     data.push(callback);
    //     this.setState({data});
    // }

    // removeUser(callback) {
    //     let data = [...this.state.data];
    //     data.splice(callback, 1);
    //     this.setState({data});
    // }

    render() {
        return (
            <div>
                <ListUserComponent/>
                <AddUserComponent/>
                <FilterUserComponent/>
            </div>
        )
    }
}
