import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navigator from "./components/Navigator";
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
// import { Router, Router } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import boardStore from './reducers';

const store = createStore(boardStore);
import {
    Home,
    RegisterBoard,
    Signin,
    Signup,
    ViewBoard
} from "./pages";

const Root = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Navigator/>
                    <Switch>
                        <Route exact={true} path="/" component={Home}/>
                        <Route path="/signin/:param" component={Signin}/>
                        <Route path="/signin" component={Signin}/>
                        <Route exact={true} path="/signup" component={Signup}/>
                        <Route path="/register" component={RegisterBoard}/>
                        <Route path="/:index" component={ViewBoard}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    )
};

export default Root;