import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import {
    Home,
    Signin,
    Signup,
    RegisterBoard
} from './index';

import Navigator from '../components/Navigator';

class App extends React.Component {
    public render () {
        return (
            <div>
                <Navigator/>
                <Switch>
                    <Route exact={true} path="/" component={() => (<Home/>)}/>
                    <Route path="/signin/:param" component={Signin}/>
                    <Route path="/signin" component={Signin}/>
                    <Route exact={true} path="/signup" component={Signup}/>
                    <Route path="/register" component={RegisterBoard}/>
                </Switch>
            </div>
        )
    }
}

export default App;