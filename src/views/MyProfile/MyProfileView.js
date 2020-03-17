import React, { useState, useContext } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContext, storageRef } from '../../context/ContextAuth';
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
import { updateUser } from './../../services/api/auth';
import firebase from './../../firebase';

function MyProfileView() {
    const { authData } = useContext(AuthContext);
    // const [userProfile, setUserProfile] = useState();
    const [name, setName] = useState("");


    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)


    function updateName(name) {
        setName(name)
    }

    function onSubmit() {
        updateUser(name)
    }

    const handleImageAsFile = (e) => {
        const image = e.target.files[0]
        setImageAsFile(imageFile => (image))
    }

    const handleFireBaseUpload = e => {
        e.preventDefault()
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = firebase.storage().ref(`/images/${imageAsFile.name}`).put(imageAsFile)

        uploadTask.on('state_changed', (snapShot) => {
            console.log(snapShot)
        }, (err) => {
            console.log(err)
        }, () => {
            firebase.storage().ref('images').child(imageAsFile.name).getDownloadURL()
                .then(fireBaseUrl => {
                    setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                    firebase.auth().currentUser
                        .updateProfile({
                            photoURL: fireBaseUrl
                        });
                })

        })
    }


    return (

        <div>
            <Banner image="https://newcastlebeach.org/images/melbourne-tour.jpg" />
            {authData.isAuthenticated ? "" : "You must be logged in to perform these actions! - need to create protected routes"}
            <div>My profile View</div>
            <Image src={imageAsUrl} />
            <div>
                <div>AVATAR: {authData.user && authData.user.photoURL ? <Image src={authData.user.photoURL} /> : "No image"}</div>
                <div>NAME: {authData.user && authData.user.displayName ? authData.user.displayName : "No name"}</div>
            </div>

            <form onSubmit={handleFireBaseUpload} >
                <input
                    type="file"
                    onChange={handleImageAsFile}
                />
                <Button color="green">upload to firebase</Button>
            </form>

            <Form onSubmit={onSubmit}>
                <Input onChange={(e) => updateName(e.target.value)} placeholder="Update Name" />
                <Button color="red">Update Name</Button>
            </Form>
        </div>
    );
}

export default MyProfileView;
