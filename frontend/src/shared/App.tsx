import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Home,
    Signin,
    Signup
} from '../pages';

import Navigator from '../components/Navigator';

class App extends React.Component {
    public dynamicImport = () => (<Home/>);
    public render () {
        return (
            <div>
                <Navigator/>
                <div>asdf</div>
                <Switch>
                    <Route exact={true} path="/" component={this.dynamicImport}/>
                    <Route path="/signin/:param" component={Signin}/>
                    <Route path="/signin" component={Signin}/>
                    <Route exact={true} path="/signup" component={Signup}/>
                </Switch>
            </div>
        )
    }
}

export default App;