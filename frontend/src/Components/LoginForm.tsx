import * as React from 'react';

export default class LoginForm extends React.Component {
    render () {
        return (
            <div>
                <form>
                    <fieldset>
                        <input type='text' />
                        <input type='password' />
                    </fieldset>
                </form>
            </div>
        )
    }
}