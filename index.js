import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './src/app/app.component';

render(
    <App/>,
    document.getElementById('root')
)
