import React, { useEffect, useState, useRef } from 'react';
import { useForm } from '../../hooks';
import { signUp, signIn } from '../../services/api/auth';
import {
    Button,
    Container,
    Image,
    List,
    Menu,
    Responsive,
    Modal,
    Input,
    Icon,
    Form,
    Segment
} from 'semantic-ui-react'
import AuthLogin from './AuthLogin';
import AuthRegister from './AuthRegister';

// import './MainHeader_styles.scss';

const INITIAL_STATE_REGISTER = {
    email: "",
    password: "",
}

function AuthDialog({ open, close }) {
    const { handleChange, handleSubmit, values } = useForm(onGuestLogin, INITIAL_STATE_REGISTER);


    async function onGuestLogin() {
        await signIn({ email: "guest@gmail.com", password: "guest123" })
    }


    return (
        <>
            <Modal open={open} size="tiny" onClose={close}>

                <div>

                    <AuthRegister />

                    <AuthLogin />

                    <Form onSubmit={onGuestLogin} noValidate autoComplete="off">
                        <h1>Log in as guest</h1>
                        <Button onClick={onGuestLogin}>Login as Guest</Button>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default AuthDialog;