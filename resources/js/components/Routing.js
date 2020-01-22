import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";

import Box from '@material-ui/core/Box';
import Home from './pages/home';
import About from './pages/about';
import NoMatch from './pages/no_match';

function Routing(){
	return (
        <Box ml={8}>
            <Switch><Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
            </Switch>
        </Box>
    );
}
export default Routing;
