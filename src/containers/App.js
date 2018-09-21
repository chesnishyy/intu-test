import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import StopWatch from "./StopWatch";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <StopWatch />
            </Provider>
        );
    }
}

export default App;
