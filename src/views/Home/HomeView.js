import React, { useState } from 'react';
import HomeVideo from './sections/HomeVideo/HomeVideo';
import { Icon, Input, Button, Form } from 'semantic-ui-react'
import { useForm } from '../../hooks';
import { signUp } from '../../services/api/auth';

const INITIAL_STATE_REGISTER = {
    email: "",
    password: "",
}

function Home() {
    const { handleChange, handleSubmit, values } = useForm(onRegisterSubmit, INITIAL_STATE_REGISTER);

    async function onRegisterSubmit() {
        console.log("Reigster")
        await signUp({ email: values.email, password: values.password })
    }


    return (
        <div>

            <HomeVideo />

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

                <form>
                    <h1>Log in</h1>

                </form>
            </div>

        </div>
    )
}

export default Home;