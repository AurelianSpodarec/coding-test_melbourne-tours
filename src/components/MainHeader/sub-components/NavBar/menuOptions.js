import React from 'react';
import {
    Button,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
    Dropdown,
    Image,
    Icon,
    Modal
} from 'semantic-ui-react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { signOut } from '../../../../services/api/auth';

//TODO: Put the item into its own component
export const menuOptions = [
    {
        key: 'my-user',
        text: (
            <div>
                <Icon icon="user" />
                <Link to="/my-profile">My Profile</Link>
            </div>
        )
    },
    {
        key: 'booked-tours',
        text: (
            <div>
                <Icon icon="map" />
                <Link to="/booked-tours">Booked Tours</Link>
            </div>
        )
    },
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

export default menuOptions;