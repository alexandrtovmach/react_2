import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { UserComponent } from './app.components/user/user.component';
import './app.component.css';
import { reducer } from './app.components/user/reducer';

const store = createStore(reducer);

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Combat</h1>
                <Provider store={store}>
                    <UserComponent/>
                </Provider>
            </div>
        )
    }
}

export default App