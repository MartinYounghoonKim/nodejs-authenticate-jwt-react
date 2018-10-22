import * as React from 'react';
import { Route, Link } from 'react-router-dom';
import {
    Home,
    Signin
} from '../pages';

import Navigator from '../Components/Navigator';

class App extends React.Component {
    render () {
        return (
            <div>
                <Navigator/>
                <div>asdf</div>
                <Route exact path="/" component={Home}/>
                <Route path="/signin/:param" component={Signin}/>
            </div>
        )
    }
}

export default App;