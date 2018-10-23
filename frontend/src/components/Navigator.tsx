import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navigator = (): JSX.Element => {
    const activeStyle = {
        color: '#ececec',
        fontSize: '18px'
    };
    return (
        <div>
            <ul>
                <li><NavLink to="/" activeStyle={activeStyle} exact={true}>Home</NavLink></li>
                <li><NavLink to="/signin" activeClassName="active" activeStyle={activeStyle}>Signin</NavLink></li>
            </ul>
        </div>
    )
};
export default Navigator;