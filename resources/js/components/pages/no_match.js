import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation
} from 'react-router-dom';
import Box from '@material-ui/core/Box';

export default function NoMatch()
{
    return (
        <div>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}