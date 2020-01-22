import React, { useState, useEffect } from 'react';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./Routing";

const theme = createMuiTheme({

});
function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routing />
            </Router>
        </ThemeProvider>
    );
}

export default App;