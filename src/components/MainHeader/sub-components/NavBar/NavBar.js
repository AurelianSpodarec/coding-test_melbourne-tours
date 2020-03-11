import React, { useState } from 'react';
import {
    Button,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <Menu.Menu position='right'>
                <Menu.Item as='a' active><Link to="/">Home</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/tours">Tours</Link></Menu.Item>
                {/* <Menu.Item as='a'>Company</Menu.Item> */}
                <Menu.Item position='right'>
                    <Button as='a' color="red" inverted>Log in</Button>
                    <Button as='a' color="red" style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
            </Menu.Menu>
        </>
    );
}

export default NavBar;