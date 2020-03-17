import React, { useState, useContext } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContext } from '../../context/ContextAuth';
import { Banner } from '../../components';
import {
    Button,
    Container,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Form,
    Input
} from 'semantic-ui-react'
import { updateUser } from '../../services/api/auth';

function MyProfileView() {
    const { authData } = useContext(AuthContext);
    // const [userProfile, setUserProfile] = useState();
    const [name, setName] = useState("");

    function updateName(name) {
        setName(name)
    }

    function onSubmit() {
        updateUser(name)
    }

    return (

        <div>
            <Banner image="https://newcastlebeach.org/images/melbourne-tour.jpg" />
            My profile View
            {console.log("Current user", authData.user)}

            <div>
                <div>{authData.user && authData.user.photoURL ? <Image src={authData.user.photoURL} /> : "No image"}</div>
                <div>{authData.user && authData.user.displayName ? authData.user.displayName : "No name"}</div>
            </div>


            <Form onSubmit={onSubmit}>
                <Input onChange={(e) => updateName(e.target.value)} placeholder="Update Name" />
                <Button color="red">Update</Button>
            </Form>
        </div>
    );
}

export default MyProfileView;
