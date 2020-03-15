import React, { useState } from 'react';
import HomeVideo from './sections/HomeVideo/HomeVideo';
import { Icon, Input, Button, Form, Image, Container, Grid } from 'semantic-ui-react'
import { useForm } from '../../hooks';
import { signUp, signIn } from '../../services/api/auth';
import { TourItem } from '../../components';

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

    async function onSignIn() {
        await signIn({ email: "admin@gmail.com", password: "admin123" })
    }

    return (
        <div>

            <HomeVideo />

            <div>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column>
                            {/* <TourItem /> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>



            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src="https://newcastlebeach.org/images/melbourne-tour.jpg" />
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Enjoy awesome nightlife!</h2>
                        <p>lorem</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            <div>
                <Grid>
                    <Grid.Row columns={2}>

                        <Grid.Column>
                            <h2>Enjoy awesome nightlife!</h2>
                            <p>lorem</p>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src="https://2.bp.blogspot.com/-sdOoCckeJ0A/UzPJUPuqoCI/AAAAAAAAFXQ/zY3zJjuBa4k/s1600/IMG_2438.JPG" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Image src="/assets/images/restaurant-sealife.png" />
                    </Grid.Column>
                    <Grid.Column>
                        <h2>Enjoy awesome nightlife!</h2>
                        <p>lorem</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

            {/* <Button onClick={onSignIn}>Sign in</Button>
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
            </div> */}

        </div>
    )
}

export default Home;