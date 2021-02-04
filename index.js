/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/app/App';
import {name as appName} from './app.json';
import { Provider }  from 'react-redux'
import store from './src/state/store';

const MyApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => MyApp);
