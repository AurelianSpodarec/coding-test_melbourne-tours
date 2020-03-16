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

// import './MainHeader_styles.scss';

const INITIAL_STATE_REGISTER = {
    email: "",
    password: "",
}

function AuthDialog({ open, close }) {
    const { handleChange, handleSubmit, values } = useForm(onRegisterSubmit, INITIAL_STATE_REGISTER);

    async function onRegisterSubmit() {
        console.log("Reigster")
        await signUp({ email: values.email, password: values.password })
    }

    async function onSignIn() {
        await signIn({ email: "admin@gmail.com", password: "admin123" })
    }

    async function onGuest() {
        await signIn({ email: "guest@gmail.com", password: "guest123" })
    }


    return (
        <>
            <Modal open={open} size="tiny" onClose={close}>

                <div>
                    <Form onSubmit={onRegisterSubmit} noValidate autoComplete="off">
                        <h1>Sign up</h1>
                        <Input
                            iconPosition='left'
                            value={values.email}
                            onChange={handleChange}
                            placeholder='Email'
                            name="email"
                            type="email"
                        >
                            <Icon name='at' />
                            <input />
                        </Input>
                        <Input
                            iconPosition='left'
                            value={values.password}
                            onChange={handleChange}
                            placeholder='Password'
                            name="password"
                            type="password"
                        >
                            <Icon name='lock' />
                            <input />
                        </Input>

                        <Form.Field control={Button}> <Button color='red'>Sign Up</Button></Form.Field>
                    </Form>

                    <Form onSubmit={onRegisterSubmit} noValidate autoComplete="off">
                        <h1>Login</h1>
                        <Input
                            iconPosition='left'
                            value={values.email}
                            onChange={handleChange}
                            placeholder='Email'
                            name="email"
                            type="email"
                        >
                            <Icon name='at' />
                            <input />
                        </Input>
                        <Input
                            iconPosition='left'
                            value={values.password}
                            onChange={handleChange}
                            placeholder='Password'
                            name="password"
                            type="password"
                        >
                            <Icon name='lock' />
                            <input />
                        </Input>

                        <Form.Field control={Button}> <Button color='red'>Sign Up</Button></Form.Field>
                    </Form>

                    <Form onSubmit={onRegisterSubmit} noValidate autoComplete="off">
                        <h1>Log in as guest</h1>
                        <Button onClick={onGuest}>Login as Guest</Button>
                    </Form>
                </div>
            </Modal>
        </>
    )
}

export default AuthDialog;