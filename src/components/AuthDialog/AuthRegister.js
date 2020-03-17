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

function AuthRegister({ open, close }) {
    const { handleChange, handleSubmit, values } = useForm(onRegisterSubmit, INITIAL_STATE_REGISTER);

    async function onRegisterSubmit() {
        console.log("Reigster")
        await signUp({ email: values.email, password: values.password })
    }

    return (
        <>

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


            </div>
        </>
    )
}

export default AuthRegister;