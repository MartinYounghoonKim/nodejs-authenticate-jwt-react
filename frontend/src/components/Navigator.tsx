import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';

const activeStyle = {
    color: '#ececec',
    fontSize: '18px'
};
const Navigator: React.SFC = (): JSX.Element => (
    <div>
        <ul>
            <li><NavLink to="/" activeStyle={activeStyle} exact={true}>Home</NavLink></li>
            <li><NavLink to="/signin" activeClassName="active" activeStyle={activeStyle}>Signin</NavLink></li>
            <li><NavLink to="/signup" activeClassName="active" activeStyle={activeStyle}>Signup</NavLink></li>
            <li><NavLink to="/register" activeClassName="active" activeStyle={activeStyle}>Register</NavLink></li>
        </ul>
    </div>
);

export default Navigator;