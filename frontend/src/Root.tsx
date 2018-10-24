import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './pages/App';

const Root = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    )
};

export default Root;