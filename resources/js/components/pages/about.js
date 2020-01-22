import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	red: {
        
    }
}));

function About(){
    const classes = useStyles();
    const [text, setText] = useState('Default');
    const setNewValue = (event) => {
        setText(event.target.value);
    }
    return (
        <Box ml={8} mt={5} className={classes.red}>
            About {text}
            <Link to="/">Home</Link>
            <div>
                <TextField value={text} label="Standard" onChange={setNewValue}/>
            </div>
            {text} {text} {text} {text}
        </Box>
    );
}
export default About;
