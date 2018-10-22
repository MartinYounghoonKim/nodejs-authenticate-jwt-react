import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Home,
    Signin,
    Signup
} from '../pages';

import Navigator from '../Components/Navigator';

class App extends React.Component {
    render () {
        return (
            <div>
                <Navigator/>
                <div>asdf</div>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/signin/:param" component={Signin}/>
                    <Route path="/signin" component={Signin}/>
                </Switch>
                <Route exact path="/signup" component={Signup}/>
            </div>
        )
    }
}

export default App;