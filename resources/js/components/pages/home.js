import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
	
}));


function Home(){
    const classes = useStyles();
    const [x, setX] = useState('Loading...');
    useEffect(() => {
        window.axios.get('/json/home')
            .then((response) => {
                setX(response.data.x);
            });
    }, []);

    return (
        <Box ml={8}>
            Home {x}
            <Link to="/about">About</Link>
        </Box>
    );
}
export default Home;
