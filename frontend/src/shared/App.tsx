import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    Home,
    Signin,
    Signup
} from '../pages';

import Navigator from '../Components/Navigator';

class App extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render () {
        return (
            <div>
                <Navigator/>
                <div>asdf</div>
                <Switch>
                    <Route exact path="/" component={() => <Home/>}/>
                    <Route path="/signin/:param" component={Signin}/>
                    <Route path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </div>
        )
    }
}

export default App;