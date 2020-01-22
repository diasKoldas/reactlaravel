import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
	
}));


function About(){
    const classes = useStyles();
    return (
        <Box ml={8}>
            About
            <Link to="/">Home</Link>
        </Box>
    );
}
export default About;
