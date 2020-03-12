import React, { useContext, useState } from 'react';
import {
    Button,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Dropdown,
    Image,
    Icon
} from 'semantic-ui-react'
import { AuthContext } from './../../../../context/ContextAuth';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { signOut } from '../../../../services/api/auth';

//TODO: Refactor
const options = [
    {
        key: 'user',
        text: (
            <div>
                <Icon icon="user" />
                <Link to="/my-profile">My Profile</Link>
            </div>
        )
    },
    { key: 'settings', text: 'Settings', icon: 'settings' },
    {
        key: 'sign-out',
        text: (
            <div>
                <Icon icon="sign out" />
                <p onClick={signOut}>Logout</p>
            </div>
        )
    },
]

const NavBar = (props) => {

    const { authData } = useContext(AuthContext);
    console.log("Navbar", authData)

    const trigger = (
        <span>
            {authData.user && authData.user.profile ?
                <Image avatar src={authData.user.profile} /> :
                <Icon name="user circle" />}
            {authData.user && authData.user.email}
        </span>
    )

    return (
        <>
            <Menu.Menu position='right'>
                <Menu.Item as='a' active><Link to="/">Home</Link></Menu.Item>
                <Menu.Item as='a'><Link to="/tours">Tours</Link></Menu.Item>

                {authData.isAuthenticated ?
                    <>
                        <Dropdown
                            trigger={trigger}
                            options={options}
                            pointing='top left'
                            icon={null}
                        />
                    </>
                    :
                    <Menu.Item position='right'>
                        <Button as='a' color="red" inverted>Log in</Button>
                        <Button as='a' color="red" style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                    </Menu.Item>
                }

            </Menu.Menu>
        </>
    );
}

export default NavBar;