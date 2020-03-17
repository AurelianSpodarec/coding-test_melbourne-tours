import React, { useEffect, useState, useRef } from 'react';
import { useForm } from '../../hooks';
import { signUp, signIn } from './../../services/api/auth';
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

function AuthLogin({ open, close }) {
    const { handleChange, handleSubmit, values } = useForm(onLogin, INITIAL_STATE_REGISTER);



    async function onLogin() {
        await signIn({ email: values.email, password: values.password })
    }



    return (
        <>


            <Form onSubmit={onLogin} noValidate autoComplete="off">
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

                <Form.Field control={Button}> <Button color='red'>Login</Button></Form.Field>
            </Form>


        </>
    )
}

export default AuthLogin;